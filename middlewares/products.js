import Product from "../models/Product.js";

export const getAllProductsByCategory = async (req, res) => {
  const { category } = req.params;
  const productsFound = Product.find({ category }).exec();
  res.status(200).send({ data: productsFound });
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  const productFound = Product.findById(id);
  res.status(200).send({ data: productFound });
};
