import { Model } from "mongoose";

export interface IUser{
    name: string;
    email: string;
    phone_number: string;
    password: string;
    role: string;
    profileImg?: string;
    created_at: Date;
    updated_at: Date;
}
export enum userRole{
    USER= 'user',
    ADMIN= 'admin'
}

export interface UserModel extends Model<IUser>{
    isPasswordMatch(
        plainPassword: string,
        hashedPassword: string
      ): Promise<boolean>;
}