import Image from "next/image";
import React, { useCallback, useState } from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import {
  CrossIcon2,
  PlayBtn,
  PlayBtnHero,
  Plus,
  Star,
} from "../common/SVGIcons";
// modal style
const customStyles = {
  content: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    left: "0",
    top: "0",
    zIndex: "9999",
    overflow: "hidden",
    backgroundColor: "#0A0E17",
  },
};
const HeroSliderItem = ({ content }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  

  return (
    <section
      style={{
        background: `url(https://image.tmdb.org/t/p/original/${content.poster_path})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 20%",
        backgroundSize: "100%",
        zIndex: "9999",
      }}
      className="w-screen bg-slider"
    >
      <div className="container mx-auto active-slider">
        <div className="h-auto lg:h-screen py-5  container 3xl:mx-auto flex flex-col-reverse lg:flex-row items-center ">
          <div className="w-full lg:w-6/12  pl-3 z-[999]">
            <h2 className="text-white uppercase text-xl lg:text-6xl font-semibold">
              {content.original_title}
            </h2>

            <p className="text-white flex mt-3 justify-between max-w-[350px]">
              <span className="flex">
                <Star />
                <span className="ml-2">
                  {" "}
                  {content.vote_average} | {content.vote_count}
                </span>
              </span>
              <span className="text-gray-400">2h 10m Action,Drama 2021</span>
              {/* {content.release_date} */}
            </p>

            <p className="text-gray-400 mt-4">{content.overview.substring(0,180)} ...</p>

            <div className="mt-10 flex justify-between max-w-[430px]">
              <button className="bg-[#FF0450] flex py-4 px-6 text-white rounded-full">
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

            {/* open modal trigger */}
            {/* modal  */}
            {useCallback(
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
              >
                <div
                  className="z-[9999] h-screen w-screen relative overflow-hidden flex justify-center items-center"
                  onClick={closeModal}
                >
                  <CrossIcon2
                    className="w-6 fixed top-[120px] right-14 z-50 cursor-pointer"
                    onClick={closeModal}
                  />
                  <ReactPlayer
                    className="!w-[calc(100%+60px)] !h-auto md:!w-[1040px] aspect-video relative z-50"
                    url={content.download_link}
                    loop={false}
                    muted={false}
                    playing={true}
                    playsinline={true}
                    controls={true}
                  />
                </div>
              </Modal>,
              [modalIsOpen, closeModal]
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSliderItem;
