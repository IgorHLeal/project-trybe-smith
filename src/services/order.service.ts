import OrderModel from '../models/order.model';

const OrderService = {
  getAll: async () => {
    const orders = await OrderModel.getAll();
    return orders;
  },
};

export default OrderService;