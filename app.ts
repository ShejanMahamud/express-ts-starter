import dotenv from "dotenv";
import express from "express";
import userRoutes from "./src/routes/user.routes";
import { CustomError } from "./src/utils/customError";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);

// Handle 404 errors
app.use((req, res, next) => {
  const error = new CustomError("Requested URL Not Found", 404);
  next(error);
});

export default app;
