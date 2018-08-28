import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import logger from 'utils/logger';
import { cryptData } from 'utils/common';
import ServiceExt from 'utils/serviceExt';
import { IUser } from './interface';
import CreateDto from './dto/create.dto';
import LoginDto from './dto/login.dto';

@Injectable()
export default class UserService extends ServiceExt {
    constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {
        super();
    }

    async create(createDto: CreateDto) {
        if (!createDto || !createDto.account || !createDto.password) {
            logger.error(createDto);
            return this.createResData(null, '参数错误!', 1);
        }
        const isUserExist = await this.isDocumentExist(this.userModel, {
            account: createDto.account,
        });
        if (isUserExist) {
            return this.createResData(null, '用户已存在!', 1);
        }
        const createdUser = new this.userModel({
            ...createDto,
            password: cryptData(createDto.password),
        });
        const user = await createdUser.save();
        return this.createResData(user);
    }

    async login(loginDto: LoginDto) {
        if (!loginDto || !loginDto.account || !loginDto.password) {
            logger.error(loginDto);
            return this.createResData(null, '参数错误!', 1);
        }
        const user = await this.userModel.findOne({
            account: loginDto.account,
        });
        if (cryptData(loginDto.password) !== user.password) {
            return this.createResData(null, '密码错误!', 1);
        }
        logger.info(loginDto);
        return this.createResData(null, '登录成功!');
    }
}
