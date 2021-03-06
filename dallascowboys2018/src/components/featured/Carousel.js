import React from "react";
import Slider from "react-slick";

import cowboys4 from "../../resources/images/cowboys4.jpg";
import cowboys2 from "../../resources/images/cowboys2.jpg";
import cowboys3 from "../../resources/images/cowboys3.jpg";
import cowboys5 from "../../resources/images/cowboys5.jpg";
import cowboys7 from "../../resources/images/cowboys7.jpg";
import cowboys8 from "../../resources/images/cowboys8.jpg";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  };

  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${cowboys4})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${cowboys5})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${cowboys7})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${cowboys2})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${cowboys8})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${cowboys3})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
