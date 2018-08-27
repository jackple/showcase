import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';

import { AppModule } from './app.module';
import connect from './mongoDB/connect';

dotenv.config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // 支持跨域
    app.enableCors();
    await app.listen(9999);
    connect();
}
bootstrap();
