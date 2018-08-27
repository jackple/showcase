import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dbConf } from 'config/db';

@Module({
    imports: [TypeOrmModule.forRoot(dbConf)],
})
export class AppModule {}
