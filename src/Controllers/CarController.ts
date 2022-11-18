import { Request, Response } from 'express';
import CarService from '../Services/CarService';

export default class CarController {
  // constructor(private _service = new CarService()) {}
  private _service: CarService;  
  constructor(service: CarService) {
    this._service = service;
  }

  public create = async (req: Request, res: Response) => {
    const newCar = await this._service.create(req.body);

    res.status(201).json(newCar);
  };
}
