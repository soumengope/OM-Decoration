import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI as string;

    if (!uri) throw new Error("MONGO_URI not found in .env");

    await mongoose.connect(uri);
    console.log("Database Connected");
  } catch (error) {
    console.error("Database Connection Error:", error);
    process.exit(1);
  }
};