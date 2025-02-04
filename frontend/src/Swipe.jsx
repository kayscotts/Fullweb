import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slidesData = [
  { image: "image1.jpg" }, // Replace with your image paths
  { image: "image2.jpg" },
  { image: "image3.jpg" },
  { image: "image4.jpg" },
];

const createSlide = (slide) => {
  return (
    <SwiperSlide key={slide.image}>
      <img src={slide.image} alt={`Slide ${slide.image}`} />
    </SwiperSlide>
  );
};

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={true} // Corrected navigation prop
      pagination={{ clickable: true }}
      slidesPerView={3}
      spaceBetween={30}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {slidesData.map(createSlide)}
    </Swiper>
  );
};

