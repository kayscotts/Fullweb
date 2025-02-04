import night from "../images/night.png";
import {useSelector} from "react-redux";
import {Link,useLocation} from "react-router-dom";
import {useLogoutQuery} from "../redux/api/apiSlice.js";
import searchd from "../images/searchd.png"
import logo from "../images/logo.png";
import "./Navigation.css";
import {Outlet} from "react-router-dom";
const Navigation=({isLogin,setIsLogin})=>{
const current=useSelector((state)=>state.current.current)
//const {data,isLoading,isError}=useLogoutQuery();
console.log(current)
const location=useLocation();
const data=location.state;
const logout=async ()=>{
    try{
    const response=await useLogoutQuery()
    if(response.data.logout){
        setIsLogin(false)
      }    

     }
     catch(error){}
   }
return (<>
<div className="navbar">
<div className="flex1">IsaacMovies</div>
<div className="flex2">
<ul className="ul-flex">
<li><Link to="/">Home</Link></li>
<li>Movies</li>
<li>Series</li>
<li>Adventure</li>
</ul>
</div>
<div className="flex3">
{isLogin && (
<>
<Link to={`/users/user/${current?current:'g'}`}>
Account</Link>
<button onClick={logout}>Logout</button>
</>
)}
</div>
</div>

<Outlet/>
</>)

}
export default Navigation;
