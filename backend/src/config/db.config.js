import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;
    if (!MONGO_URI) {
      console.log("MONGO_URI not available in envirmental variable");
    }
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected successfuly");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
