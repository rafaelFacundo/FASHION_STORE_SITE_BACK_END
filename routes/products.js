import express from "express";
import {
  getAllProductsByCategory,
  getProductById,
} from "../middlewares/products";

const productRouter = express.Router();

productRouter.get("/products/all/:category", getAllProductsByCategory);
productRouter.get("/products/one/:id", getProductById);

export default productRouter;
