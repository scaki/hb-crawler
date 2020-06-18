import mongoose, { Document, Schema } from 'mongoose';
import { IProduct } from '../interfaces/IProduct';
const Product: Schema = new Schema({
    Code: {
        type: String,
    },
    Name: {
        type: String,
    },
    Source: {
        type: String,
    },
}
);

export default mongoose.model<IProduct & Document>('Product', Product);