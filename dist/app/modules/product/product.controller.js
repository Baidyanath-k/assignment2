"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const product_joiValidation_1 = __importDefault(require("./product.joiValidation"));
const product_service_1 = require("./product.service");
// created product
const createProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product: product_data } = req.body;
        const { error, value } = product_joiValidation_1.default.validate(product_data);
        if (error) {
            res.status(400).json({
                success: false,
                message: "An error occurred while creating the product",
                error: error.message,
            });
        }
        const result = yield product_service_1.ProductServices.createProductIntoDB(value);
        res.status(200).json({
            success: true,
            message: "Product created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "An error occurred while creating the product",
            error: error.message,
        });
    }
});
// Fetched all product
const fetchedAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.fetchedAllProductIntoDB();
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Do not found all products",
            error: error.message,
        });
    }
});
// Fetched Product By Id
const fetchedProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.fetchedProductByIdIntoDB(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Can not product fetched!",
            error: error.message,
        });
    }
});
// Update product By Id
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateData = req.body;
        const result = yield product_service_1.ProductServices.updateProductIntoDB(productId, updateData);
        res.status(400).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Product can not update",
            error: error.message,
        });
    }
});
// Delete Product By Id
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.deleteProductByIdIntoDB(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Product do not deleted!",
            error: error.message,
        });
    }
});
// search operation by key
const searchOperation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const result = yield product_service_1.ProductServices.searchOperationIntoDB(searchTerm);
        if (result.length === 0) {
            return res.status(500).json({
                success: true,
                message: ` '${searchTerm}' product not found! `,
            });
        }
        res.status(200).json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Do not found product",
            error: error.message,
        });
    }
});
exports.ProductControllers = {
    createProductController,
    fetchedAllProduct,
    fetchedProductById,
    updateProduct,
    deleteProductById,
    searchOperation,
};
