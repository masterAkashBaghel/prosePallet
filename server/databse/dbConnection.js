import mongoose from "mongoose";
import dotenv from "dotenv";

const Connection = async () => {
  dotenv.config();
  const URL = process.env.DATABASE_URL;
  try {
    await mongoose.connect(URL);
    console.log("database connection established");
  } catch (e) {
    console.log("error while making connection with databse ", e.message);
  }
};
export default Connection;
