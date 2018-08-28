import { Post, Body, Controller } from '@nestjs/common';

import UserService from './service';
import logger from 'utils/logger';
import CreateDto from './dto/create.dto';
import LoginDto from './dto/login.dto';

@Controller('user')
export default class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/create')
    create(@Body() req: CreateDto) {
        if (!req) {
            logger.error(req);
            return '参数错误!';
        }
        return this.userService.create(req);
    }

    @Post('/login')
    login(@Body() req: LoginDto) {
        if (!req || !req.account || !req.password) {
            logger.error(req);
            return '参数错误!';
        }
        return this.userService.login(req);
    }
}
