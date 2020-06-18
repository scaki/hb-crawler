import express, { Application } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./routes/index";

const app: Application = express();
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/HBCrawler", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.connection.on("open", () => {
    console.log("MongoDB: Connected");
});
mongoose.connection.on("error", err => {
    console.log("MongoDB: Error", err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

export default app;