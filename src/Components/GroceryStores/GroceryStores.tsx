import React, { Component, Fragment } from 'react';
// import './submit.css';
// import './Stylefooter.css';s
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import "./groceryStore.css";
import GroceryStoresCarousel from "./GroceryStoreCarousel";
import FoodIcon from "../../img/Carousel-images/Grocery Store/food-icon.png";
import { Link } from 'react-router-dom';




class GroceryStores extends Component {

    render() {
        return (
            <div>
                <div className="hero_single inner_pages background-image mainbanner">
                    <div className="opacity-mask forSubBanner">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">

                                    <h1>Attract New Customers</h1>
                                    <p>More bookings from diners around the corner</p>
                                    <a href="#submit" className="btn_1 gradient btn_scroll">Submit Now</a>
                                </div>
                            </div>
                            {/* <!-- /row --> */}
                        </div>
                    </div>
                    <div className="wave hero"></div>
                </div>
                {/* /* <!-- /hero_single -->/* */}
                <div className="parentOfCarousel" style={{ width: "95%", margin: "auto", overflow: "hidden" }}>
                    <GroceryStoresCarousel deviceType />
                </div>
                {/* </carousel> */}
                <div className="grocerySecondcontainer">
                    <div className="groceryfirstchild">
                        <div>
                            <div className="img-container">
                                <img src={FoodIcon} width="50" height="50" />
                            </div>
                            <div className="p-container">
                                <p>The products you love from your local stores</p>
                            </div>
                        </div>
                    </div>
                    <div className="groceryfirstchild">
                        <div>
                            <div className="img-container">
                                <img src={FoodIcon} width="50" height="50" />
                            </div>
                            <div className="p-container">
                                <p>Handpicked by shoppers based on your preferences</p>
                            </div>
                        </div>
                    </div>
                    <div className="groceryfirstchild">
                        <div>
                            <div className="img-container">
                                <img src={FoodIcon} width="50" height="50" />
                            </div>
                            <div className="p-container">
                                <p>Same-day delivery in as little as 1 hour</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*</grocerySecondcontainer> */}
                <div className="groceryThirdcontainer">
                    <div className="thirdConParent">
                        <div className="containerDescrip">
                            <h4 style={{ fontSize: "26px"}}>All time favourite</h4>
                            <p style={{    fontSize: "18px"}}>Here you get easily all grocery items by home delivery</p>
                            <Link to="/GroceryStores"><button className="btn_1 medium gradient pulse_bt mt-2">Start Shopping</button></Link>
                        </div>
                    </div>
                </div>
            </div>



            // <!-- /main -->

        )
    }
}
export default GroceryStores;
