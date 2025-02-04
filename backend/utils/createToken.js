import jwt from "jsonwebtoken";

const generateToken=(res,userId)=>{
 const token=jwt.sign({userId},process.env.JWR_SECRET,
 {expiresIn:"30d",})

 //set jwt as an HTTP ONLY COOKUE
 res.cookie("jwt",token,{
   httpOnly:true,
   secure:process.env.NODE_ENV !=="development",
   sameSite:"strict",
   maxAge:30*24*60*60*1000,
   
  })

}

export default generateToken;
