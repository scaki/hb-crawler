import { Document } from "mongoose";

export interface IProduct extends Document {
    Code: string;
    Name: string;
    Source: string;
}