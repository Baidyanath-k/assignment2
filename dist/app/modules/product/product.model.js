"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const VariantSchema = new mongoose_1.Schema({
    type: {
        type: String,
        trim: true,
    },
    value: {
        type: String,
        trim: true,
    },
});
const ProductSchema = new mongoose_1.Schema({
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
        require: true,
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
        require: true,
    },
    inventory: {
        quantity: {
            type: Number,
            required: true,
        },
        inStock: {
            type: Boolean,
        },
    },
}, { timestamps: true });
exports.ProductModel = (0, mongoose_1.model)("Product", ProductSchema);
