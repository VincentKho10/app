import dotenv from 'dotenv';

dotenv.config({
    path: `.env/.env.test`,
});

import express from 'express';
import { IExApp, IExErr, IExNxt, IExReq, IExRes } from './static/IExType';
import CustomError from './static/ErrorStatus';
import { api_paths } from './static/paths';
import publicRoutes from './routes/public_routes';
import { MdbConn } from './data/connection/conn_mongodb';
import mongoose, { Mongoose } from 'mongoose';
import errorHandingMiddleware from './middleware/ErrorHandling';
// import PublicRoutes from './routes/public_routes';
import redis from 'redis';
import { RedisConn } from './data/connection/conn_redis';

// const PublicRoutes = require('./routes/public_routes');
const ApiRoutes = require('./routes/api_routes');
const bodyParser = require('body-parser');

const app: IExApp = express();

new RedisConn();

new MdbConn();

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req: IExReq, res: IExRes)=>{
    res.redirect('/login');
});

publicRoutes(app);

app.use(api_paths.base, ApiRoutes);

app.use(errorHandingMiddleware);

app.listen(process.env.BASE_PORT || 3000, () => console.log(`listening on port ${process.env.BASE_URL}:${process.env.FWD_PORT}`));