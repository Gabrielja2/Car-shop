import { Request, Response, NextFunction } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public create = async () => {
    try {
      const newMotorcycle = await this.service.create(this.req.body);

      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  };

  public getAll = async () => {
    try {
      const allMotorcycles = await this.service.getAll();

      return this.res.status(200).json(allMotorcycles);
    } catch (error) {
      this.next(error);
    }
  };

  public getById = async () => {
    try {
      const { id } = this.req.params;
      const motorcycle = await this.service.getById(id);

      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  };

  public update = async () => {
    try {
      const { id } = this.req.params;
      const motorcycleEdited = await this.service.updateById(this.req.body, id);

      return this.res.status(200).json(motorcycleEdited);
    } catch (error) {
      this.next(error);
    }
  };
}
