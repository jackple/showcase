import { Post, Body, Controller } from '@nestjs/common';

import { UserService, LoginParam, CreateParam } from './service';
import logger from 'utils/logger';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/create')
    create(@Body() req: CreateParam) {
        if (!req) {
            logger.error(req);
            return '参数错误!';
        }
        return this.userService.create(req);
    }

    @Post('/login')
    login(@Body() req: LoginParam) {
        if (!req || !req.account || !req.password) {
            logger.error(req);
            return '参数错误!';
        }
        return this.userService.login(req);
    }
}
