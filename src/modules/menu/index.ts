import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import MenuController from './controller'
import MenuService from './service'
import MenuSchema from './schema'

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Menu', schema: MenuSchema }])],
    controllers: [MenuController],
    providers: [MenuService],
})
export default class MenuModule {}
