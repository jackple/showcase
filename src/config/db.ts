import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const getEntityFiles = (fileName: string) => {
    return path.join(__dirname + `./../**/${fileName}`);
};

export const dbConf: TypeOrmModuleOptions = {
    type: 'mongodb',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 27017,
    database: process.env.DB_NAME || 'test',
    entities: [getEntityFiles('entity.ts'), getEntityFiles('**.entity.ts')],
    synchronize: true,
};
