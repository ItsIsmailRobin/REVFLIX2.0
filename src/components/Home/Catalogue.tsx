"use client";
import Slider from "../Slider";
import { SwiperSlide } from "swiper/react";
import Card from "./Card";

const Catalogue = ({
  data,
}: {
  data: {
    tendingMovies: any;
    tendingTV: any;
    DiscoverBollywoodMovies: any;
    DiscoverTv: any;
  };
}) => {
  return (
    <div className="flex flex-col max-sm:gap-2 gap-14">
      {/* Trending Movies */}
      <Slider title="Trending Movies">
        {data.tendingMovies?.results?.map((movie: any) => {
          return (
            <SwiperSlide key={movie?.id}>
              <Card media={movie} />
            </SwiperSlide>
          );
        })}
      </Slider>

      {/* Trending TV */}
      <Slider title="Trending TV">
        {data.tendingTV?.results?.map((tv: any) => {
          return (
            <SwiperSlide key={tv?.id}>
              <Card media={tv} />
            </SwiperSlide>
          );
        })}
      </Slider>

      {/* Bollywood Movies */}
      <Slider title="Bollywood Movies">
        {data.DiscoverBollywoodMovies?.results?.map((movie: any) => {
          return (
            <SwiperSlide key={movie?.id}>
              <Card media={movie} />
            </SwiperSlide>
          );
        })}
      </Slider>


import React from "react";
import imageToAdd from "https://itsismailrobin.github.io/fs/footer.png";
function YourComponent() {
   return <img src={imageToAdd} alt="Image" />;
}
export default YourComponent;
<center><p>Rev by REVFLIX</p></center>
      {/* Discover TV */}
      {/* <Slider title="Discover TV">
        {data.DiscoverTv?.results?.map((tv: any) => {
          return (
            <SwiperSlide key={tv?.id}>
              <Card media={tv} />
            </SwiperSlide>
          );
        })}
      </Slider> */}
    </div>
  );
};

export default Catalogue;
