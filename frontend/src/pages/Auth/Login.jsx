import Swiper from "../../Swipe.jsx";
import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react'

import {useState} from "react";
import {setCurrent}from "../../redux/features/auth/currentUser";
import {useSelector,useDispatch} from "react-redux";
import {useLoginMutation} from "../../redux/api/apiSlice";
import {useNavigate,Link} from "react-router-dom";
const Login=({setIsLogin,isLogin})=>{
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [invalid,setInvalid]=useState(false);


const UserObject=[
 {email:"kayimaisaac03@gmail.com",
 password:"1234"},
 {
 email:"kayima256@gmail.com",
 password:"0000"
 }
]

const current=useSelector((state)=>state.current.current)
const dispatch=useDispatch();
const Navigate=useNavigate();
const Dispatch=(email)=> dispatch(setCurrent(email));

/*const handleSubmit = async (e) => {
  e.preventDefault();
  if (email && password) { // Check if both email and password are provided
    if ( UserObject.map((p)=>p.email===email && p.password ===password) {
      console.log("true");
      const data={email};
      setIsLogin(true);
      dispatch()  
      setInvalid(false)
      // Set isLogin to true to indicate successful login (optional)
      Navigate(`/`,{state:data}); // Redirect to home page after successful login
    } else {
      console.log("Invalid credentials");
      change()
    }
  } else {
    console.log("Please provide your email and password");
  }
}
*/
/*const handleSubmit=async (e)=>{
  e.preventDefault();
  if(password && email){
  const data={email,password}
 try{
   const response=await 
fetch("http://localhost:4000/login");
   const data1=await response;
   console.log(data1)
 }
 catch(error){console.log(error)}

}  

}*/
const 
[login,{isLoading,isSuccess,error}]=useLoginMutation();

const handleSubmit = async (e) => {
  e.preventDefault();

  if (password && email) {
    const data = { email, password };

    try {
     const result=await login({email,password}).unwrap();
     console.log("yooo",result);
      
    // const responseData = await result.json(); // Parse the JSON response from the server
      //console.log("Success:", responseData);
      if(result && result.token){
       localStorage.setItem("token",result.token);
        setIsLogin(true)
        const dat={email}
      Dispatch(email)
      console.log(current)
       Navigate("/");
       // Navigate("/",{state:dat})
       }else{
        setInvalid(true) 
       }
    }
    catch(error){}   
     
} 
  
  
};

 return (
  <>
<Helmet>
        <meta name="viewport" content="width=device-width,
 initial-scale=1.0, user-scalable=no"/>

        <title>login</title>
      </Helmet>
 <div><h1>Login Page</h1></div>
 {invalid &&(<h2>invalid credentials</h2>)}
 <form onSubmit={handleSubmit}>
<div>
 <label htmlFor="email">Email</label>
 <input name="email" type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
</div>
<div>
 <label htmlFor="password">Password</label>
 <input name="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
</div>
<div>
<button>submit</button>
</div>
 </form>
<div>password:{password}</div>
<div>email:{email}</div>
<div>if you dont have an account <Link to="/signup">signup</Link>
</div>
{isLoading && (<p>loaading...</p>)}

</>
)

}

export default Login;
