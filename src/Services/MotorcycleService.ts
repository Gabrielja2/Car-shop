import Motorcycle from '../Domains/Motorcycle';
import CustomError from '../helpers/customError';
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

  public getAll = async () => {
    const motorcycleODM = new MotorcycleODM();
    const getMotorcycles = await motorcycleODM.getAll();
    const motorcycles = getMotorcycles.map((motor) => this.createMotorcycleDomain(motor));

    return motorcycles;
  };

  public getById = async (id: string) => {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.getById(id);

    if (!motorcycle) throw new CustomError(404, 'Motorcycle not found');

    return this.createMotorcycleDomain(motorcycle);
  };

  public updateById = async (motorcycle: IMotorcycle, id: string) => {
    const motorcycleODM = new MotorcycleODM();
    const motorcycleEdited = await motorcycleODM.updateById(motorcycle, id);

    if (!motorcycleEdited) throw new CustomError(404, 'Motorcycle not found');

    return this.createMotorcycleDomain(motorcycleEdited);
  };
}
