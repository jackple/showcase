import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { JWT_SECRET_KEY } from 'config';
import AuthService from './service';
import { JwtPayload } from './interface';

type DoneFunc = (err: UnauthorizedException, data: any) => boolean;

@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: JWT_SECRET_KEY,
        });
    }

    async validate(payload: JwtPayload, done: DoneFunc) {
        const user = await this.authService.validateUser(payload.account);
        if (!user) {
            return done(new UnauthorizedException(), false);
        }
        done(null, user);
    }
}
