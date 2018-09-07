import { NestFactory } from '@nestjs/core'
import * as dotenv from 'dotenv'
import { DOTENV_PATH, API_PREFIX } from 'config'

// run first, avoid to get env error in some other modules
dotenv.config({ path: DOTENV_PATH })

import { AppModule } from './app.module'
import WildcardsIoAdapter from './modules/socket/wildcardsIoAdapter'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    // support cors
    app.enableCors()
    // switch to newly created socket adapter
    app.useWebSocketAdapter(new WildcardsIoAdapter())
    // global api prefix
    app.setGlobalPrefix(API_PREFIX)
    await app.listen(9999)
}
bootstrap()
