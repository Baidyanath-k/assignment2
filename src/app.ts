import cors from "cors";
import express, { Request, Response } from "express";
import { OrderRoutes } from "./app/modules/order/order.route";
import { ProductRoutes } from "./app/modules/product/product.route";
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// application route
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("E-commerce App Build");
});

app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

export default app;
