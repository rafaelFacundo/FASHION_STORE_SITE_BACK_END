import mongoose from "mongoose";

import "dotenv/config";
import Product from "./models/Product.js";

const updateProductsDocuments = async () => {
  await Product.updateMany(
    {},
    {
      $set: { mainNews: false, mainProduct: false },
    }
  );
};

const connectToDBAndUploadDocuments = async () => {
  try {
    console.log("CONNECTING TO MONGO DB CLUSTER");
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("CONNECTED TO MONGO DB CLUSTER");
    console.log("UPDATING DOCUMENTS");
    await updateProductsDocuments();
    console.log("DOCUMENTS UPDATED");
  } catch (error) {
    console.log(error);
  }
};

connectToDBAndUploadDocuments();
