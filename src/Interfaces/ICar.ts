export interface IVeicule {  
  id?: string,
  model: string,
  year: number,
  color: string,
  status?: boolean,
  buyValue: number
}

export default interface ICar extends IVeicule {  
  doorsQty: number,
  seatsQty: number 
}
