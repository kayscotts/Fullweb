import {useParams} from "react-router-dom";
const Movie=()=>{
const {movie}=useParams();
return (
  <div>
  {movie}
  </div>
)

}
export default Movie;
