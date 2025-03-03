import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { userRole } from '../../module/User/user.interface';
import { CatchAsync } from '../../Utils/CatchAsync';
import AppError from '../../error/appError';
import { StatusCodes } from 'http-status-codes';
import config from '../../app/config';
import { User } from '../../module/User/user.model';


const auth = (...requiredRoles: userRole[]) => {
   return CatchAsync(
      async (req: Request, res: Response, next: NextFunction) => {
         const token = req.headers.authorization;

         if (!token) {
            throw new AppError(
               StatusCodes.UNAUTHORIZED,
               'You are not authorized!'
            );
         }

         const decodedToken = jwt.verify(
            token,
            config.jwt_secret as string
         ) as JwtPayload;
         const {email,role}=decodedToken
         const user=await User.findOne({email,role})
         if(!user){
            throw new AppError(
               StatusCodes.UNAUTHORIZED,
               'You are not authorized!'
            );
         }
         if (!requiredRoles.includes(role)) {
            throw new AppError(
               StatusCodes.UNAUTHORIZED,
               'You are not authorized!'
            );
         }
         req.user=decodedToken
         console.log(req.user);
         next();
      }
   );
};

export default auth;