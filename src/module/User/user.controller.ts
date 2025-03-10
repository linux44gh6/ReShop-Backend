import { CatchAsync } from "../../Utils/CatchAsync";
import { sendResponse } from "../../Utils/SendResponse";
import { userServices } from "./user.services";

const getAllUser=CatchAsync(async(req,res)=>{
    const result=await userServices.getAllUser();
    sendResponse(res,{
        success:true,
        data:result,
        statusCode:200,
        message:'All User Retrive Successfully'
    })
})

const getSingleUser=CatchAsync(async(req,res)=>{
    const {id}=req.params
    const result=await userServices.getSingleUser(id);
    sendResponse(res,  {
        success: true,
        message: 'User Retrive Successfully',
        data: result,
        statusCode: 200
    })
})

const deleteUser=CatchAsync(async(req,res)=>{
    const {id}=req.params
    const result=await userServices.deleteUser(id);
    sendResponse(res,  {
        success: true,
        message: 'User Deleted Successfully',
        data: result,
        statusCode: 200
    })
})

const updateUser=CatchAsync(async(req,res)=>{
    const {id}=req.params
    const result=await userServices.updateUser(id);
    sendResponse(res,  {
        success: true,
        message: 'User Updated Successfully',
        data: result,
        statusCode: 200
    })
})
export const UserController={
    getAllUser,
    getSingleUser,
    deleteUser,
    updateUser
}