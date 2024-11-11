import mongoose from "mongoose";
import "dotenv/config";
import express from "express";

const app = express();

app.use(express.json());

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
