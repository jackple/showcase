import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import AuthMiddleware from './auth.middleware'
import { JWT_SECRET_KEY } from 'config'
import AuthController from './controller'
import AuthService from './service'
import UserModule from '../user'

@Module({
    imports: [
        JwtModule.register({
            secretOrPrivateKey: JWT_SECRET_KEY,
            signOptions: {
                expiresIn: '72h'
            },
            verifyOptions: {
                ignoreExpiration: false
            }
        }),
        UserModule
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export default class AuthModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer.apply(AuthMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL })
    }
}
