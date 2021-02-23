import { log } from "console";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { store } from "../store";


function OrderSum (props) {
    // console.log("cartModel", store.getState())

    const handleClick = () => {
		$(".btn_reserve_fixed").on("click", function () {
			$(".list_menu").css("display", "none");
            $(".mobile_fixed").css(" display", "inline-block");
            $(".box_order").css("display", "inline-block");

        $(".close_panel_mobile").on("click", function(){
            $(".list_menu").css("display", "");
            $(".mobile_fixed").css(" display", "none");
            $(".box_order").css("display", "none");
        })
        })
        

	}
    
        return (
            <div className="col-lg-4 sidebar" id="sidebar_fixed">
                <div className="box_order mobile_fixed">
                    <div className="head">
                        <h3>Order Summary</h3>
                        <a href="#0" className="close_panel_mobile" onClick={()=>handleClick}><i className="icon_close"></i></a>
                    </div>
                    {/* <!-- /head --> */}
                    <div className="main">
                        <ul className="clearfix">
                            <li><a href="#0">1x Enchiladas</a><span>$11</span></li>
                            <li><a href="#0">2x Burrito</a><span>$14</span></li>
                            <li><a href="#0">1x Chicken</a><span>$18</span></li>
                            <li><a href="#0">2x Corona Beer</a><span>$9</span></li>
                            <li><a href="#0">2x Cheese Cake</a><span>$11</span></li>
                        </ul>
                        <ul className="clearfix">
                            <li>Subtotal<span>$56</span></li>
                            <li>Delivery fee<span>$10</span></li>
                            <li className="total">Total<span>$66</span></li>
                        </ul>
                        <div className="row opt_order">
                            <div className="col-6">
                                <label className="container_radio">Delivery
                                <input type="radio" value="option1" name="opt_order" checked />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="col-6">
                                <label className="container_radio">Take away
                                <input type="radio" value="option1" name="opt_order" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className="dropdown day">
                            <a href="#" data-toggle="dropdown">Day <span id="selected_day"></span></a>
                            <div className="dropdown-menu">
                                <div className="dropdown-menu-content">
                                    <h4>Which day delivered?</h4>
                                    <div className="radio_select chose_day">
                                        <ul>
                                            <li>
                                                <input type="radio" id="day_1" name="day" value="Today" />
                                                <label htmlFor="day_1">Today<em>-40%</em></label>
                                            </li>
                                            <li>
                                                <input type="radio" id="day_2" name="day" value="Tomorrow" />
                                                <label htmlFor="day_2">Tomorrow<em>-40%</em></label>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- /people_select --> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- /dropdown --> */}
                        <div className="dropdown time">
                            <a href="#" data-toggle="dropdown">Time <span id="selected_time"></span></a>
                            <div className="dropdown-menu">
                                <div className="dropdown-menu-content">
                                    <h4>Lunch</h4>
                                    <div className="radio_select add_bottom_15">
                                        <ul>
                                            <li>
                                                <input type="radio" id="time_1" name="time" value="12.00am" />
                                                <label htmlFor="time_1">12.00<em>-40%</em></label>
                                            </li>
                                            <li>
                                                <input type="radio" id="time_2" name="time" value="08.30pm" />
                                                <label htmlFor="time_2">12.30<em>-40%</em></label>
                                            </li>
                                            <li>
                                                <input type="radio" id="time_3" name="time" value="09.00pm" />
                                                <label htmlFor="time_3">1.00<em>-40%</em></label>
                                            </li>
                                            <li>
                                                <input type="radio" id="time_4" name="time" value="09.30pm" />
                                                <label htmlFor="time_4">1.30<em>-40%</em></label>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- /time_select --> */}
                                    <h4>Dinner</h4>
                                    <div className="radio_select">
                                        <ul>
                                            <li>
                                                <input type="radio" id="time_5" name="time" value="08.00pm" />
                                                <label htmlFor={"time_1"}>20.00<em>-40%</em></label>
                                            </li>
                                            <li>
                                                <input type="radio" id="time_6" name="time" value="08.30pm" />
                                                <label htmlFor="time_2">20.30<em>-40%</em></label>
                                            </li>
                                            <li>
                                                <input type="radio" id="time_7" name="time" value="09.00pm" />
                                                <label htmlFor="time_3">21.00<em>-40%</em></label>
                                            </li>
                                            <li>
                                                <input type="radio" id="time_8" name="time" value="09.30pm" />
                                                <label htmlFor="time_4">21.30<em>-40%</em></label>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- /time_select --> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- /dropdown --> */}
                        <div className="btn_1_mobile">
                        <Link to="/DetailPage2"className="btn_1 gradient full-width mb_5">Order Now</Link>
                            <div className="text-center"><small>No money charged on this steps</small></div>
                        </div>
                    </div>
                </div>
                {/* <!-- /box_order --> */}
                <div className="btn_reserve_fixed"><a href="#0" className="btn_1 gradient full-width" onClick={()=>handleClick}>View Basket</a></div>
            </div>

        );
    }


export default OrderSum;