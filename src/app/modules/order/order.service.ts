import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDB = async (order: TOrder) => {
  const newOrder = new OrderModel(order);
  await newOrder.save();
  return newOrder;
};

const getAllOrderIntoDB = async () => {
  const result = await OrderModel.find();
  return result;
};

const orderFetchedInEmailIntoDB = async (email: string) => {
  const result = await OrderModel.find({
    $or: [{ email: { $regex: email, $options: "i" } }],
  }).exec();

  return result;
};
export const OrderServices = {
  createOrderIntoDB,
  getAllOrderIntoDB,
  orderFetchedInEmailIntoDB,
};
