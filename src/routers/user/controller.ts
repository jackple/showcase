import { Post, Body, Controller } from '@nestjs/common';

import UserService from './service';
import CreateDto from './dto/create.dto';
import LoginDto from './dto/login.dto';

@Controller('user')
export default class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/create')
    create(@Body() req: CreateDto) {
        return this.userService.create(req);
    }

    @Post('/login')
    login(@Body() req: LoginDto) {
        return this.userService.login(req);
    }
}
