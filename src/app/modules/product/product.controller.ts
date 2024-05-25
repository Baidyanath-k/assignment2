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
    res.status(500).json({
      success: false,
      message: "Do not found all products",
      error: error.message,
    });
  }
};

const fetchedProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.fetchedProductByIdIntoDB(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Can not product fetched!",
      error: error.message,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;
    const result = await ProductServices.updateProductIntoDB(
      productId,
      updateData
    );

    res.status(400).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Product can not update",
      error: error.message,
    });
  }
};

export const ProductControllers = {
  createProductController,
  fetchedAllProduct,
  fetchedProductById,
  updateProduct,
};
