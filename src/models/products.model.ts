import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProducts from '../interfaces/products.interface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(products: IProducts): Promise<IProducts> {
    const { name, amount } = products;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const values = [name, amount];

    const result = await this.connection.execute<ResultSetHeader>(query, values);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...products };
  }
}