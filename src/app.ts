import express from 'express';
import ProductsRouter from './routes/products.routes';
import UsersRouter from './routes/users.routes';
import OrderRouter from './routes/order.routes';

const app = express();

app.use(express.json());

app.use('/products', ProductsRouter);
app.use('/users', UsersRouter);
app.use('/orders', OrderRouter);

export default app;
