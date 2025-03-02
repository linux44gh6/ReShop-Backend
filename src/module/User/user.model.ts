import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";
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
        required: true
    },
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
 
export const User=model<IUser>('User', userSchema);