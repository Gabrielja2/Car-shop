import IVeicule from './IVehicle';

export default interface ICar extends IVeicule {  
  doorsQty: number,
  seatsQty: number 
}
