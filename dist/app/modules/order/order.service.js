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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const order_model_1 = require("./order.model");
const createOrderIntoDB = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const newOrder = new order_model_1.OrderModel(order);
    yield newOrder.save();
    return newOrder;
});
const getAllOrderIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.find();
    return result;
});
const orderFetchedInEmailIntoDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.find({
        $or: [{ email: { $regex: email, $options: "i" } }],
    }).exec();
    return result;
});
exports.OrderServices = {
    createOrderIntoDB,
    getAllOrderIntoDB,
    orderFetchedInEmailIntoDB,
};
