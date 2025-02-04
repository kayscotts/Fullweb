import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const connectDB=async()=>{
  try{
     await mongoose.connect(process.env.MONGO_URL)
     console.log(`successfully connected to mongo db`)
   }
  
  catch(error){
     console.log(error,"failed")
     process.exit(1)
 }


}

export default connectDB;
