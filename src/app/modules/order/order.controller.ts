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

const getAllOrderCont = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrderIntoDB();
    res.status(400).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "All Order data do not retrieve",
      error: error.message,
    });
  }
};

const orderFetchedInEmail = async (req: Request, res: Response) => {
  try {
    const email = req.query.email;
    const result = await OrderServices.orderFetchedInEmailIntoDB(
      email as string
    );
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }
    if (!result || result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }
    res.status(400).json({
      success: true,
      message: "Orders fetched successfully for user email!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Orders fetched unsuccessfully for user email!",
      error: error.message,
    });
  }
};

export const OrderController = {
  createOrderCont,
  getAllOrderCont,
  orderFetchedInEmail,
};
