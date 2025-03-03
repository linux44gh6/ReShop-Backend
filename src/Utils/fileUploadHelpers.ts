import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import config from "../app/config";
import fs from "fs";


cloudinary.config({
    cloud_name: config.cloudinary_cloud_name,
    api_key: config.cloudinary_api_key,
    api_secret: config.cloudinary_api_secret,
});

export const sendImagesToCloudinary = async (files: Express.Multer.File[]): Promise<string[]> => {
    try {
        const uploadPromises = files.map(async (file) => {
            const response = await cloudinary.uploader.upload(file.path, {
                folder: "ReShop",
            });

            fs.unlinkSync(file.path);
            return response.secure_url;
        });

        return await Promise.all(uploadPromises);
    } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        throw new Error("Failed to upload images");
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads"); // 
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + "-" + file.originalname);
    },
});

const upload = multer({ storage });

export default upload;
