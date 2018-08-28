import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dbConf } from 'config/db';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from 'routers/user/module';

@Module({
    imports: [TypeOrmModule.forRoot(dbConf), UserModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
