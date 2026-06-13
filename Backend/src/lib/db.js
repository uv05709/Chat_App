import mongoose from "mongoose";

export async function connectDB() {
  try {
    const mongoUri = process.env.MONGO_URI;
    
    if (!mongoUri) {
      throw new Error("mongoUri required");
    }
    const conn = await mongoose.connect(mongoUri);

    console.log("mongo db connected", conn.connection.host);
  } catch (error) {
    console.error("Mongo DB error", error.message);
    process.exit(1);
  }
}
