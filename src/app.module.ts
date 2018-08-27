import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './routers/user/controller';
import { UserService } from './routers/user/service';
import { DoorChainController } from './routers/doorChain/controller';
import { DoorChainService } from './routers/doorChain/service';

@Module({
    imports: [],
    controllers: [AppController, UserController, DoorChainController],
    providers: [AppService, UserService, DoorChainService],
})
export class AppModule {}
