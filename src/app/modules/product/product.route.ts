import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

// search by key
router.get("/", ProductControllers.searchOperation);

// crated product route use post method
router.post("/", ProductControllers.createProductController);

// fetched all data route use get method
router.get("/", ProductControllers.fetchedAllProduct);

// fetched single data by Id route use get method
router.get("/:productId", ProductControllers.fetchedProductById);

// update data by Id route use put method
router.put("/:productId", ProductControllers.updateProduct);

// Delete data by Id route use delete method
router.delete("/:productId", ProductControllers.deleteProductById);

export const ProductRoutes = router;
