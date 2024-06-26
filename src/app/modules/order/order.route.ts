import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

router.get("/search", OrderController.orderFetchedInEmail);
router.post("/", OrderController.createOrderCont);
router.get("/", OrderController.getAllOrderCont);

export const OrderRoutes = router;
