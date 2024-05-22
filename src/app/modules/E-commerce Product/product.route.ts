import express from 'express';
import { ProductController } from './product.controller';

const route = express.Router();

route.post('/products', ProductController.createProduct);

route.get('/products', ProductController.getAllProductAndSearch);
route.get('/products/:productId', ProductController.getProductById);
route.put('/products/:productId', ProductController.updateProductById);
route.delete('/products/:productId', ProductController.deleteProductById);
// route.get('/products', ProductController.searchProductByName);

export const productsRoute = route;
