// Require the cloudinary library
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import {CloudinaryStorage} from 'multer-storage-cloudinary';
import dotenv from "dotenv";
// Return "https" URLs by setting secure: true
dotenv.config()
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});
// Log the configuration
console.log(cloudinary.config());

// Configure multer storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'my_uploads', // Optional folder in Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg', 'gif', 'webp','jfif'],
    // transformation: [{ width: 500, height: 500, crop: 'limit' }] // Auto-resize
  }
});

export const upload = multer({ storage });