import React from "react";
import Image from "next/image";
import { PlayBtn } from "./common/SVGIcons";

const MovieCard = ({ movieInfo }) => {
  return (
    <div className="">
      <div className="relative">
        <Image
          src={`${process.env.IMAGE_URL}/${movieInfo.poster_path}`}
          width={400}
          height={220}
          layout="responsive"
        />
        <span>
          <a className="absolute top-[40%] left-[50%] bg-[#FF0450] w-10 h-10 flex items-center justify-center rounded-full">
            <PlayBtn fill="white" stroke="white" />
          </a>
        </span>
      </div>
      <h3 className="text-white py-2 text-lg transition-all hover:text-[#FF0450]">
        {movieInfo.original_title}
      </h3>
    </div>
  );
};

export default MovieCard;
