import mongoose from "mongoose";

const connectDB = async () => {
    console.log("Database is connected !!!");
    
    return mongoose.connect(process.env.MONGODB_URI as string)
}

export default connectDB;