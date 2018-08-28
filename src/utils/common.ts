import { Model } from 'mongoose';

export async function isDocumentExist(
    model: Model<any>,
    conditions: PlainObject,
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

export function createResData(data: any, msg = '', errCode = 0): ResData {
    return {
        data,
        msg,
        errCode,
    };
}
