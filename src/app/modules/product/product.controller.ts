import { Request, Response } from "express";
import ProductJoiSchema from "./product.joiValidation";
import { ProductServices } from "./product.service";

const createProductController = async (req: Request, res: Response) => {
  try {
    const { product: product_data } = req.body;

    const { error, value } = ProductJoiSchema.validate(product_data);
    if (error) {
      res.status(400).json({
        success: false,
        message: "An error occurred while creating the product",
        error: error.message,
      });
    }
    const result = await ProductServices.createProductIntoDB(value);
    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "An error occurred while creating the product",
      error: error.message,
    });
  }
};

const fetchedAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.fetchedAllProductIntoDB();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(200).json({
      success: false,
      message: "Do not found all products",
      error: error.message,
    });
  }
};

export const ProductControllers = {
  createProductController,
  fetchedAllProduct,
};
