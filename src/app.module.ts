import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dbConf } from 'config/db';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import modules from 'routers';

@Module({
    imports: [TypeOrmModule.forRoot(dbConf), ...modules],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
