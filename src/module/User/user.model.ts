import mongoose, { model, Schema } from "mongoose";
import { IUser, UserModel } from "./user.interface";
import bcrypt from 'bcrypt';
const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone_number: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
    },
    profileImg: {
        type: String,
    }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    const user = this 
    user.password = await bcrypt.hash(user.password, 10)
    next()
});

userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
 });

 userSchema.statics.isPasswordMatch = async function (plainPassword: string, hashedPassword: string) {
       return await bcrypt.compare(plainPassword,hashedPassword);
};  
 
export const User=model<IUser,UserModel>('User', userSchema);