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
