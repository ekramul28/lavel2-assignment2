import { Request, Response } from 'express';
import { OrderService } from './order.services';
import orderValidationSchema from './order.validation';

//createOrder Api

const createOrder = async (req: Request, res: Response) => {
  try {
    const { orders } = req.body;

    //orderValidation with Zod

    const zodValidationOrder = orderValidationSchema.parse(orders);

    const result = await OrderService.createOrderIntoDB(zodValidationOrder);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: err,
    });
  }
};

//getAllOrder Api

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.getAllOrderIntoDB();

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: err,
    });
  }
};

//Search a product Api

const searchOrderByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email query parameter is required.',
      });
    }

    const result = await OrderService.searchOrderEmail(email as string);

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully for user email!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: err,
    });
  }
};
export const OrderController = {
  createOrder,
  getAllOrder,
  searchOrderByEmail,
};
