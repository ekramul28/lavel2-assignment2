import express from 'express';
import { ProductController } from './product.controller';

const route = express.Router();

route.post('/products', ProductController.createProduct);
route.get('/products', ProductController.getAllProduct);
route.get('/products/:productId', ProductController.getProductById);
route.put('/products/:productId', ProductController.updateProductById);
route.delete('/products/:productId', ProductController.deleteProductById);

export const productsRoute = route;
