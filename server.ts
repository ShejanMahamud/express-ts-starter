import dotenv from "dotenv";
import app from "./app";
import { connectDB } from "./src/helpers/db";
dotenv.config();
const PORT = process.env.PORT || 5000;
const uri: string = process.env.MONGO_URI || "";
(async () => {
  try {
    await connectDB(uri);
    app.listen(PORT, () => console.log(`APP RUNNING ON PORT: ${PORT}`));
  } catch (error) {
    console.error("Failed to Start the Server:", error);
    process.exit(1);
  }
})();
