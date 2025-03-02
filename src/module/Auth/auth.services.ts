import { IUser } from "../User/user.interface";
import { User } from "../User/user.model";

const register = async(payload:IUser) => {
    const result=await User.create(payload)
    return result;
}

export const AuthService = {
    register
}