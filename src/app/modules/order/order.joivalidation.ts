import Joi from "joi";

// Define Joi schema for the order
const orderJoiValidationSchema = Joi.object({
  email: Joi.string().email().required().trim().messages({
    "string.email": "Please fill a valid email address",
    "any.required": "Email is required",
  }),
  productId: Joi.string().required().messages({
    "any.required": "Product ID is required",
  }),
  price: Joi.number().required().messages({
    "number.base": "Price must be a number",
    "any.required": "Price is required",
  }),
  quantity: Joi.number().integer().min(1).required().messages({
    "number.base": "Quantity must be a number",
    "number.integer": "Quantity must be an integer",
    "number.min": "Quantity must be at least 1",
    "any.required": "Quantity is required",
  }),
}).messages({
  "object.unknown": "Order contains invalid fields",
});

export default orderJoiValidationSchema;
