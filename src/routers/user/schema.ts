import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        account: { type: String, required: true },
        password: { type: String, required: true },
        category: { type: String, default: 'user' },
    },
    {
        timestamps: true,
    },
);

export default UserSchema;
