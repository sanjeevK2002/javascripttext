import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser())


import router from './src/routes/user.routes.js';
import order_router from './src/routes/order.routes.js';
import product_router from './src/routes/product.routes.js';

app.use("/",router)
app.use("/",order_router);
app.use("/",product_router);

export default app;