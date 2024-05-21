import { Request, Response } from 'express';
import { OrderService } from './order.services';

//createOrder Api

const createOrder = async (req: Request, res: Response) => {
  try {
    const { order } = req.body;
    const result = await OrderService.createOrderIntoDB(order);

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

export const OrderController = {
  createOrder,
};
