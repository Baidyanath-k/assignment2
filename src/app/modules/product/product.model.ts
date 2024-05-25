import { Schema, model } from "mongoose";
import { TProduct, TVariants } from "./product.interface";

const VariantSchema = new Schema<TVariants>({
  type: {
    type: String,
    trim: true,
  },
  value: {
    type: String,
    trim: true,
  },
});

const ProductSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: [true, "Product name must be required"],
      trim: true,
    },
    description: {
      type: String,
      max: 500,
      min: 20,
    },
    price: {
      type: Number,
      required: [true, "Product price must be required"],
    },
    category: {
      type: String,
      trim: true,
    },
    tags: {
      type: [String],
    },
    variants: {
      type: [VariantSchema],
      require: [true, "Variants must be required"],
    },
    inventory: {
      quantity: {
        type: Number,
        required: [true, "Product Quantity must be required"],
      },
      inStock: {
        type: Boolean,
      },
    },
  },
  { timestamps: true }
);

export const ProductModel = model<TProduct>("Product", ProductSchema);
