import { Request, Response } from 'express';
import { Container } from 'typedi';
import ProductService from '../services/ProductService';

class ProductController {
    public async Create(req: Request, res: Response): Promise<Response> {
        try {
            const productServiceInstance = Container.get(ProductService);
            const product = await productServiceInstance.Create(req.body);
            res.statusCode = 200;
            return res.json(product);
        } catch (error) {
            res.statusCode = 400;
            return res.send(error);
        }
    }
    public async GetAll(req: Request, res: Response): Promise<Response> {
        try {
            const productServiceInstance = Container.get(ProductService);
            const products = await productServiceInstance.GetAll();
            res.statusCode = 200;
            return res.json(products);
        } catch (error) {
            res.statusCode = 400;
            return res.send(error);
        }
    }
    public async Get(req: Request, res: Response): Promise<Response> {
        try {
            const productServiceInstance = Container.get(ProductService);
            const product = await productServiceInstance.Get(req.params.productId);
            res.statusCode = 200;
            return res.json(product);
        } catch (error) {
            res.statusCode = 400;
            return res.send(error);
        }
    }
    public async Delete(req: Request, res: Response): Promise<Response> {
        try {
            const productServiceInstance = Container.get(ProductService);
            await productServiceInstance.Delete(req.params.productId);
            res.statusCode = 202;
            return res.json();
        } catch (error) {
            res.statusCode = 400;
            return res.send(error);
        }
    }
    public async Put(req: Request, res: Response): Promise<Response> {
        try {
            const productServiceInstance = Container.get(ProductService);
            const product = await productServiceInstance.Put(req.params.productId, req.body);
            res.statusCode = 202;
            return res.json(product);
        } catch (error) {
            res.statusCode = 400;
            return res.send(error);
        }
    }
}

export default ProductController;