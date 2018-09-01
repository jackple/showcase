import { Document } from 'mongoose'

export type UserCategory = 'user' | 'admin'

export interface IUser extends Document {
    updatedAt: Date
    createdAt: Date
    account: string
    password: string
    category: UserCategory
}
