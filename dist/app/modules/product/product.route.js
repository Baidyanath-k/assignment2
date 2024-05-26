"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
// crated product route use post method
router.post("/", product_controller_1.ProductControllers.createProductController);
// fetched all data route use get method
router.get("/", product_controller_1.ProductControllers.fetchedAllProduct);
// fetched single data by Id route use get method
router.get("/:productId", product_controller_1.ProductControllers.fetchedProductById);
// update data by Id route use put method
router.put("/:productId", product_controller_1.ProductControllers.updateProduct);
// Delete data by Id route use delete method
router.delete("/:productId", product_controller_1.ProductControllers.deleteProductById);
// search by key
router.get("/search", product_controller_1.ProductControllers.searchOperation);
exports.ProductRoutes = router;
