import React, { useEffect, useState } from "react";
import ImgDndContainer from "../component/dnd-container/ImgDndContainer";
import Empty from "../component/Empty";
import { getTokenFunc } from "../utils/auth";
import Loading from "../component/loading/Loading";

const CardGallery = () => {
  const { token, loginState } = getTokenFunc();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, loginState]);

  return (
    <>
      {isLoading ? (
        <div>
          <Loading />/
        </div>
      ) : loginState && token ? (
        <ImgDndContainer />
      ) : (
        <Empty />
      )}
    </>
  );
};

export default CardGallery;
