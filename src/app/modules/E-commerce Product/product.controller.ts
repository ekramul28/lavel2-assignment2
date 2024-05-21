import { Request, Response } from 'express';
import { ProductService } from './product.services';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product } = req.body;
    console.log(product);
    const result = await ProductService.createProductIntoDB(product);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'something went worn!',
      error: err,
    });
  }
};

export const ProductController = {
  createProduct,
};
