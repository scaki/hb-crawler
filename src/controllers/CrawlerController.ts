import { Request, Response } from 'express';
import { Container } from 'typedi';
import CrawlerService from '../services/CrawlerService';

class DataController {
    public async Craw(req: Request, res: Response): Promise<Response> {
        try {
            const crawlerServiceInstance = Container.get(CrawlerService);
            const data = await crawlerServiceInstance.Crawler();
            res.statusCode = 200;
            return res.json(data);
        } catch (error) {
            res.statusCode = 400;
            return res.send(error);
        }
    }
}

export default DataController;