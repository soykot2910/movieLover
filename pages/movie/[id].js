import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetchCast, fetchMovieInfo } from "../../utils/apiHelper";

const SingleMovie = () => {
  const [movieDetails, setMovieDetails] = useState();
  const [credits, setCredits] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchMyAPI() {
      let res = await fetchMovieInfo(id);
      setMovieDetails(res);

      let credit = await fetchCast(id);
      console.log("credits", credit);
      setCredits(credit);
    }

    fetchMyAPI();
  }, [router]);

  console.log(movieDetails);

  return (
    <div className="container mt-24">
      <div className="flex">
        <div className="w-4/12 flex items-center justify-center">
          <img
            className="h-[500px]"
            src={`${process.env.IMAGE_URL}/${movieDetails?.poster_path}`}
          />
        </div>
        <div className="w-8/12">
          <h3 className="text-[#4db6ac] hover:text-[#5CD0EA] font-bold text-3xl">
            {movieDetails?.original_title}
          </h3>
          <div className="flex mt-2">
            {movieDetails?.genres?.map((genre, idx) => (
              <p key={genre.id} className="text-white mr-2">
                {genre.name}
                {movieDetails.genres.length - 1 > idx ? "," : ""}
              </p>
            ))}
          </div>

          <div className="flex  items-center border-[1px] my-6 py-4 border-white border-l-0 border-r-0">
            <div className="flex items-center mr-10">
              <img src="/images/imdb.png" className="h-8 mr-2" />

              <p className="text-[#4db6ac] mr-4">
                {movieDetails?.vote_average?.toFixed(1)}
              </p>
              <p className="text-[#4db6ac]">
                ({movieDetails?.vote_count} votes)
              </p>
            </div>

            <div className="flex items-center mr-2">
              <img src="/images/tmdb.png" className="h-8 mr-2" />

              <p className="text-[#4db6ac] mr-4">
                {movieDetails?.popularity?.toFixed(2)}
              </p>
            </div>

            <div className="flex items-center">
              <img src="/images/rti-site.png" className="h-8 mr-2" />

              <p className="text-[#4db6ac] mr-4">
                {(
                  movieDetails?.popularity / movieDetails?.vote_average
                ).toFixed(2)}
              </p>
            </div>
          </div>

          <ul>
            <li className="text-white">
              <span className="text-gray-500">Released:</span>{" "}
              {new Date(movieDetails?.release_date).toDateString()}{" "}
            </li>
            <li className="text-white mt-2">
              <span className="text-gray-500">Director:</span> N/A
            </li>
            <li className="text-white mt-2">
              <span className="text-gray-500">Language:</span>{" "}
              {movieDetails?.production_countries[0]?.iso_3166_1}{" "}
            </li>
            <li className="text-white mt-2">
              <span className="text-gray-500">Stars: </span>
              {credits?.cast?.slice(0, 4)?.map((item, idx) => (
                <span className="text-[#4db6ac] mx-[2px]">
                  {item.name} {4 > idx ? "" : ","}
                </span>
              ))}
            </li>
          </ul>

          <p className="text-gray-300 mt-2">
            <span className="text-gray-500">Plot:</span>{" "}
            {movieDetails?.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
