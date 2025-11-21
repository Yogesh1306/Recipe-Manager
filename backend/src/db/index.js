import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try {
        const response = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("DB connected successfully!!\n",response.connection.host)
    } catch (error) {
        console.log("Unable to connect to DB!!\n",error)
    }
}

export {connectDB}