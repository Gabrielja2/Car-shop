import {
  Model,
  model,
  models,
  Schema,
  isValidObjectId,
} from 'mongoose';
import CustomError from '../helpers/customError';
import ICar from '../Interfaces/ICar';
  
abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;
  
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }
  
  public async create(body: T): Promise<T> {
    return this.model.create({ ...body });
  }

  public async getAll(): Promise<T[]> {
    return this.model.find({});
  }

  public async getById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new CustomError(422, 'Invalid mongo id');
    return this.model.findById(id);
  }

  public async updateById(car: ICar, id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new CustomError(422, 'Invalid mongo id');
    return this.model.findByIdAndUpdate(id, { ...car }, { new: true });
  }
}
  
export default AbstractODM;