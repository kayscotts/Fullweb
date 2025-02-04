import {Swiper,SwiperSlide} from "swiper/react";
import "./Swiper.css";
import {Navigation,Pagination,Autoplay} from 
"swiper/modules";
import Horror08 from "./images/Horror08.png";
import Hitman07 from "./images/Hitman07.png";
import florisa05 from "./images/florisa05.png";

import ghostlight06 from "./images/ghostlight06.png";
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
const data=[
{title:"florisa",
img:florisa05},
{title:"Hitman",
img:Hitman07},
{title:"florisa",
img:florisa05},
{title:"florisa",
img:florisa05},
]
function createSlide(img){
return (
  
 data.map((p)=>(
<>
 <SwiperSlide>
 <div className="swip">
 <img className="bg" height="30%" width="100%" src={p.img}
 alt=""/>
 <span>{p.title}</span>
 </div>
</SwiperSlide>
</>

)
)
 )

}
export default ()=>{
    return (

    <Swiper
    modules={[Navigation,Pagination,Autoplay]}
   // navigation
    autoplay={true}
    slidesPerView={3}    
    pagination={{clickable:true}}
    spaceBetween={7}
    loop={true}
    breakpoints={
     {
      608:{SlidesPerView:1}
    }
   }
   >
     <div className="flex">
{createSlide(Horror08)}

    </div>
   </Swiper>
)


}
