import { Application } from 'express';
import Container from 'typedi';
import ProductController from '../controllers/ProductController';
import DataController from '../controllers/DataController';
import CrawlerService from '../services/CrawlerService';

const routes = (app: Application) => {
    app.get("/", (req, res) => res.send("Hello World!"));
    const crawlerControllerInstance = Container.get(CrawlerService);
    const dataControllerInstance = Container.get(DataController);
    const productControllerInstance = Container.get(ProductController);
    app.route('/crawler')
        .get(crawlerControllerInstance.Crawler);
    app.route('/product')
        .post(productControllerInstance.Create)
        .get(productControllerInstance.GetAll);
    app.route('/data')
        .get(dataControllerInstance.GetAll);
    app.route('/data/:code')
        .get(dataControllerInstance.GetByCode);
};

export default routes;