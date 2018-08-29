import * as path from 'path';
import { readFileSync } from 'fs';

// jwt私钥
export const JWT_RRIVATE_KEY = readFileSync(
    path.join(__dirname, '../assets/jwt/jwtRS256.key'),
);

// jwt公钥
export const JWT_PUBLISH_KEY = readFileSync(
    path.join(__dirname, '../assets/jwt/jwtRS256.key.pub'),
);
