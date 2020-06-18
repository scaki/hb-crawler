import mongoose, { Document, Schema } from 'mongoose';
import { IData } from '../interfaces/IData';
const Data: Schema = new Schema({
    Code: {
        type: String,
    },
    Name: {
        type: String,
    },
    Price: {
        type: String,
    },
}, { timestamps: { createdAt: "created_at" } }
);

export default mongoose.model<IData & Document>('Data', Data);