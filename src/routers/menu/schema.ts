import * as mongoose from 'mongoose';

const MenuSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        pid: { type: mongoose.Schema.Types.ObjectId, default: null },
        path: String,
        icon: String,
    },
    {
        timestamps: true,
    },
);

export default MenuSchema;
