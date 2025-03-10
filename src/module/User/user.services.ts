import { IUser } from "./user.interface";
import { User } from "./user.model"

const getAllUser=async()=>{
    const result=await User.find();
    return result;
}

const getSingleUser=async(id:string)=>{
    const result=await User.findById(id);
    return result
}

const deleteUser=async(id:string)=>{
    const result=await User.findByIdAndDelete(id);
    return result
}

const updateUser=async(id:string)=>{
    const result=await User.findByIdAndUpdate(id,{isBlocked:true},{new:true});
    return result
}
export const userServices={
    getAllUser,
    getSingleUser,
    deleteUser,
    updateUser
}