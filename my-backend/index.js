import createToken from "./utils/createToken.js";
import connectDB from "./db.js";

import jwt from "jsonwebtoken";
import User from "./models/User.js";
import express from "express";
import cookieParser from "cookie-parser";

import cors from "cors";
import path from "path"
const UserObject=[
 {email:"kayimaisaac03@gmail.com",password:"1234"}
]
const port=4000||5000;

const verifyToken = async (req, res) => {
  const token=req.cookies.jwt;
 
  if (!token) {
    return res.status(401).setHeader('Content-Type', 'application/json').json({ isLogin: false });
  }

  try {
    // ...
    if (decoded) {
      return res.setHeader('Content-Type', 'application/json').json({ isLogin: true });
    }
  } catch (error) {
    console.error("Verify error:", error);
    return res.status(500).setHeader('Content-Type', 'application/json').json({ success: false, message: "Server Error" });
  }
};


/*const verifyToken=async (req,res)=>{
  const token=req.cookies.jwt;
  //if(!token) return res.send("notoken");

 if(!token) return res.status(401).json({isLogin:false});
 try{
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    //req.userId=decoded.userId;
   if(decoded) return res.json({isLogin:true});
}

catch(error){
  console.log("Error in verify Token",error);
  return res.status(500).json({success:false,
message:"server Error"});
}

};
*/
const create=(req,res)=>{
 createToken(res,"45");
 res.send("creating token hope its done")

}

const logout=(req,res)=>{
 res.clearCookie("jwt",{httpOnly:false,sameSite:"lax"})
 res.json({logout:true})
 }










const login=async (req,res)=>{

 const {email,password}=req.body;
try{
 if(email && password){
//const UserObject=await processData();
  //console.log(UserObject)
//const user=UserObject.find(user=>user.email
	//===email && user.password===password);
const user=await User.findOne({email});   

if(user){
 if(user.password===password){
    const token={"token":createToken(res,user._id)};
    res.json(token)
    createToken(res,user._id);
   } else{res.send("invalid cred")}
 }else{
  res.send("emai or pass missing")
 console.log("email or pasy")  
}}}

catch(error){

}

}
const signup=async (req,res)=>{
const {email,password}=req.body;
if(email && password){
  //const UserObject=await processData();
  //const userExists=UserObject.find(user=>user.email===email);
 
 const userExists=await User.findOne({email}); 
 if(userExists) return res.status(409);
 const token={name:"token"}
 res.json(token);
 const newArray=[...UserObject,{email,password}]
 writeData(newArray)
 const newUser=await User({email,password})
 
 await newUser.save()
 console.log(newUser) 
}
}


const app=express();
//app.use(cookieParser())
const corsOptions={
  origin:"https://scottmovies.onrender.com",
  credentials:true
 }
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())
app.get("/",(req,res)=>{
 res.send("hello junior developer")

})
app.get("/test-json", (req, res) => {
  res.setHeader('Content-Type', 'application/json').json({ message: "This is a test" });
});

app.get("/logout",logout)
app.get("/auth",verifyToken)
app.get('/test-cookie', (req, res) => {
  res.cookie('testCookie', 'testValue', { httpOnly: false}); // Or lax for testing
  res.send('Cookie set (hopefully)');
});

app.post("/login",login);
app.post("/signup",signup)
app.post("/create",create)
app.listen(port,async ()=>{
await connectDB();
console.log("server is running on port",port)
})
