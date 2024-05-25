import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrderCont = async (req: Request, res: Response) => {
  try {
    const { order: order_data } = req.body;
    const result = await OrderServices.createOrderIntoDB(order_data);
    res.status(400).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Order not created",
      error: error.message,
    });
  }
};

export const OrderController = {
  createOrderCont,
};
