//createOrder Api

import { Order } from './order.interface';
import { OrderModel } from './order.model';

//create order

const createOrderIntoDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

//get all order api

const getAllOrderAndSearchIntoDB = async (email: string) => {
  let result;
  if (email) {
    result = await OrderModel.find({ email });
  } else {
    result = await OrderModel.find();
  }
  return result;
};

//Search order by Email Api

export const OrderService = {
  createOrderIntoDB,
  getAllOrderAndSearchIntoDB,
};
