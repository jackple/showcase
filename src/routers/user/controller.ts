import { Post, Body, Controller } from '@nestjs/common';
import { UserService, LoginParam } from './service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    root(@Body() req: LoginParam): string {
        return this.userService.login(req);
    }
}
