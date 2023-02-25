import express, { Express, Request, Response } from 'express';
import {config} from "./config";
import cors = require("cors");
import bodyParser from "body-parser";
import routes from "./Routes/index";
import connect from "./connect";

const app: Express = express();
app.use(cors<Request>());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connect();


app.use("/api", routes);


app.listen(config.server.port, () => {
    return console.log(`[server]: Server is running on ${config.server.port}`);
});
