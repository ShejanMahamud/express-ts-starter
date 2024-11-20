import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

// Define an interface for the JWT payload (customize as needed)
interface JwtPayload {
  userId: string;
  email: string;
  iat?: number;
  exp?: number;
}

// Middleware for authentication
const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // Extract token from the Authorization header
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    // Verify the token
    const secretKey = process.env.JWT_SECRET || "defaultSecret"; // Replace with your secret key from .env
    const decoded = jwt.verify(token, secretKey) as JwtPayload;

    // Attach the user info to the request object
    (req as any).user = decoded;
    next(); // Pass control to the next middleware or route handler
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};
export default authenticateToken;
