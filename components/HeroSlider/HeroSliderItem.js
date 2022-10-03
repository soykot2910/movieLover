import Image from "next/image";
import React, { useCallback, useState } from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import { CrossIcon2 } from "../common/SVGIcons";
// modal style
const customStyles = {
  content: {
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
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "auto",
        zIndex: "9999",
      }}
      className="w-screen bg-slider"
    >
      <div className="container mx-auto active-slider">
        <div className="h-auto lg:h-[70vh] py-5  container 3xl:mx-auto flex flex-col-reverse lg:flex-row items-center lg:px-[70px]">
          <div className="w-full lg:w-6/12  pl-3 z-[999]">
            <h2 className="text-white text-xl lg:text-6xl font-semibold">
              {content.original_title}
            </h2>
          </div>
          <div className="w-full lg:w-6/12 px-5 lg:px-[35px] z-[9999]">
            <div className="relative">
              <Image
                src={`https://image.tmdb.org/t/p/original/${content.poster_path}`}
                alt="imgage"
                width={582}
                height={330}
                layout="responsive"
                className="rounded px-10  mt-5 block"
              />
              <span>
                <a className="playBut " onClick={openModal}>
                  <svg
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="213.7px"
                    height="213.7px"
                    viewBox="0 0 213.7 213.7"
                    enableBackground="new 0 0 213.7 213.7"
                  >
                    <polygon
                      className="triangle"
                      id="XMLID_18_"
                      fill="none"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      points="
            73.5,62.5 148.5,105.8 73.5,149.1 "
                    ></polygon>

                    <circle
                      className="circle"
                      id="XMLID_17_"
                      fill="none"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      cx="106.8"
                      cy="106.8"
                      r="103.3"
                    ></circle>
                  </svg>
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
