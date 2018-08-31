import { Get, Post, Body, Controller } from '@nestjs/common';

import MenuService from './service';
import CreateDto from './dto/create.dto';

@Controller('menu')
export default class MenuController {
    constructor(private readonly menuService: MenuService) {}

    @Get()
    findAll() {
        return this.menuService.findAll();
    }

    @Post('create')
    create(@Body() createDto: CreateDto) {
        return this.menuService.create(createDto);
    }
}
