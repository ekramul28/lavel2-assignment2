import { ProductModel } from '../product.model';
import { Product } from './product.interface';

//createProduct Api

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

//getAllProduct Api

const getAllProductIntoDB = async () => {
  const result = await ProductModel.find();
  return result;
};

//Product by ID Api

const getProductByIdInToDB = async (productId: string) => {
  const result = await ProductModel.findOne({ _id: productId });
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductIntoDB,
  getProductByIdInToDB,
};
