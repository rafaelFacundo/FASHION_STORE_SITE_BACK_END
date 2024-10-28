import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

const configuredCloudinary = cloudinary;

configuredCloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadPhoto = async (photoUrl, photoPublicId) => {
  try {
    const uploadResult = await configuredCloudinary.uploader.upload(photoUrl, {
      public_id: photoPublicId,
    });
    const finalUrl = configuredCloudinary.url(uploadResult.public_id, {
      fetch_format: "auto",
      quality: "auto",
    });
    return finalUrl;
  } catch (error) {
    console.log(error);
  }
};
