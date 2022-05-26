import React from "react";
import MyNavbar from "../components/MyNavbar";
import Title from "../components/Title";
import Image from "next/image";
import MiniMarketPoster from "../styles/photos/journalPhotos/minimarket.png";
import PhotoCarousel from "../components/PhotoCarousel";

const journal = () => {
  return (
    <>
      <MyNavbar />
      <Title />
      <div className="p-4 mx-auto">
        <iframe
          className="mx-auto"
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/rC0nPFaCwFM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <PhotoCarousel />
    </>
  );
};

export default journal;
