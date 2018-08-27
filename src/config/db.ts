import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const dbConf: TypeOrmModuleOptions = {
    type: 'mongodb',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 27017,
    database: process.env.DB_NAME || 'test',
    entities: [path.join(__dirname + './../**/*.entity.ts')],
    synchronize: true,
};
