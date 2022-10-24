import React from "react";
import ReactPlayer from "react-player";
import Modal from "react-modal";
import { Close } from "./common/SVGIcons";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const VideoModal = ({ videoLink, modalIsOpen, closeModal }) => {
  return (
    <div>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <div className="flex justify-end mb-5">
          <button onClick={closeModal}>
            <Close />
          </button>
        </div>
        <ReactPlayer url={videoLink} />
      </Modal>
    </div>
  );
};

export default VideoModal;
