import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB=async ()=>{
 try{
   await mongoose.connect(process.env.MONGO_URL)
  console.log("successfully connected to Mongo db")
 }
 catch(error){
 console.log("failed to connect to Mongo db",error);
}

}
export default connectDB;
