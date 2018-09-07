import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import UserController from './controller'
import UserService from './service'
import UserSchema from './schema'

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export default class UserModule {}
