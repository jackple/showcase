import { IoAdapter } from '@nestjs/websockets'
import { EventEmitter } from 'events'
import * as socketioWildcard from 'socketio-wildcard'
import { Server } from 'socket.io'

export default class WildcardsIoAdapter extends IoAdapter {
    createIOServer(port: number, options?: any): any {
        const server: Server = super.createIOServer(port, options)
        server.use(socketioWildcard(EventEmitter))
        return server
    }
}
