import mongoose from "mongoose";

export const castError = (error:mongoose.Error.CastError) => {
    const errorSources = [
        {
            path: error.path,
            message: error.message, 
        },
    ];
    return {
        statusCode: 400,
        message: 'Validation Error',
        errorSources,
    };
}