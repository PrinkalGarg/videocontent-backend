import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MongoDB_URI}`);

        console.log("MongoDB Connected");
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;