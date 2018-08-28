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
