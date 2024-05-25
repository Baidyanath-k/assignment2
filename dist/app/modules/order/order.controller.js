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
exports.OrderController = void 0;
const order_joivalidation_1 = __importDefault(require("./order.joivalidation"));
const order_service_1 = require("./order.service");
const createOrderCont = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { order: order_data } = req.body;
        const { error, value } = order_joivalidation_1.default.validate(order_data);
        if (error) {
            res.status(400).json({
                success: false,
                message: "An error occurred while creating the order",
                error: error.message,
            });
        }
        const result = yield order_service_1.OrderServices.createOrderIntoDB(value);
        res.status(400).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Order not created",
            error: error.message,
        });
    }
});
const getAllOrderCont = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderServices.getAllOrderIntoDB();
        res.status(400).json({
            success: true,
            message: "Orders fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "All Order data do not retrieve",
            error: error.message,
        });
    }
});
const orderFetchedInEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const result = yield order_service_1.OrderServices.orderFetchedInEmailIntoDB(email);
        res.status(400).json({
            success: true,
            message: "Orders fetched successfully for user email!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Orders fetched unsuccessfully for user email!",
            error: error.message,
        });
    }
});
exports.OrderController = {
    createOrderCont,
    getAllOrderCont,
    orderFetchedInEmail,
};
