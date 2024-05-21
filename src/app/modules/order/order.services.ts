//createOrder Api

import { Order } from './order.interface';
import { OrderModel } from './order.model';

//create order

const createOrderIntoDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

//get all order api

const getAllOrderIntoDB = async () => {
  const result = await OrderModel.find();
  return result;
};

//Search order by Email Api

const searchOrderEmail = async (email: string) => {
  const result = await OrderModel.find({ email });
  return result;
};

export const OrderService = {
  createOrderIntoDB,
  getAllOrderIntoDB,
  searchOrderEmail,
};
