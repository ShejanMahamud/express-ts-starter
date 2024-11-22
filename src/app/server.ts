import dotenv from 'dotenv';
import { connectDB } from '../helpers/db';
import app from './app';
dotenv.config();
const PORT = process.env.PORT || 3000;
const uri: string = process.env.MONGO_URI || '';
(async () => {
  try {
    await connectDB(uri);
    app.listen(PORT, () => console.log(`APP RUNNING ON PORT: ${PORT}`));
  } catch (error) {
    console.error('Failed to Start the Server:', error);
    process.exit(1);
  }
})();