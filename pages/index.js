import React, { useState } from "react";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import MovieList from "../components/MovieList";
const Index = ({ movieInfo }) => {
  return (
    <>
      <HeroSlider content={movieInfo} />
      <MovieList title="Popular Movies" allMovie={movieInfo} />
    </>
  );
};

export async function getStaticProps() {
  let movieInfo;

  try {
    const res = await fetch(
      `${process.env.BASE_URL}/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    );
    movieInfo = await res.json();
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      movieInfo: movieInfo.results,
    },
  };
}

export default Index;
