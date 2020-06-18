# Açıklama

Bir hafta sonu az biraz can sıkıntısı ve birkaç ürün satın almaya karar vermemle ortaya çıkan ufak çaplı bir proje. Aslında bunu tamamen kendim için yapmıştım ama paylaşmak istedim. Sadece backend olarak çalışmasını planlıyordum bu yüzden frontend'i bulunmuyor.

# Altyapı

Temelde [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/) ve [MongoDB](https://www.mongodb.com/) bulunurken, siteye bağlanmak ve ürün datalarını çekmek için [Axios](https://github.com/axios/axios) ve [Cheerio](https://github.com/cheeriojs/cheerio#readme) kullanıyoruz. Development tarafında ise [TypeScript](https://www.typescriptlang.org/) bulunuyor.
Ayrıca belirlediğim aralıklarda otomatik crawler yapması için [node-cron](https://github.com/node-cron/node-cron) kullanıyorum.

## Kullanım

**app.js** dosyasından database ayarlarımızı yapıyoruz ve `npm run start` komutuyla programı başlatıyoruz.

**POST - /product**
Takip edilecek ürün eklemek için

**GET - /product**
Takip ettiğiniz ürünleri listelemek için

**GET - /data/PRODUCT_CODE**
Takip ettiğiniz ürüne ait bilgileri çekmek için

**GET - /crawler**
Manuel crawler başlatmak için
