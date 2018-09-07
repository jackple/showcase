import { Request, Response } from 'express'
import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common'
import * as jwt from 'jsonwebtoken'

import logger from 'utils/logger'
import { UNNECESSARY_AUTH_ROUTERS, JWT_SECRET_KEY } from 'config'
import { JwtPayload } from './interface'
import AuthService from './service'

function checkRouterNeedsAuth(path: string): boolean {
    for (const router of UNNECESSARY_AUTH_ROUTERS) {
        if (router.exact) {
            if (router.path === path) {
                return true
            }
        } else if (router.path === path || router.path.startsWith(`${path}/`)) {
            return true
        }
    }
    return false
}

@Injectable()
export default class AuthMiddleware implements NestMiddleware {
    constructor(private readonly authService: AuthService) {}

    async resolve(): Promise<MiddlewareFunction<Request, Response>> {
        return async (req, res, next) => {
            const unnecessaryAuth = checkRouterNeedsAuth(req.baseUrl)
            if (unnecessaryAuth) {
                return next()
            }
            const { authorization } = req.headers
            if (authorization && authorization.split(' ')[0] === 'Bearer') {
                const token = authorization.split(' ')[1]
                try {
                    const decoded = jwt.verify(token, JWT_SECRET_KEY) as JwtPayload
                    const user = await this.authService.validateUser(decoded.account)
                    if (user) {
                        return next()
                    }
                    res.status(402).json('can not find user by this token.')
                } catch (err) {
                    logger.error(err)
                    return res.status(403).json(err)
                }
            } else {
                return res.status(401).json('You must provide a valid authenticated access token.')
            }
        }
    }
}
