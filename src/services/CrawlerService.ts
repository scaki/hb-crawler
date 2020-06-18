import axios from "axios";
import cheerio from "cheerio";
import Product from "../models/Product";
import Data from "../models/Data";
import { IData } from "../interfaces/IData";

class CrawlerService {
    constructor() {
        this.Crawler = this.Crawler.bind(this)
    }
    private async FetchData(url: string): Promise<any> {
        try {
            return await axios(url);
        } catch (error) {
            console.error(error)
            throw error;
        }
    }
    public async Crawler(): Promise<any[]> {
        try {
            const products = await Product.find();
            const result: Array<IData> = new Array<IData>();
            for (let i = 0; i < products.length; i++) {
                const url = "https://www.hepsiburada.com/ara?q=" + products[i].Code;
                let res = await this.FetchData(url);
                if (!res.data) {
                    throw "Invalid data Obj";
                }
                const html = res.data;
                const $ = cheerio.load(html);

                const productDetail = $(".product-detail");
                productDetail.each((i, product) => {
                    const name = $(product).find("h3>div>.hb-pl-cn>span").text();
                    const price = $(product).find(".price-container>.product-price").text();

                    const productData = new Data();
                    productData.Name = name;
                    productData.Code = products[i].Code;
                    productData.Price = price;
                    productData.save();
                    result.push(productData);
                    if (!products[i].Name) {
                        const query = { Code: products[i].Code };
                        const options = { new: true, useFindAndModify: false };
                        Product.findOneAndUpdate(query, { Name: name }, options).exec();
                    }

                })
            }
            return result;
        } catch (error) {
            console.error(error)
            throw error;
        }
    }
}

export default CrawlerService;