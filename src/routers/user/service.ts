import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import logger from 'utils/logger';
import { isDocumentExist } from 'utils/db';
import { IUser } from './interface';
import CreateDto from './dto/create.dto';
import LoginDto from './dto/login.dto';

@Injectable()
export default class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<IUser>,
    ) {}

    async create(param: CreateDto) {
        const isUserExist = await isDocumentExist(this.userModel, {
            account: param.account,
        });
        if (isUserExist) {
            return '用户已存在!';
        }
        const createdUser = new this.userModel(param);
        return await createdUser.save();
    }

    login(param: LoginDto) {
        logger.info(param);
        return '登录成功!!!';
    }
}
