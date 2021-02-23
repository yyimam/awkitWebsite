import React, { Component, useState } from "react";
// import Carousel from 'react-bootstrap/Carousel';
import Carousel from 'react-multi-carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";

import "../css/style.css";

import Burger from "../img/Carousel-images/burger-img.jpg";
import Pizza from "../img/Carousel-images/pizza.jpg";
import Japanese from "../img/Carousel-images/japanese.jpg";
import Vegi from "../img/Carousel-images/vegi.jpg";
import Bakery from "../img/Carousel-images/bakery.jpg";
import Chinese from "../img/Carousel-images/chinese.jpg";
import Mexican from "../img/Carousel-images/mexican.jpg";
import { Link } from "react-router-dom";





class Slider extends Component {



    render() {
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
        };
        // const [activeItemIndex, setActiveItemIndex] = useState(0);
        const chevronWidth = 40;
        return (

            <div className="container margin_30_60">
                <div className="main_title center">
                    <span><em></em></span>
                    <h2>Popular Categories</h2>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
                </div>
                 {/* <!-- /main_title --> */}

                <Carousel responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px">


                    {/* <div className="owl-carousel owl-theme categories_carousel"> */}
                    <div className="item_version_2">
                        {/* <a href="grid-listing-filterscol.html"> */}
                        <Link to="/DetailPage2">
                            <figure>
                                <span>98</span>
                                <img src={Pizza} data-src={Pizza} alt="" className="owl-lazy" width="350" height="450"/>
                                <div className="info">
                                    <h3>Pizza</h3>
                                    <small>Avg price $40</small>
                                </div>
                            </figure>
                        {/* </a> */}
                        </Link>
                    </div>
                    <div className="item_version_2">
                        {/* <a href="grid-listing-filterscol.html"> */}
                        <Link to="/DetailPage2">
                            <figure>
                                <span>87</span>
                                <img src={Japanese}  data-src={Japanese} alt="" className="owl-lazy" width="350" height="450" />
                                <div className="info">
                                    <h3>Japanese</h3>
                                    <small>Avg price $50</small>
                                </div>
                            </figure>
                        {/* </a> */}
                        </Link>
                    </div>
                    <div className="item_version_2">
                        {/* <a href="grid-listing-filterscol.html"> */}
                        <Link to="/DetailPage2">

                            <figure>
                                <span>55</span>
                                <img src={Burger} data-src={Burger} alt="" className="owl-lazy" width="350" height="450" />
                                <div className="info">
                                    <h3>Burghers</h3>
                                    <small>Avg price $55</small>
                                </div>
                            </figure>
                        {/* </a> */}
                        </Link>
                    </div>
                    <div className="item_version_2">
                        {/* <a href="grid-listing-filterscol.html"> */}
                        <Link to="/DetailPage2">
                            <figure>
                                <span>55</span>
                                <img src={Vegi} data-src={Vegi} alt="" className="owl-lazy" width="350" height="450" />
                                <div className="info">
                                    <h3>Vegetarian</h3>
                                    <small>Avg price $40</small>
                                </div>
                            </figure>
                        {/* </a> */}
                        </Link>
                    </div>
                    <div className="item_version_2">
                        {/* <a href="grid-listing-filterscol.html"> */}
                        <Link to="/DetailPage2">
                            <figure>
                                <span>65</span>
                                <img src={Bakery} data-src={Bakery} alt="" className="owl-lazy" width="350" height="450" />
                                <div className="info">
                                    <h3>Bakery</h3>
                                    <small>Avg price $60</small>
                                </div>
                            </figure>
                        {/* </a> */}
                        </Link>
                    </div>
                    <div className="item_version_2">
                        {/* <a href="grid-listing-filterscol.html"> */}
                        <Link to="/DetailPage2">
                            <figure>
                                <span>25</span>
                                <img src={Chinese} data-src={Chinese} alt="" className="owl-lazy" width="350" height="450" />
                                <div className="info">
                                    <h3>Chinese</h3>
                                    <small>Avg price $40</small>
                                </div>
                            </figure>
                        {/* </a> */}
                        </Link>
                    </div>
                    <div className="item_version_2">
                        {/* <a href="grid-listing-filterscol.html"> */}
                        <Link to="/DetailPage2">
                            <figure>
                                <span>35</span>
                                <img src={Mexican} data-src={Mexican} alt="" className="owl-lazy" width="350" height="450" />
                                <div className="info">
                                    <h3>Mexican</h3>
                                    <small>Avg price $35</small>
                                </div>
                            </figure>
                        {/* </a> */}
                        </Link>
                    </div>
                    {/* </div> */}
                </Carousel>
            </div>

            /* <!-- /container  */



        )
    }
}

export default Slider;