import { UseGuards, Get, Query, Controller } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import AuthService from './service';

@Controller('auth')
export default class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('token')
    createToken(@Query('account') account: string) {
        return this.authService.createToken(account);
    }

    @Get('data')
    @UseGuards(AuthGuard('jwt'))
    findAll() {
        // this route is restricted
    }
}
