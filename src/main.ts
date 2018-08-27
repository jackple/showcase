import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';

// 优先执行, 避免引用项目模块时获取环境变量失败
dotenv.config();

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // 支持跨域
    app.enableCors();
    await app.listen(9999);
}
bootstrap();
