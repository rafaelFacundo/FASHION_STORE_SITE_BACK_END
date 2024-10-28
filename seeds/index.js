import { uploadPhoto } from "../services/cloudinary.js";
import Product from "../models/Product.js";

const seedProducts = async (productsList) => {
  try {
    let newPhotosUrl = [];
    for (const product of productsList) {
      for (const url of product.photosUrls) {
        const finalUrl = await uploadPhoto(
          url,
          url.slice(url.lastIndexOf("/") + 1, url.lastIndexOf("."))
        );
        newPhotosUrl.push(finalUrl);
      }
      product.photosUrls = [...newPhotosUrl];
      newPhotosUrl = [];
    }
    Product.insertMany(productsList);
  } catch (error) {
    console.log(error);
  }
};

export default seedProducts;
