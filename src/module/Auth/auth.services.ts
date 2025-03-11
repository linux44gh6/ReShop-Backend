import { StatusCodes } from "http-status-codes";
import AppError from "../../error/appError";
import { IUser } from "../User/user.interface";
import { User } from "../User/user.model";
import { createRefreshToken, createToken } from "./auth.constans";
const register = async(payload:IUser) => {
    const result=await User.create(payload)
    return result;
}
const login=async(payload:Partial<IUser>)=>{
    const {email,password}=payload;
    const user=await User.findOne({email});
    if(!user){
        throw new Error('User Not Found');
    }
    if(!User.isPasswordMatch(user.password,password as string)){
        throw new AppError(StatusCodes.BAD_REQUEST,"Password Not Matched");
    }
    const jwtPayload={
        _id:user._id,
        name:user.name,
        email:user.email,
        phone_number:user.phone_number,
        role:user.role
    }
    const accessToken= createToken(jwtPayload);

    const refreshToken=createRefreshToken(jwtPayload);
    return {
        accessToken,
        refreshToken,
    }
}
export const AuthService = {
    register,
    login
}