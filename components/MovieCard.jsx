import React from "react";
import Image from "next/image";
import { PlayBtn } from "./common/SVGIcons";

const MovieCard = ({ movieInfo }) => {
  console.log("Mov", movieInfo);
  return (
    <a href={`/movie/${movieInfo.id}`} class="max-w-sm bg-white rounded-lg">
      <div className="h-[300px]">
        <img
          class="rounded-t-lg h-full w-full"
          src={`${process.env.IMAGE_URL}/${movieInfo.poster_path}`}
          alt=""
        />
      </div>
      <div class="py-5">
        <h5 class="mb-2 text-white text-xl font-bold tracking-tight ">
          Noteworthy 2021
        </h5>
      </div>
    </a>
  );
};

export default MovieCard;
