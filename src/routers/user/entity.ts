import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

export type UserCategory = 'user' | 'admin';

@Entity()
export class User {
    @ObjectIdColumn() id: ObjectID;

    @Column() createdAt: Date;

    @Column() account: string;

    @Column() password: string;

    @Column() category: UserCategory;
}
