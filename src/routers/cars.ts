import { Router } from 'express';
import CarService from '../Services/CarService';
import CarController from '../Controllers/CarController';

const carsRouter = Router();

const carService = new CarService();
const carController = new CarController(carService);

carsRouter.post('/', carController.create);

export default carsRouter;