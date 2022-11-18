import Car from '../Domains/Car';
import CustomError from '../helpers/customError';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain = (car: ICar) => {
    if (car) return new Car(car);    
    return null;
  };

  public create = async (car: ICar) => {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);

    return this.createCarDomain(newCar);
  };

  public getAll = async () => {
    const carODM = new CarODM();
    const getCars = await carODM.getAll();
    const cars = getCars.map((car) => this.createCarDomain(car));

    return cars;
  };

  public getById = async (id: string) => {
    const carODM = new CarODM();
    const car = await carODM.getById(id);

    if (!car) throw new CustomError(404, 'Car not found');

    return this.createCarDomain(car);
  };
}
