import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
} from '@nestjs/websockets'
import { from, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Server } from 'socket.io'

@WebSocketGateway(9998)
export default class Gateway {
    @WebSocketServer()
    server: Server

    @SubscribeMessage('*')
    onEvent(): Observable<WsResponse<number>> {
        return from([1, 2, 3]).pipe(
            map(item => ({ event: 'events_from_server', data: item })),
        )
    }
}
