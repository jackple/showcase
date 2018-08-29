import * as path from 'path';
import { extractKey } from 'utils/common';

// jwt私钥
export const JWT_SECRET = extractKey(
    path.join(__dirname, '../assets/jwt/jwtRS256.key'),
);

// jwt公钥
export const JWT_CERT = extractKey(
    path.join(__dirname, '../assets/jwt/jwtRS256.key.pub'),
);
