import Product from '../models/Product';
import { IProduct } from '../interfaces/IProduct';

class ProductService {
    public async Create(product: IProduct): Promise<IProduct> {
        try {
            const productRecord = new Product(product);
            return productRecord.save();
        } catch (error) {
            throw error;
        }
    }
    public async GetAll(): Promise<IProduct[]> {
        try {
            return Product.find({}, null, { sort: { '_id': 1 } }).exec();
        } catch (error) {
            throw error;
        }
    }
    public async Get(id: string): Promise<IProduct | null> {
        try {
            return Product.findById(id).exec();
        } catch (error) {
            throw error;
        }
    }
    public async Delete(id: string): Promise<IProduct | null> {
        try {
            return Product.findByIdAndDelete(id).exec();
        } catch (error) {
            throw error;
        }
    }
    public async Put(id: string, product: IProduct): Promise<IProduct | null> {
        try {
            const productId = { _id: id };
            const options = { new: true, useFindAndModify: false };
            return Product.findOneAndUpdate(productId, product, options).exec();
        } catch (error) {
            throw error;
        }
    }
}

export default ProductService;