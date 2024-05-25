import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

// created product in Database
const createProductIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

// Fetched all product in Database
const fetchedAllProductIntoDB = async () => {
  const result = await ProductModel.find();
  return result;
};

// Fetched single product by Id in database
const fetchedProductByIdIntoDB = async (_id: string) => {
  const result = await ProductModel.findById({ _id });
  return result;
};

// Update single product by Id in Database
const updateProductIntoDB = async (_id: string, updateData: TProduct) => {
  const result = await ProductModel.findByIdAndUpdate(_id, updateData, {
    new: true,
  });
  return result;
};

// Delete single product By Id in Database
const deleteProductByIdIntoDB = async (_id: string) => {
  const result = await ProductModel.deleteOne({ _id });
  return result;
};

// search operation in database
const searchOperationIntoDB = async (searchTerm: string) => {
  const result = await ProductModel.find({
    $or: [
      { name: { $regex: searchTerm, $options: "i" } },
      { description: { $regex: searchTerm, $options: "i" } },
      { tags: { $regex: searchTerm, $options: "i" } },
      { category: { $regex: searchTerm, $options: "i" } },
    ],
  }).exec();

  return result;
};
export const ProductServices = {
  createProductIntoDB,
  fetchedAllProductIntoDB,
  fetchedProductByIdIntoDB,
  updateProductIntoDB,
  deleteProductByIdIntoDB,
  searchOperationIntoDB,
};
