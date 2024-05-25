import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/", ProductControllers.createProductController);
router.get("/", ProductControllers.fetchedAllProduct);
router.get("/:productId", ProductControllers.fetchedProductById);

export const ProductRoutes = router;
