import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import logger from 'utils/logger';
import ServiceExt from 'utils/serviceExt';
import { IMenu } from './interface';
import CreateDto from './dto/create.dto';

@Injectable()
export default class MenuService extends ServiceExt {
    constructor(@InjectModel('Menu') private readonly menuModel: Model<IMenu>) {
        super();
    }

    async create(createDto: CreateDto) {
        if (!createDto || !createDto.account || !createDto.password) {
            logger.error(createDto);
            return this.createResData(null, '参数错误!', 1);
        }
        const isUserExist = await this.isDocumentExist(this.menuModel, {
            account: createDto.account,
        });
        if (isUserExist) {
            return this.createResData(null, '用户已存在!', 1);
        }
        const createdUser = new this.menuModel(createDto);
        const user = await createdUser.save();
        return this.createResData(user);
    }
}
