import Home from "./pages/Home";
import Ret from "./ret.jsx";
import Movie from "./pages/movies/Movie.jsx";
import Navigation from "./pages/Navigation";
import {Route,Routes,BrowserRouter,
createBrowserRouter} from "react-router";
import Login from "./pages/Auth/Login";
import Sign from "./pages/Auth/Sign";
import {Navigate} from "react-router-dom";
import {useState,useEffect} from "react";
import {useLogoutQuery,useLoginMutation,useVerifyQuery} from "./redux/api/apiSlice";
import UserProfile from "./pages/user/UserProfile";
function App() {
const [isLogin,setIsLogin]=useState(false);
  const {data,isLoading}=useVerifyQuery();
 if(isLoading){
 console.log("huhs");
 }  
//const {data,isLoading,isError}=useVerifyQuery()
  //console.log(data)
useEffect(()=>{
   const checkAuth=async ()=>{
   
   
   try{
   const data1=await data;
   console.log(data1)   
if(data1){
    setIsLogin(data.isLogin||null)
    console.log(data)
   }
     }
    catch(error){console.error(error)}
  }
   
  checkAuth();

},[isLogin])

return (
 <Routes>
 <Route path="/" element={<Navigation isLogin={isLogin}/>}>
 <Route exact path="/" element={isLogin?<Home isLogin={isLogin} setIsLogin={setIsLogin}/>:<Navigate replace to="/login"/>}/>
 <Route path="/users/user/:username" setIsLogin={setIsLogin} element={isLogin?<UserProfile/>:<Navigate replace to="/login"/>}/> 
 <Route path="/movies/movie/:movie" element={isLogin?<Movie/>:<Navigate replace to="/login" />}/>
</Route>
 <Route path="/login" element={<Login isLogin={isLogin} setIsLogin={setIsLogin}/>}/>
 <Route path="/signup" element={<Sign isLogin={isLogin} setIsLogin={setIsLogin}/>}/>
 <Route path="/ret" element={<Ret/>}/>
</Routes>


)
}
export default App
