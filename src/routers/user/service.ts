import { Injectable } from '@nestjs/common';
import logger from 'utils/logger';

export interface LoginParam {
    account: string;
    password: string;
}

@Injectable()
export class UserService {
    login(param: LoginParam): string {
        if (!param || !param.account || !param.password) {
            logger.error(param);
            return '参数错误!';
        }
        logger.info(param);
        return '登录成功!!!';
    }
}
