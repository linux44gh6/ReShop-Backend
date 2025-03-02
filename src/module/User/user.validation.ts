import { z } from "zod";
import { userRole } from "./user.interface";
import { profile } from "console";

 const userValidationSchema = z.object({
       email: z.string().email('Invalid email address'),
       password: z.string().min(6, 'Password must be at least 6 characters long'),
       name: z.string().min(1, 'Name is required'),
       role: z.enum([userRole.USER, userRole.ADMIN]).default(userRole.USER), 
       phone_number: z.string().min(1, 'Phone number is required'),
       profileImg: z.string().optional(),

 });

    export const userValidation={
        userValidationSchema
    }
 