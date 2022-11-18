import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain = (body: ICar) => {
    if (body) return new Car(body);    
    return null;
  };

  public create = async (body: ICar) => {
    const carModel = new CarODM();
    const car = await carModel.create(body);

    return this.createCarDomain(car);
  };
}
