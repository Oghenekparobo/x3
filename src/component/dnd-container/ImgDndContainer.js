import React, { useState, useEffect } from "react";
import { ListManager } from "react-beautiful-dnd-grid";
import "./styles.css";
import Img from "../img-container/Img";
import { sortList, unsplashImages } from "../../utils/data";
import { useNavigate } from "react-router";
import Header from "../header/Header";

function ImgDndContainer() {
  const [imageSort, setImageSort] = useState(sortList(unsplashImages));
  const [searchInput, setSearchInput] = useState("");
  const [filteredImages, setFilteredImages] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (searchInput === "") {
      setFilteredImages(imageSort);
    } else {
      const filtered = imageSort.filter((image) =>
        image.id.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredImages(filtered);
    }
  }, [imageSort, searchInput]);

  useEffect(() => {
    setImageSort(sortList(unsplashImages));
  }, []);

  const reorderList = (sourceIndex, destinationIndex) => {
    if (destinationIndex === sourceIndex) {
      return;
    }

    const list = [...imageSort];
    if (destinationIndex === 0) {
      list[sourceIndex].order = list[0].order - 1;
    } else if (destinationIndex === list.length - 1) {
      list[sourceIndex].order = list[list.length - 1].order + 1;
    } else if (destinationIndex < sourceIndex) {
      list[sourceIndex].order =
        (list[destinationIndex].order + list[destinationIndex - 1].order) / 2;
    } else {
      list[sourceIndex].order =
        (list[destinationIndex].order + list[destinationIndex + 1].order) / 2;
    }

    setImageSort(sortList(list));
  };

  // Determine maxItems based on screen width
  let maxItems;
  if (window.innerWidth > 1024) {
    maxItems = 3;
  } else if (window.innerWidth <= 390) {
    maxItems = 1;
  } else if (window.innerWidth <= 412) {
    maxItems = 1;
  } else if (window.innerWidth <= 915) {
    maxItems = 2;
  } else {
    maxItems = 1;
  }

  const handleSignOut = () => {
    navigate("/logout");
  };

  return (
    <div className="container">
      <Header handleSignOut={handleSignOut} />

      <div className="dnd-component">
        <div className="cardGrid">
          <div className="search-bar">
            <input
              className="search-input"
              type="text"
              placeholder="Search by tag (e.g. unsplash-1)"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          {filteredImages.length === 0 ? (
            <div className="no-images-found">No images found</div>
          ) : (
            <ListManager
              items={filteredImages}
              direction="horizontal"
              maxItems={maxItems}
              render={(images) => <Img image={images} />}
              onDragEnd={reorderList}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ImgDndContainer;
