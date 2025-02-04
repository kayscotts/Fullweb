import {useParams,useNavigate} from "react-router-dom";
import {useLogoutQuery} from "../../redux/api/apiSlice.js";
const UserProfile=({setIsLogin})=>{
  const Navigate=useNavigate();
  const {username}=useParams();
  const logout=async ()=>{
     Navigate("/login")
 }
 return <div><h1>User profile</h1>
  <h2>Email : {username}</h2>
  <h2 onClick={logout}>Logout</h2>

</div>
}
export default UserProfile;
