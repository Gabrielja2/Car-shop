import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private createMotorcycleDomain = (motocycle: IMotorcycle) => {
    if (motocycle) return new Motorcycle(motocycle);    
    return null;
  };

  public create = async (motocycle: IMotorcycle) => {
    const motorcycleODM = new MotorcycleODM();
    const newMotocycle = await motorcycleODM.create(motocycle);

    return this.createMotorcycleDomain(newMotocycle);
  };
}
