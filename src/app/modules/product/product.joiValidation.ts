import Joi from "joi";

// Define the validation schema for the variants
const VariantJoiSchema = Joi.object({
  type: Joi.string().trim().required(), // Assuming the type is required
  value: Joi.string().trim().required(), // Assuming the value is required
});

// Define the validation schema for the product
const ProductJoiSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    "string.empty": "Product name must be required",
  }),
  description: Joi.string().min(20).max(500),
  price: Joi.number().required().messages({
    "number.base": "Product price must be required",
  }),
  category: Joi.string().trim().optional(),
  tags: Joi.array().items(Joi.string().trim()).optional(),
  variants: Joi.array().items(VariantJoiSchema).required().messages({
    "array.base": "Variants must be required",
  }),
  inventory: Joi.object({
    quantity: Joi.number().required().messages({
      "number.base": "Product Quantity must be required",
    }),
    inStock: Joi.boolean().optional(),
  }).required(),
  createdAt: Joi.date().optional(),
  updatedAt: Joi.date().optional(),
});

export default ProductJoiSchema;
