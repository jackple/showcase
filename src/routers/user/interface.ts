import { Document } from 'mongoose';

export type UserCategory = 'user' | 'admin';

export interface IUser extends Document {
    createdAt: Date;
    account: string;
    password: string;
    category: UserCategory;
}
