import {Link} from "react-router-dom";
import Hitman07 from "../../images/Hitman07.png";
const Card=({title,img})=>{
 return (
  <div className="card">
 <img src={img} alt="im"/>
 <span><Link to={`/movies/movie/${title}`}>{title}</Link></span>
 </div>
)

}

export default Card;
