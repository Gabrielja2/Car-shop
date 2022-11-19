import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorsRouter = Router();

motorsRouter.post('/', (req, res, next) => new MotorcycleController(req, res, next).create());

motorsRouter.get('/', (req, res, next) => new MotorcycleController(req, res, next).getAll());

motorsRouter.get('/:id', (req, res, next) => new MotorcycleController(req, res, next).getById());

motorsRouter.put('/:id', (req, res, next) => new MotorcycleController(req, res, next).update());

export default motorsRouter;