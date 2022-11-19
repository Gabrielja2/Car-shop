import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorsRouter = Router();

motorsRouter.post('/', (req, res, next) => new MotorcycleController(req, res, next).create());

export default motorsRouter;