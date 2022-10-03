import React, { useState } from "react";
import HeroSlider from "../components/HeroSlider/HeroSlider";
const Index = ({ movieInfo }) => {

  return (
    <>
      <HeroSlider content={movieInfo} />
    </>
  );
};

export async function getStaticProps() {
  let movieInfo;

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=8f4b770dd036a39a993bd278fa769318&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=`
    );
    movieInfo = await res.json();
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      movieInfo:movieInfo.results,
    },
  };
}

export default Index;
