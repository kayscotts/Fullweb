import {useParams} from "react-router-dom";
import {useLogoutQuery} from "../../redux/api/apiSlice.js";
const UserProfile=({setIsLogin})=>{
  
  const {username}=useParams();
  const logout=async ()=>{
    try{
    const response=await useLogoutQuery()
    if(response.data.logout){
        setIsLogin(false)
      }

     }
     catch(error){}
   }
 return <div><h1>User profile</h1>
  <h2>Email : {username}</h2>
  <h2 onClick={logout}>Logout</h2>

</div>
}
export default UserProfile;
