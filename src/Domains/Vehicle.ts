import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor(veicle: IVehicle) {
    this.id = veicle.id;
    this.model = veicle.model;
    this.year = veicle.year;
    this.color = veicle.color;
    this.status = veicle.status || false;
    this.buyValue = veicle.buyValue;
  }
}