import { Request, Response } from "express";
import orderJoiValidationSchema from "./order.joivalidation";
import { OrderServices } from "./order.service";

const createOrderCont = async (req: Request, res: Response) => {
  try {
    const { order: order_data } = req.body;
    const { error, value } = orderJoiValidationSchema.validate(order_data);
    if (error) {
      res.status(400).json({
        success: false,
        message: "An error occurred while creating the order",
        error: error.message,
      });
    }
    const result = await OrderServices.createOrderIntoDB(value);
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
