import {useState} from "react";
import {setCurrent} from "../../redux/features/auth/currentUser";
import {useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {useSignMutation} from "../../redux/api/apiSlice";
const Sign=({isLogin,setIsLogin})=>{
const
[sign,{isLoading,isSuccess,error}]=useSignMutation();
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const current=useSelector((state)=>state.current.current);
const dispatch=useDispatch();
const Dispatch=(email)=>dispatch(setCurrent(email));
const Navigate=useNavigate();
const handleSubmit=async (e)=>{
 e.preventDefault();
 if(email && password){
    const data={email,password}
  
   try{
     const result=await sign(data).unwrap()
    console.log("waata",result)
    if(result && result.token){
     console.log("result token",result.token)
        setIsLogin(true)
        const dat={email}
      Dispatch(email)
      console.log(current)
       Navigate("/");
    }
   }
   catch(err){
    console.error("this error",error)
   }
 }
 }
return (
<>
<div><h1>Signup Page</h1></div>
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
<div>
<h2>inspecting details</h2>
<div>Email : {email}</div>
<div>Password: {password}</div>
</div>
 <Link to="/ret">goto ret</Link>
<div>If you already have an account just <Link to="/login">Login</Link></div>
</>


)

}
export default Sign;
