import { Document } from 'mongoose';

export interface IMenu extends Document {
    updatedAt: Date;
    createdAt: Date;
    title: string;
    id: number;
    pid: number;
    path: string;
    icon: string;
    exact: boolean;
}
