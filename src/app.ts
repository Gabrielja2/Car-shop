import express from 'express';
import ErrorHandler from './middlewares/error';
import { carsRouter, motorsRouter } from './routers';

const app = express();
app.use(express.json());

app.use('/cars', carsRouter);
app.use('/motorcycles', motorsRouter);

app.use(ErrorHandler.handler);
export default app;
