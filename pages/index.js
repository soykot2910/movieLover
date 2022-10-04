import React, { useEffect, useState } from "react";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import MovieList from "../components/MovieList";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/slices/movieSlice";
import genres from "../data/genres.json"

const Index = ({ upcomingMovies }) => {
  const dispatch = useDispatch();
  const { allMovies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);


  return (
    <>
      <HeroSlider content={upcomingMovies} />
      <MovieList title="Popular Movies" allMovie={allMovies} />
    </>
  );
};

export async function getStaticProps() {
  let movieInfo;

  try {
    const res = await fetch(
      `${process.env.BASE_URL}/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`
    );
    movieInfo = await res.json();
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      upcomingMovies: movieInfo.results,
    },
  };
}

export default Index;
