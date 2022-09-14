import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrderService from '../services/order.service';

const OrderController = {
  getAll: async (_req: Request, res: Response): Promise<Response> => {
    const order = await OrderService.getAll();
    return res.status(StatusCodes.OK).json(order);
  },
};

export default OrderController;
