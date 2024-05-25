"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
// Define the validation schema for the variants
const VariantJoiSchema = joi_1.default.object({
    type: joi_1.default.string().trim().required(), // Assuming the type is required
    value: joi_1.default.string().trim().required(), // Assuming the value is required
});
// Define the validation schema for the product
const ProductJoiSchema = joi_1.default.object({
    name: joi_1.default.string().trim().required().messages({
        "string.empty": "Product name must be required",
    }),
    description: joi_1.default.string().min(20).max(500),
    price: joi_1.default.number().required().messages({
        "number.base": "Product price must be required",
    }),
    category: joi_1.default.string().trim().optional(),
    tags: joi_1.default.array().items(joi_1.default.string().trim()).optional(),
    variants: joi_1.default.array().items(VariantJoiSchema).required().messages({
        "array.base": "Variants must be required",
    }),
    inventory: joi_1.default.object({
        quantity: joi_1.default.number().required().messages({
            "number.base": "Product Quantity must be required",
        }),
        inStock: joi_1.default.boolean().optional(),
    }).required(),
    createdAt: joi_1.default.date().optional(),
    updatedAt: joi_1.default.date().optional(),
});
exports.default = ProductJoiSchema;
