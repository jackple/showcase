import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dbConf } from 'config/db';
import { UserModule } from 'routers/user/module';

@Module({
    imports: [TypeOrmModule.forRoot(dbConf), UserModule],
})
export class AppModule {}
