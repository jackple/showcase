import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './routers/login/controller';
import { LoginService } from './routers/login/service';
import { DoorChainController } from './routers/doorChain/controller';
import { DoorChainService } from './routers/doorChain/service';

@Module({
    imports: [],
    controllers: [AppController, LoginController, DoorChainController],
    providers: [AppService, LoginService, DoorChainService],
})
export class AppModule {}
