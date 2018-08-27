import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import logger from 'utils/logger';
import { User, UserCategory } from './entity';

export interface LoginParam {
    account: string;
    password: string;
}

export interface CreateParam extends LoginParam {
    category?: UserCategory;
}

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    create(param: CreateParam) {
        if (!param) {
            logger.error(param);
            return '参数错误!';
        }
        this.userRepository.insert(param);
    }

    login(param: LoginParam) {
        if (!param || !param.account || !param.password) {
            logger.error(param);
            return '参数错误!';
        }
        logger.info(param);
        return '登录成功!!!';
    }
}
