import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { fetchCast, fetchMovieInfo, fetchVideo } from "../../utils/apiHelper";
import {
  CrossIcon2,
  PlayBtn,
  PlayBtnHero,
  Plus,
  Star,
} from "../common/SVGIcons";
import VideoModal from "../VideoModal";

const HeroSliderItem = ({ content }) => {
  const [movieInfo, setMovieInfo] = useState({});
  const [credits, setCredits] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [videoLink, setVideoLink] = useState();

  async function openModal(id) {
    let videos = await fetchVideo(id);
    await setVideoLink(
      `https://www.youtube.com/watch?v=${videos?.results[0]?.key}`
    );
    await setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    async function fetchMyAPI() {
      let res = await fetchMovieInfo(content.id);
      setMovieInfo(res);

      let credit = await fetchCast(content.id);
      setCredits(credit);
    }

    fetchMyAPI();
  }, []);

  return (
    <>
      <section
        style={{
          background: `url(${process.env.IMAGE_URL}/${content.poster_path})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 20%",
          backgroundSize: "100%",
          zIndex: "9999",
        }}
        className="w-screen bg-slider"
      >
        <div className="container mx-auto active-slider">
          <div className="h-auto lg:h-screen py-5 xl:px-16 lg:px-12 px-0 container 3xl:mx-auto flex flex-col-reverse lg:flex-row items-center ">
            <div className="w-full lg:w-6/12  pl-3 z-[999]">
              <h2 className="text-white uppercase text-xl lg:text-6xl font-semibold">
                {content.original_title}
              </h2>

              <p className="text-white flex mt-3 justify-between max-w-[350px]">
                <span className="flex">
                  <span className="ml-2">
                    <span className="bg-yellow-400 mr-3 text-black font-bold px-2 py-1 rounded-md ">
                      IMDb
                    </span>
                    {content.vote_average}
                  </span>
                </span>
              </p>

              <p className="text-gray-400 mt-4">
                {content.overview.substring(0, 180)} ...
              </p>

              <p className="my-2">
                <span className="text-[#FF0450]">Cast : </span>
                {credits?.cast.slice(0, 5)?.map((item, idx) => (
                  <span className="text-white mx-[2px]">
                    {item.name}
                    {4 > idx ? "," : " ..."}
                  </span>
                ))}
              </p>

              <p className="my-2">
                <span className="text-[#FF0450]">Genre : </span>
                {movieInfo?.genres?.map((item, idx) => (
                  <span className="text-white mx-[2px]">
                    {item.name}
                    {movieInfo.genres.length - 1 > idx ? "," : ""}
                  </span>
                ))}
              </p>

              <div className="mt-10 flex justify-between max-w-[430px]">
                <button
                  onClick={(e) => openModal(movieInfo.id)}
                  className="bg-[#FF0450] flex py-4 px-6 text-white rounded-full"
                >
                  <PlayBtn />
                  <span className="ml-2 text-sm">WATCH TRAILER</span>
                </button>
                <button className="bg-white flex py-4 px-6 rounded-full">
                  <Plus />
                  <span className="ml-2 text-sm">ADD WATCHLIST</span>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-5 lg:px-[35px] z-[9999]">
              <div className="relative">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${content.poster_path}`}
                  alt="imgage"
                  width={823}
                  height={465}
                  layout="responsive"
                  className="rounded px-10  mt-5 block"
                />
                <span>
                  <a className="playBut " onClick={openModal}>
                    <PlayBtnHero />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal
        videoLink={videoLink}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default HeroSliderItem;
