import React from "react";
import MovieCard from "./MovieCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const MovieList = ({ allMovie, title }) => {
  return (
    <div className="container py-10 movieContainer">
      <h3 className="xl:text-3xl text-white font-bold py-10">{title}</h3>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {allMovie?.map((movie, idx) => (
          <SwiperSlide key={idx}>
            <MovieCard movieInfo={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
