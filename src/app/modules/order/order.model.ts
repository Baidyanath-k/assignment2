import mongoose, { Schema, model } from "mongoose";
import { ProductModel } from "../product/product.model";
import { TOrder } from "./order.interface";

const OrderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: [true, "Email must be required"],
      unique: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: ProductModel,
      required: [true, "Product Id must be required"],
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const OrderModel = model<TOrder>("Order", OrderSchema);
