import cors from "cors";
import express, { Request, Response } from "express";
import { ProductRoutes } from "./app/modules/product/product.route";
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// application route
app.use("/api/products", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("E-commerce App Build");
});

export default app;
