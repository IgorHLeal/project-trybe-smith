import connection from '../models/connection';
import ProductsModel from '../models/products.model';
import IProducts from '../interfaces/products.interface';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public create(products: IProducts): Promise<IProducts> {
    return this.model.create(products);
  }
}