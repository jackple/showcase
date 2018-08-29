import { UseGuards, Post, Body, Controller } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import UserService from './service';
import CreateDto from './dto/create.dto';

@Controller('user')
@UseGuards(AuthGuard('jwt'))
export default class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/create')
    create(@Body() req: CreateDto) {
        return this.userService.create(req);
    }
}
