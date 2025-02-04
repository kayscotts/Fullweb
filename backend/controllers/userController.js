import User from "../models/User.js";

import bcrypt from "bcryptjs";

import asyncHandler from "./asyncHandler.js";

import createToken from "../utils/createToken.js"


const createUser=asyncHandler(async(req,res,next)=>{
    const {username,email,password}=req.body;
     if(!useename | !email | !password){
      throw new Error("please fill all the fields")
     }


    const userExists=await User.findOne({email})
    if(userExists) res.status(400).send("user already exists");
    

//hash the password
   const salt=await bcrypt.genSalt()
   const hashedPassword=await bcrypt.hash(password,salt)
   const newUser=new User({username,email,password})
   
 try{
   await newUser.save()
   createToken(res,newUser._id)


  res.status(200).json({
  _id:newUser._id,
  username:newUser.username,
  email:newUser.email,
  isAdmin:newUser.isAdmin

})
}
  catch(error){
    res.status(400)
    throw new Error("invalid user data")
}

})
const loginUser=asyncHandler(async (req,res)=>{
  const {email,password}=req.body;
  
 const existingUser=await User.findOne({email})
 if(extingingUser){
  const isPasswordValid=await bcrypt.compare(password,existingUser.password)
  
  if(isPasswordValid){
   createToken(res,existingUser._id)
   res.status(201).json({
   _id:existingUser._id,
  username:existingUser.username,
  email:existingUser.email,
  isAdmin:existingUser.isAdmin

}) }else{
    res.status(401).json({message:"invalid password"});
}
}else{

   res.status(401).json({message:"User not found"})
  }

});

const logoutCurrentUser=asyncHandler(async (req,res)=>{
   res.cookie("jwt","",{
    httpOnly:true,
   expires:new Date(0)
  })
  res.status(200).json({mesaage:"logged out successfully"})
})

const getAllUsers=asyncHandler(async (req,res)=>{
    const users=await User.find({})
    res.json(users)

})

const getCurrentUserProfile=asyncHandler(async ()=>{
 const user=await User.findById(req.user._id)
 if(user){
      res.json({
     _id:user._id,
     username:user.username,
     email:user.email
     
})}else{

   res.status(404)
   throw new Error("usee not found")
}
})


const updateCurrentUserProfile=asyncHandler(async()=>{
  const user=await User.findById(req.user._id)
  if(user){
    user.username=req.body.username || user.username;
   user.email=req.body.email || user.email;

   if(req.body.password){
   const salt=await bcrypt.genSalt(10)
   const hashedPassword=await bcrypt.hash(req.body.password,salt);
   user.password=hashedPassword;
   
   
7   }
  }
 const updatedUser=await user.save();

})
export {createUser,getCurrentUserProfile,loginUser,updateCurrentUserProfile,logoutCurrentUser,getAllUsers}
