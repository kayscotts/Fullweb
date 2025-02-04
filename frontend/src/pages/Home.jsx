import Movies from "./movies/Movies";
import {Outlet,Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
const Home=({isLogin,setIsLogin})=>{
 const location=useLocation();
 const data=location.state;

 useEffect(()=>{
   const storedToken=localStorage.getItem("token");
   if(storedToken){
    setIsLogin(true)

    }


 })

 
 return (
<>
<Movies/>
<div className="text-red">
{!isLogin &&(<Link to="/login">LOGIN</Link>)}
</div>
<Outlet/>
</>

)}

export default Home;
