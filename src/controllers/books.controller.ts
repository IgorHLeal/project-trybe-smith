import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductsService from '../services/books.service';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public create = async (req: Request, res: Response) => {
    const products = req.body;
    const productsCreated = await this.productsService.create(products);

    res.status(StatusCodes.CREATED).json(productsCreated);
  };
}