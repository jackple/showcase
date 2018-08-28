import { Document } from 'mongoose';

export type UserCategory = 'user' | 'admin';

export interface IUser extends Document {
    readonly createdAt: Date;
    readonly account: string;
    readonly password: string;
    readonly category: UserCategory;
}
