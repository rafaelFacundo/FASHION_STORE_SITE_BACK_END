import mongoose from "mongoose";
import productsList from "./seeds/products.js";
import seedProducts from "./seeds/index.js";
import "dotenv/config";

const connectToDBAndUploadDocuments = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("CONNECTED TO THE SERVER... GOING TO UPLOAD DOCUMENTS");
    await seedProducts(productsList);
    console.log("DOCUMENTS UPLOADED");
  } catch (error) {
    console.log(error);
  }
};

connectToDBAndUploadDocuments();
