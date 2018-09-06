import { Module } from '@nestjs/common'
import Gateway from './gateway'

@Module({
    providers: [Gateway],
})
export default class SocketModule {}
