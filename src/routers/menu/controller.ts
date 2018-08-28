import { Get, Body, Controller } from '@nestjs/common';

import MenuService from './service';
import CreateDto from './dto/create.dto';

@Controller('menu')
export default class MenuController {
    constructor(private readonly menuService: MenuService) {}

    @Get()
    findAll(@Body() req: CreateDto) {
        return this.menuService.create(req);
    }
}
