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

    async findAll() {
        const menus = await this.menuModel.find({});
        return menus;
    }

    async create(createDto: CreateDto) {
        if (!createDto) {
            logger.error(createDto);
            return this.createResData(null, '参数错误!', 1);
        }
        const isMenuExist = await this.isDocumentExist(this.menuModel, {
            title: createDto.title,
        });
        if (isMenuExist) {
            return this.createResData(null, '菜单已存在!', 1);
        }
        const createdMenu = new this.menuModel(createDto);
        const menu = await createdMenu.save();
        return this.createResData(menu);
    }
}
