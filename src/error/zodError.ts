import { ZodError, ZodIssue } from "zod";
import { TErrorResponse } from "../interface/error";

export const zodError = (error: ZodError):TErrorResponse => {
    const errorSources = error.errors.map((issue:ZodIssue) => {
        return {
            path:issue?.path[issue.path.length-1],
            message: issue.message,
        };
    });
    return {
        statusCode: 400,
        message: 'Validation Error',
        errorSources,
    };
};