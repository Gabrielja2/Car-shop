import IVeicule from './IVehicle';

type CategoryTypes = 'Street' | 'Custom' | 'Trail';

export default interface IMotorcycle extends IVeicule {
  category: CategoryTypes,
  engineCapacity: number,
}
