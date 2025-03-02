import { AnyZodObject } from "zod";
import { CatchAsync } from "../Utils/CatchAsync";

export const validateRequest = (Schema:AnyZodObject) => {
 return CatchAsync(async(req,res,next)=>{
   await Schema.parseAsync({
        data:req.body,
        cookies: req.cookies,
   });
    next();
 }
    )
}