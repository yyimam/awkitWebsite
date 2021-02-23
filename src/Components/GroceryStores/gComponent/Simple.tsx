import React from "react";
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import Img1 from "../../../img/Carousel-images/Grocery Store/img1.png";
import Img2 from "../../../img/Carousel-images/Grocery Store/img2.jpg";
import Img3 from "../../../img/Carousel-images/Grocery Store/img3.png";
import Img4 from "../../../img/Carousel-images/Grocery Store/img4.png";
import Img5 from "../../../img/Carousel-images/Grocery Store/img5.png";
import Img6 from "../../../img/Carousel-images/Grocery Store/img6.png";
import Img7 from "../../../img/Carousel-images/Grocery Store/img7.png";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
const images = [
  Img1, Img2, Img3, Img4, Img5, Img6, Img7
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >
      {images.slice(0, 5).map(image => {
        return (
          <Image
            draggable={false}
            style={{ width: "100%", height: "100%" }}
            src={image}
          />
        );
      })}
    </Carousel>
  );
};

export default Simple;
