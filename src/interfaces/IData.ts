import { Document } from "mongoose";

export interface IData extends Document {
    Code: string;
    Name: string;
    Price: string;
}