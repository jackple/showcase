import { Post, Body, Controller } from '@nestjs/common';
import { LoginService, LoginParam } from './service';

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService) {}

    @Post()
    root(@Body() req: LoginParam): string {
        return this.loginService.root(req);
    }
}
