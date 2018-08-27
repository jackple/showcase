import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // 支持跨域
    app.enableCors();
    await app.listen(9999);
}
bootstrap();
