import { Post, Body, Controller } from '@nestjs/common';

import AuthService from './service';
import LoginDto from './dto/login.dto';

@Controller('auth')
export default class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    login(@Body() body: LoginDto) {
        return this.authService.login(body);
    }
}
