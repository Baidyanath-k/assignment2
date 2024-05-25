"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
// Define Joi schema for the order
const orderJoiValidationSchema = joi_1.default.object({
    email: joi_1.default.string().email().required().trim().messages({
        "string.email": "Please fill a valid email address",
        "any.required": "Email is required",
    }),
    productId: joi_1.default.string().required().messages({
        "any.required": "Product ID is required",
    }),
    price: joi_1.default.number().required().messages({
        "number.base": "Price must be a number",
        "any.required": "Price is required",
    }),
    quantity: joi_1.default.number().integer().min(1).required().messages({
        "number.base": "Quantity must be a number",
        "number.integer": "Quantity must be an integer",
        "number.min": "Quantity must be at least 1",
        "any.required": "Quantity is required",
    }),
}).messages({
    "object.unknown": "Order contains invalid fields",
});
exports.default = orderJoiValidationSchema;
