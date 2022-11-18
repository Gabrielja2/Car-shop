import {
  Model,
  model,
  models,
  Schema,
} from 'mongoose';
  
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
}
  
export default AbstractODM;