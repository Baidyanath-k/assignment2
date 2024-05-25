"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const orderJoiValidationSchema = joi_1.default.object({
    email: joi_1.default.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
    productId: joi_1.default.string().pattern(new RegExp("^[0-9a-fA-F]{24}$")).required(),
    price: joi_1.default.number().required(),
    quantity: joi_1.default.number().integer().min(1).required(),
});
exports.default = orderJoiValidationSchema;
