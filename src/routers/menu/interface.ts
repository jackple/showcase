import { Document } from 'mongoose';

export interface IMenu extends Document {
    updatedAt: Date;
    createdAt: Date;
    title: string;
    _id: string;
    pid: string;
    path: string;
    icon: string;
}
