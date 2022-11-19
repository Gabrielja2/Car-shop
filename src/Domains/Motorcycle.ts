import IMotorcycle from '../Interfaces/IMotorcycle';

import Vehicle from './Vehicle';

type CategoryTypes = 'Street' | 'Custom' | 'Trail';

export default class Motorcycle extends Vehicle {
  private category: CategoryTypes;
  private engineCapacity: number;

  constructor(motor: IMotorcycle) {
    super(motor);
    this.category = motor.category;
    this.engineCapacity = motor.engineCapacity;
  }
}
