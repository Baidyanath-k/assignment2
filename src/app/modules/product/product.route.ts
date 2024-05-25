import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/", ProductControllers.createProductController);
router.get("/", ProductControllers.fetchedAllProduct);

export const ProductRoutes = router;
