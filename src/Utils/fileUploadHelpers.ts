import multer from 'multer';

import { v2 as cloudinary } from 'cloudinary'; 
import config from '../app/config';
import fs from 'fs'

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null,uniqueSuffix+'-'+file.originalname)
    }
})


//cloudenanary img

cloudinary.config({
    cloud_name: config.cloudinary_cloud_name,
    api_key: config.cloudinary_api_key,
    api_secret: config.cloudinary_api_secret
})
export const sendImageToCloudinary = async (imageName: string, path: string): Promise<{ secure_url: string }> => {
    try {
        // Your Cloudinary upload logic here
        const response = await cloudinary.uploader.upload(path, {
            public_id: imageName,
            folder: "ReShop",
        });

        return { secure_url: response.secure_url };
    } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        throw new Error("Failed to upload image");
    }
};

const upload=multer({storage:storage})

export default upload