import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path:path.join(process.cwd(), '.env')});
export default {
  port: process.env.PORT || 3000,
  database_url: process.env.DATABASE_URL,
  jwt_secret: process.env.JWT_SECRET,
  jwt_expires_in: process.env.JWT_EXPIRES_IN,
  node_env: process.env.NODE_ENV,
  cloudinary_cloud_name: process.env.CLOUD_NAME,
  cloudinary_api_key: process.env.CLOUD_API,
  cloudinary_api_secret:process.env.CLOUD_API_SECRET,
  secret_key: process.env.SECRET_KEY,
  client_url: process.env.CLIENT_URL
};