import express from 'express';
import ErrorHandler from './middlewares/error';
import router from './routers';

const app = express();
app.use(express.json());

app.use('/cars', router.carsRouter);

app.use(ErrorHandler.handler);
export default app;
