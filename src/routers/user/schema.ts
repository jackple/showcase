import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    createdAt: Date,
    account: String,
    password: String,
    category: String,
});

export default UserSchema;
