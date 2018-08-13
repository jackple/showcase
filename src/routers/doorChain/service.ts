import * as url from 'url';
import * as path from 'path';
import express from 'express';
import { Injectable } from '@nestjs/common';
import logger from 'utils/logger';

@Injectable()
export class DoorChainService {
    root(referer: string, res: express.Response) {
        let imageName = 'break.png';
        if (!referer) {
            imageName = 'yellow.png';
        } else {
            try {
                const refererParsed = url.parse(referer);
                if (refererParsed.host === 'localhost:8080') {
                    imageName = 'yellow.png';
                }
            } catch (err) {}
        }
        const imagePath = path.resolve(__dirname, `./../../assets/${imageName}`);
        res.sendFile(imagePath, null, err => {
            if (err) {
                logger.error(err);
                res.status(404).end();
            } else {
                logger.info(`Sent: ${imagePath}`);
            }
        });
    }
}
