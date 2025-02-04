import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const generateToken=(res,userId)=>{
 console.log("hi")
 const token=jwt.sign({name:userId},process.env.JWT_SECRET,
      {expiresIn:"1d"})

 console.log(token)
 /*res.cookie("jwt",token,{
  httpOnly:true,
  secure:process.env.NODE_ENV !=="development",
   sameSite:"lax",
  maxAge:30*24*60*60*1000,
   })
 console.log("cookie set");*/
 return token;
}

export default generateToken;
