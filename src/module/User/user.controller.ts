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
export const UserController={
    getAllUser
}