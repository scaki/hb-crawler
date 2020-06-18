import cron from "node-cron"
import { Container } from 'typedi';
import CrawlerService from './services/CrawlerService';

function Dayly() {
    cron.schedule("0 0 12 * * *", function () {
        try {
            const crawlerServiceInstance = Container.get(CrawlerService);
            crawlerServiceInstance.Crawler();
        } catch (error) {
            console.error(error)
        }
    });
}

export default Dayly;