import { ProductModel } from './product.model';
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

//Update Product Api

const updateProductByIdInToDB = async (
  productId: string,
  updateData: Product,
) => {
  const result = await ProductModel.findByIdAndUpdate(
    { _id: productId },
    updateData,
    {
      new: true,
      runValidators: true,
    },
  );
  return result;
};

//Delete a Product Api

const deleteProductByIdInToDB = async (productId: string) => {
  const result = await ProductModel.deleteOne({ _id: productId });
  return result;
};

//Search a product Api

const searchProductName = async (Name: string) => {
  const result = await ProductModel.find({
    $or: [{ name: { $regex: Name, $options: 'i' } }],
  });
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductIntoDB,
  getProductByIdInToDB,
  updateProductByIdInToDB,
  deleteProductByIdInToDB,
  searchProductName,
};
