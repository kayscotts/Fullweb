import Hitman07 from "../../images/Hitman07.png";
import {Fragment} from "react";
import Card from "./Card";
import Swiper from "../../Swiper.jsx";
import topT from "./topT.js";
import top from "./top.js";
import movies from "./data.js";
import "./Movies.css";
import {useState} from "react"
const Movies=()=>{
const [query,setQuery]=useState("");
const filteredMovies=movies.filter((movie)=>
movie.title.toLocaleLowerCase().
indexOf(query.toLocaleLowerCase()) !==-1
);
 console.log(filteredMovies)

const filteredData=(query)=>{
 let filteredItems=movies;
 if(query){
 filteredItems=filteredMovies;
 }  
return filteredItems;

};

let result=filteredData(query)
 return (
 <Fragment className="frag">
 <div>
<div className="search">
<input type="text" placeholder="Search Movie" value={query}
 onChange={(e)=>setQuery(e.target.value)}/>
<span>{query}</span>
</div>
<Swiper/>
</div>
  

{!query &&( 
<>
<div className="top">

 <h2>Top Movies</h2>
</div>
<div className="movie-container">
 {top.map((top)=>(<Card title={top.title} img={top.img}/>))}
</div>

 <div className="top">
 <h2>Top Rated</h2>
</div> 
<div className="movie-container">
 {topT.map((tp)=>(<Card title={tp.title} img={tp.img}/>))}
</div>
</>
)}

<div className="movie-container">
{query &&(result.map((movie)=>(<Card title={movie.title} img={movie.img}/>)))}
</div>

 </Fragment>


)

}
export default Movies;
