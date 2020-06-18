import Data from '../models/Data';
import { IData } from '../interfaces/IData';

class DataService {
    public async Create(data: IData): Promise<IData> {
        try {
            const dataRecord = new Data(data);
            return dataRecord.save();
        } catch (error) {
            throw error;
        }
    }
    public async GetAll(): Promise<IData[]> {
        try {
            return Data.find({}, null, { sort: { '_id': 1 } }).exec();
        } catch (error) {
            throw error;
        }
    }
    public async Get(id: string): Promise<IData | null> {
        try {
            return Data.findById(id).exec();
        } catch (error) {
            throw error;
        }
    }
    public async GetByCode(code: string): Promise<IData[] | null> {
        try {
            return Data.find({ code: code }).exec();
        } catch (error) {
            throw error;
        }
    }
    public async Delete(id: string): Promise<IData | null> {
        try {
            return Data.findByIdAndDelete(id).exec();
        } catch (error) {
            throw error;
        }
    }
    public async Put(id: string, data: IData): Promise<IData | null> {
        try {
            const dataId = { _id: id };
            const options = { new: true, useFindAndModify: false };
            return Data.findOneAndUpdate(dataId, data, options).exec();
        } catch (error) {
            throw error;
        }
    }
}

export default DataService;