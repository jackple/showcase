import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import ServiceExt from 'utils/serviceExt';

@Injectable()
export default class AuthService extends ServiceExt {
    constructor(private readonly jwtService: JwtService) {
        super();
    }

    async createToken(account: string) {
        const accessToken = this.jwtService.sign(account);
        return this.createResData(accessToken);
    }

    async validateUser(account: string): Promise<any> {
        console.log(account);
        // put some validation logic here
        // for example query user by id/email/username
        return {};
    }
}
