import { StatusCodes } from "http-status-codes";
import { CatchAsync } from "../../Utils/CatchAsync";
import { sendResponse } from "../../Utils/SendResponse";
import { AuthService } from "./auth.services";

const register=CatchAsync(async(req,res)=>{
    const payload=req.body;
    console.log(
        payload
    );
    const result=await AuthService.register(payload)
    sendResponse(res,  {
        success: true,
        message: 'Registration Successfully',
        data: payload,
        statusCode: StatusCodes.CREATED
    })
})
export const AuthController={
    register   
}