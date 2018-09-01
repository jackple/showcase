import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import logger from 'utils/logger'
import ServiceExt from 'utils/serviceExt'
import { cryptData } from 'utils/common'
import { JwtPayload } from './interface'
import UserService from './../user/service'
import LoginDto from './dto/login.dto'

@Injectable()
export default class AuthService extends ServiceExt {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
    ) {
        super()
    }

    createToken(account: string) {
        const user: JwtPayload = { account }
        return this.jwtService.sign(user)
    }

    async login(loginDto: LoginDto) {
        if (!loginDto || !loginDto.account || !loginDto.password) {
            logger.error(loginDto)
            return this.createResData(null, '参数错误!', 1)
        }
        const { account } = loginDto
        const user = await this.userService.findUserByAccount(account)
        if (!user) {
            return this.createResData(null, '用户不存在!', 1)
        }
        if (cryptData(loginDto.password) !== user.password) {
            return this.createResData(null, '密码错误!', 1)
        }
        logger.info(loginDto)
        return this.createResData(
            {
                account,
                category: user.category,
                token: this.createToken(account),
            },
            '登录成功!',
        )
    }

    async validateUser(account: string) {
        const user = await this.userService.findUserByAccount(account)
        return user
    }
}
