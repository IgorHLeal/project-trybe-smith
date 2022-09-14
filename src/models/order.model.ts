import { RowDataPacket } from 'mysql2';
import connection from './connection';
import IOrder from '../interfaces/order.interface';

const OrderModel = {
  getAll: async () => {
    const query = `
    SELECT orders.id, orders.userId, JSON_ARRAYAGG(products.id) AS productsIds
    FROM Trybesmith.Orders As orders
    INNER JOIN Trybesmith.Products As products
    ON orders.id = products.orderId
    GROUP BY orders.id
    ORDER BY orders.userId
    `;

    const [result] = await connection.execute<RowDataPacket[]>(query);

    return result as unknown as IOrder;
  },
};

export default OrderModel;
