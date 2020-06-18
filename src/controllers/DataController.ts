import { Request, Response } from 'express';
import { Container } from 'typedi';
import DataService from '../services/DataService';

class DataController {
    public async Create(req: Request, res: Response): Promise<Response> {
        try {
            const dataServiceInstance = Container.get(DataService);
            const data = await dataServiceInstance.Create(req.body);
            res.statusCode = 200;
            return res.json(data);
        } catch (error) {
            res.statusCode = 400;
            return res.send(error);
        }
    }
    public async GetAll(req: Request, res: Response): Promise<Response> {
        try {
            const dataServiceInstance = Container.get(DataService);
            const datas = await dataServiceInstance.GetAll();
            res.statusCode = 200;
            return res.json(datas);
        } catch (error) {
            res.statusCode = 400;
            return res.send(error);
        }
    }
    public async Get(req: Request, res: Response): Promise<Response> {
        try {
            const dataServiceInstance = Container.get(DataService);
            const data = await dataServiceInstance.Get(req.params.dataId);
            res.statusCode = 200;
            return res.json(data);
        } catch (error) {
            res.statusCode = 400;
            return res.send(error);
        }
    }
    public async GetByCode(req: Request, res: Response): Promise<Response> {
        try {
            const dataServiceInstance = Container.get(DataService);
            const data = await dataServiceInstance.GetByCode(req.params.code);
            res.statusCode = 200;
            return res.json(data);
        } catch (error) {
            res.statusCode = 400;
            return res.send(error);
        }
    }
    public async Delete(req: Request, res: Response): Promise<Response> {
        try {
            const dataServiceInstance = Container.get(DataService);
            await dataServiceInstance.Delete(req.params.dataId);
            res.statusCode = 202;
            return res.json();
        } catch (error) {
            res.statusCode = 400;
            return res.send(error);
        }
    }
    public async Put(req: Request, res: Response): Promise<Response> {
        try {
            const dataServiceInstance = Container.get(DataService);
            const data = await dataServiceInstance.Put(req.params.dataId, req.body);
            res.statusCode = 202;
            return res.json(data);
        } catch (error) {
            res.statusCode = 400;
            return res.send(error);
        }
    }
}

export default DataController;