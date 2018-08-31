import { Get, Post, Body, Controller } from '@nestjs/common';

import UserService from './service';
import CreateDto from './dto/create.dto';

@Controller('user')
export default class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Post('create')
    create(@Body() req: CreateDto) {
        return this.userService.create(req);
    }
}
