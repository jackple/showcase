import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    account: String,
    password: String,
    category: { type: String, default: 'user' },
});

export default UserSchema;
