import React, { useState, useEffect } from "react";
import { ListManager } from "react-beautiful-dnd-grid";
import "./styles.css";
import Img from "../img-container/Img";
import { sortList, unsplashImages } from "../../utils/data";
import { useNavigate } from "react-router";

function ImgDndContainer() {
  const [imageSort, setImageSort] = useState(sortList(unsplashImages));
  const navigate = useNavigate();

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
      <div className="dummy-nav">
        Image Gallery
        <button className="sign-out-button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
      <div className="dnd-component">
        <div className="cardGrid">
          <ListManager
            items={imageSort}
            direction="horizontal"
            maxItems={maxItems}
            render={(images) => <Img image={images} />}
            onDragEnd={reorderList}
          />
        </div>
      </div>
    </div>
  );
}

export default ImgDndContainer;
