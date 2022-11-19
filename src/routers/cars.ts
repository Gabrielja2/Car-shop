import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carsRouter = Router();

carsRouter.post('/', (req, res, next) => new CarController(req, res, next).create());

carsRouter.get('/', (req, res, next) => new CarController(req, res, next).getAll());

carsRouter.get('/:id', (req, res, next) => new CarController(req, res, next).getById());

carsRouter.put('/:id', (req, res, next) => new CarController(req, res, next).update());

export default carsRouter;