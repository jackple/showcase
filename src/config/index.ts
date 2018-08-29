import * as path from 'path';
import { extractKey } from 'utils/common';

export const JWT_SECRET = extractKey(
    path.join(__dirname, './../assets/jwt/jwtRS256.key'),
);
