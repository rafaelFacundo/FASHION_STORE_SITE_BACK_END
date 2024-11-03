import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: { type: String, require: false, default: "" },
    name: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    photosUrls: { type: [String], require: true },
    sizes: { type: [String], require: true },
    category: { type: String, require: true },
    stock: { type: Number, require: true },
    colors: { type: [String], require: true },
    mainNews: { type: Boolean, require: true },
    mainProduct: { type: Boolean, require: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
