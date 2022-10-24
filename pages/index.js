import React, { useEffect, useState } from "react";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import MovieList from "../components/MovieList";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/slices/movieSlice";

const Index = ({ popularMovies }) => {
  const [latestMovies, setLatestMovies] = useState([]);
  const dispatch = useDispatch();
  const { allMovie } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies("upcoming"));
    setLatestMovies(popularMovies.reverse());
  }, []);

  return (
    <>
      <HeroSlider content={allMovie} />
      <MovieList title="Popular Movies" allMovie={popularMovies} />
      <MovieList title="Latest Movies" allMovie={latestMovies} />
    </>
  );
};

export async function getStaticProps() {
  let popularMovies;

  try {
    const res = await fetch(
      `${process.env.BASE_URL}/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    );
    popularMovies = await res.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      popularMovies: popularMovies.results,
    },
  };
}

export default Index;
