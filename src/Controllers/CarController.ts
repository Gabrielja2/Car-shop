import { Request, Response, NextFunction } from 'express';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public create = async () => {
    try {
      const newCar = await this.service.create(this.req.body);

      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  };

  public getAll = async () => {
    try {
      const allCars = await this.service.getAll();

      return this.res.status(200).json(allCars);
    } catch (error) {
      this.next(error);
    }
  };

  public getById = async () => {
    try {
      const { id } = this.req.params;
      const car = await this.service.getById(id);

      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  };

  public update = async () => {
    try {
      const { id } = this.req.params;
      const carEdited = await this.service.updateById(this.req.body, id);

      return this.res.status(200).json(carEdited);
    } catch (error) {
      this.next(error);
    }
  };
}
