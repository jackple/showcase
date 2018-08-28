import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import ServiceExt from 'utils/serviceExt';
import { JwtPayload } from './interface';

@Injectable()
export default class AuthService extends ServiceExt {
    constructor(private readonly jwtService: JwtService) {
        super();
    }

    async createToken(account: string) {
        const user: JwtPayload = { account };
        const accessToken = this.jwtService.sign(user);
        return this.createResData(accessToken);
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        console.log(payload);
        // put some validation logic here
        // for example query user by id/email/username
        return {};
    }
}
