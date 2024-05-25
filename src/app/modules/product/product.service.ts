import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const fetchedAllProductIntoDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const fetchedProductByIdIntoDB = async (_id: string) => {
  const result = await ProductModel.findById({ _id });
  return result;
};

const updateProductIntoDB = async (_id: string, updateData: TProduct) => {
  const result = await ProductModel.findByIdAndUpdate(_id, updateData, {
    new: true,
  });
  return result;
};

const deleteProductByIdIntoDB = async (_id: string) => {
  const result = await ProductModel.deleteOne({ _id });
  return result;
};
export const ProductServices = {
  createProductIntoDB,
  fetchedAllProductIntoDB,
  fetchedProductByIdIntoDB,
  updateProductIntoDB,
  deleteProductByIdIntoDB,
};
