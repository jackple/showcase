import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import logger from 'utils/logger'
import { cryptData } from 'utils/common'
import ServiceExt from 'utils/serviceExt'
import { IUser } from './interface'
import CreateDto from './dto/create.dto'
import ModifyDto from './dto/modify.dto'
import DeleteDto from './dto/delete.dto'
import SearchDto from './dto/search.dto'

@Injectable()
export default class UserService extends ServiceExt {
    constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {
        super()
    }

    async create(createDto: CreateDto) {
        const { account, password } = createDto
        if (!account || !password) {
            logger.error(createDto)
            return this.createResData(null, '参数错误!', 1)
        }
        const isUserExist = await this.isDocumentExist(this.userModel, { account })
        if (isUserExist) {
            return this.createResData(null, '用户已存在!', 1)
        }
        const createdUser = new this.userModel({
            ...createDto,
            password: cryptData(password)
        })
        const user = await createdUser.save()
        return this.createResData(user)
    }

    async modify(modifyDto: ModifyDto) {
        const { _id, account } = modifyDto
        if (!_id) {
            logger.error(modifyDto)
            return this.createResData(null, '参数错误!', 1)
        }
        const theUser = await this.userModel.findOne({ _id })
        if (!theUser) {
            return this.createResData(null, '用户不存在!', 1)
        }
        // user account has changed
        if (theUser.account !== account) {
            const isUserExist = await this.isDocumentExist(this.userModel, { account })
            if (isUserExist) {
                return this.createResData(null, '用户名已存在!', 1)
            }
        }
        const modifyUser = new this.userModel(modifyDto)
        await modifyUser.update(modifyDto)
        return this.createResData('更新成功')
    }

    async delete(deleteDto: DeleteDto) {
        const { _id } = deleteDto
        if (!_id) {
            logger.error(deleteDto)
            return this.createResData(null, '参数错误!', 1)
        }
        const theUser = await this.userModel.findOne({ _id })
        if (!theUser) {
            return this.createResData(null, '用户不存在!', 1)
        }
        if (theUser.account === 'admin') {
            return this.createResData(null, '系统管理员不允许删除!', 1)
        }
        await this.userModel.deleteOne({ _id })
        return this.createResData('删除成功')
    }

    async findUserByAccount(account: string) {
        const user = await this.userModel.findOne({ account })
        return user
    }

    async findAll(searchDto: SearchDto) {
        const { pageSize, pageIndex } = searchDto
        let _pageSize = Number(pageSize),
            _pageIndex = Number(pageIndex)
        _pageSize = Number.isInteger(_pageSize) ? _pageSize : 30
        _pageIndex = Number.isInteger(_pageIndex) ? _pageIndex : 1
        // do not send user admin and password of anyone
        const total = await this.userModel.countDocuments({ account: { $ne: 'admin', $exists: true } })
        const users = await this.userModel
            .find({ account: { $ne: 'admin', $exists: true } }, { password: 0 })
            .skip((_pageIndex - 1) * _pageSize)
            .limit(_pageSize)
        return this.createResData({ total, users })
    }
}
