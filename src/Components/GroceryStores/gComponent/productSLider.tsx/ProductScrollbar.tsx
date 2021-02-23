import React from "react";
import Carousel from "react-multi-carousel";
import "./WithScrollbar.css";
import Img1 from "../../../../img/Carousel-images/Grocery Store/img1.png";
// import Img2 from "../../../../img/Carousel-images/Grocery Store/img2.jpg";
// import Img3 from "../../../../img/Carousel-images/Grocery Store/img3.png";
// import Img4 from "../../../../img/Carousel-images/Grocery Store/img4.png";
// import Img5 from "../../../../img/Carousel-images/Grocery Store/img5.png";
// import Img6 from "../../../../img/Carousel-images/Grocery Store/img6.png";
// import Img7 from "../../../../img/Carousel-images/Grocery Store/img7.png";
// import Img8 from "../../../../img/Carousel-images/Grocery Store/img8.png";
// import Img9 from "../../../../img/Carousel-images/Grocery Store/img9.png";
// import Img10 from "../../../../img/Carousel-images/Grocery Store/img10.png";
// import Img11 from "../../../../img/Carousel-images/Grocery Store/img11.png";
// import Img12 from "../../../../img/Carousel-images/Grocery Store/img12.png";
// import Img13 from "../../../../img/Carousel-images/Grocery Store/img13.png";
// import Img14 from "../../../../img/Carousel-images/Grocery Store/img14.png";
// import Img15 from "../../../../img/Carousel-images/Grocery Store/img15.png";
import Products from "./products.json";
import { Link } from "react-router-dom";
const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 1000 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 800, min: 500 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 499, min: 0 },
    items: 1
  }
};

class WithScrollbar extends React.Component {
  state = { additionalTransfrom: 0 };
  Carousel: any;
  detail = Products.vegi;


  render() {
    // const CustomSlider = ({ carouselState }) => {
    //   let value = 0;
    //   let carouselItemWidth = 0;
    //   if (this.Carousel) {
    //     carouselItemWidth = this.Carousel.state.itemWidth;
    //     const maxTranslateX = Math.round(
    //       // so that we don't over-slide
    //       carouselItemWidth *
    //         (this.Carousel.state.totalItems -
    //           this.Carousel.state.slidesToShow) +
    //         150
    //     );
    //     value = maxTranslateX / 100; // calculate the unit of transform for the slider
    //   }
    //   const { transform } = carouselState;
    //   return (
    //     <div className="custom-slider">
    //       <input
    //         type="range"
    //         value={Math.round(Math.abs(transform) / value)}
    //         defaultValue={0}
    //         max={
    //           (carouselItemWidth *
    //             (carouselState.totalItems - carouselState.slidesToShow) +
    //             (this.state.additionalTransfrom === 150 ? 0 : 150)) /
    //           value
    //         }
    //         onChange={(e:any) => {
    //           if (this.Carousel.isAnimationAllowed) {
    //             this.Carousel.isAnimationAllowed = false;
    //           }
    //           const nextTransform = e.target.value * value;
    //           const nextSlide = Math.round(nextTransform / carouselItemWidth);
    //           if (
    //             e.target.value == 0 &&
    //             this.state.additionalTransfrom === 150
    //           ) {
    //             this.Carousel.isAnimationAllowed = true;
    //             this.setState({ additionalTransfrom: 0 });
    //           }
    //           this.Carousel.setState({
    //             transform: -nextTransform, // padding 20px and 5 items.
    //             currentSlide: nextSlide
    //           });
    //         }}
    //         className="custom-slider__input"
    //       />
    //     </div>
    //   );
    // };
    console.log("adbkcadkc", Products)
    return (
      <Carousel
        className="carouselGrocery carouMainTag"
        ssr={false}
        // ref={el => (this.Carousel = el)}
        partialVisbile={false}
        // customButtonGroup={<CustomSlider carouselState />}
        itemClass="slider-image-item"
        responsive={responsive}
        containerClass="carousel-container-with-scrollbar"
        additionalTransfrom={-this.state.additionalTransfrom}
      // beforeChange={nextSlide => {
      //   if (nextSlide !== 0 && this.state.additionalTransfrom !== 150) {
      //     this.setState({ additionalTransfrom: 150 });
      //   }
      //   if (nextSlide === 0 && this.state.additionalTransfrom === 150) {
      //     this.setState({ additionalTransfrom: 0 });
      //   }
      // }}

      >
        {this.detail.map((res) => {
          <div className="image-container increase-size productCard" style={{ width: "50%", height: "50%", textAlign: "center", background: "white", borderRadius: "5px", position: "relative", paddingTop: "10%" }}>
            <Link to="/GStore">
              <img
                draggable={false}
                // style={{ width: "50%", height: "50%", cursor: "pointer" }}
                src={Img1}
                width="100"
                height="100"
              />
            </Link>
            <div className="image-container-text">
              <h4>{res.name}</h4>
              <h5>{res.price}</h5>
            </div>
          </div>
        }
        )
        }

        {/* <div className="increase-size productCard">
          <div className="image-container-text ">
          </div>
          <Link to="/GStore">
          <img
            draggable={false}
            src={Img2}
            width= "100"
            height="100"
          />
          </Link>
        </div> */}


      </Carousel>
    );
  }
}

export default WithScrollbar;
