import Joi from "joi";

const orderJoiValidationSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  productId: Joi.string().pattern(new RegExp("^[0-9a-fA-F]{24}$")).required(),
  price: Joi.number().required(),
  quantity: Joi.number().integer().min(1).required(),
});

export default orderJoiValidationSchema;
