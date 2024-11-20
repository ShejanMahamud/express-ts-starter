import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload | string;
    }
  }
}
declare namespace Express {
  export interface Request {
    user?: IUser;
  }
}
