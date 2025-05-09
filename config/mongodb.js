import mongoose from "mongoose";

const connectDB = async ()=> {
  try {
   
    mongoose.connection.on('connected', ()=> {
      console.log("MongoDB connected successfully");
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/PictureCraft`);

  } catch (error) {
    console.log(" Initial MongoDB connection failed:", error.message);
  }
};

export default connectDB;
