import jwt from "jsonwebtoken";
import config from "../../app/config";
import { IUser } from "../User/user.interface";

export const createToken = (payload: Partial<IUser>) => {
    return jwt.sign(payload, config.jwt_secret as string, {
        expiresIn:3,
    });
};
export const createRefreshToken = (payload: Partial<IUser>) => {
    return jwt.sign(payload, config.jwt_secret as string, {
        expiresIn: 90,
    });
};
