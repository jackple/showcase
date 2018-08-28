import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import logger from 'utils/logger';
import { IUser } from './interface';
import CreateDto from './dto/create.dto';
import LoginDto from './dto/login.dto';

@Injectable()
export default class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<IUser>,
    ) {}

    async create(param: CreateDto) {
        const createdUser = new this.userModel(param);
        await createdUser.save();
        return '创建成功!';
    }

    login(param: LoginDto) {
        logger.info(param);
        return '登录成功!!!';
    }
}
