import * as crypto from 'crypto';
import { Model } from 'mongoose';

/**
 * 加密
 *
 * @export
 * @param {*} password
 * @returns
 */
export function cryptData(data: string) {
    const md5 = crypto.createHash('md5');
    return md5.update(data).digest('hex');
}

/**
 * 根据条件检查数据库中是否已存在该数据
 *
 * @export
 * @param {Model<any>} model
 * @param {{ [key: string]: any }} conditions
 * @returns
 */
export async function isDocumentExist(
    model: Model<any>,
    conditions: { [key: string]: any },
) {
    try {
        const count = await model.countDocuments(conditions);
        return count > 0;
    } catch (err) {
        throw err;
    }
}

export interface ResData {
    data: any;
    msg: string;
    errCode: number;
}

/**
 * 生成api返回的数据
 *
 * @export
 * @param {*} data
 * @param {string} [msg='']
 * @param {number} [errCode=0]
 * @returns {ResData}
 */
export function createResData(
    data: any,
    msg = 'success',
    errCode = 0,
): ResData {
    return { data, msg, errCode };
}
