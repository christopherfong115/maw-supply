import React from "react";
import { Carousel } from "react-bootstrap";
import {
  j1,
  j2,
  j3,
  j4,
  j5,
  j6,
  j7,
  j8,
  j9,
  j10,
  j11,
  j12,
  j13,
  j14,
  j15,
  j16,
  j17,
  j18,
  j19,
  j20,
  j21,
  j22,
  j23,
  j24,
} from "./PhotosExport";

const photoSources = [
  "j1",
  "j2",
  "j3",
  "j4",
  "j5",
  "j6",
  "j7",
  "j8",
  "j9",
  "j10",
  "j11",
  "j12",
  "j13",
  "j14",
  "j15",
  "j16",
  "j17",
  "j18",
  "j19",
  "j20",
  "j21",
  "j22",
  "j23",
  "j24",
];

const PhotoCarousel = () => {
  return (
    <Carousel>
      {photoSources.map((photo) => {
        return (
          <Carousel.Item interval={1500}>
            <img className="w-full" src={photo} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default PhotoCarousel;
