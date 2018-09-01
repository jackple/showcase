import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { DB_CONN } from 'config/db'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import modules from 'routers'

@Module({
    imports: [
        MongooseModule.forRoot(DB_CONN, {
            useNewUrlParser: true,
        }),
        ...modules,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
