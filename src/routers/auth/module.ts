import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { JWT_RRIVATE_KEY, JWT_PUBLIC_KEY } from 'config';
import AuthController from './controller';
import AuthService from './service';
import JwtStrategy from './jwt.strategy';

@Module({
    imports: [
        JwtModule.register({
            secretOrPrivateKey: JWT_RRIVATE_KEY,
            publicKey: JWT_PUBLIC_KEY,
            signOptions: {
                // algorithm: 'RS256',
                expiresIn: 3600,
            },
            verifyOptions: {
                // algorithms: ['RS256'],
            },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export default class UserModule {}
