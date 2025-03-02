import mongoose from "mongoose";

export const ValidationError = (error:mongoose.Error.ValidationError) => {
    const errorSources=Object.values(error.errors).map((value:mongoose.Error.ValidatorError|mongoose.Error.CastError) => {
        return {
            path:value.path,
            message:value.message,
        };
    });    
    return {
        statusCode: 400,
        message: 'Validation Error',
        errorSources,
    };
}