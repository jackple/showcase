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
    category: UserCategory;
}

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async create(param: CreateParam) {
        await this.userRepository.insert({
            ...param,
            createdAt: new Date(),
        });
        return '创建成功!';
    }

    login(param: LoginParam) {
        logger.info(param);
        return '登录成功!!!';
    }
}
