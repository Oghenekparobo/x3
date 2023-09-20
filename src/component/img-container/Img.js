import React, { useState } from "react";
import "./img.css";

const Img = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTagClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={"card"} onClick={handleTagClick}>
        <img className={"cardImage"} src={image.url} alt={image.caption} />
        <div className="tag">{image.id}</div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={handleCloseModal}>
              &times;
            </span>
            <img className="modalImage" src={image.url} alt={image.caption} />
          </div>
        </div>
      )}
    </>
  );
};

export default Img;
