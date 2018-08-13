import express from 'express';
import { Get, Headers, Res, Controller } from '@nestjs/common';
import { DoorChainService } from './service';

@Controller('door-chain')
export class DoorChainController {
    constructor(private readonly doorChainService: DoorChainService) {}

    @Get()
    root(@Headers('referer') referer: string, @Res() res: express.Response) {
        return this.doorChainService.root(referer, res);
    }
}
