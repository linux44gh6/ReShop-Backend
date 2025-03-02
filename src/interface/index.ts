// global.d.ts (create this file in your `src` or `types` folder)
import { JwtPayload } from 'jsonwebtoken';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: JwtPayload | string;
    }
  }
}