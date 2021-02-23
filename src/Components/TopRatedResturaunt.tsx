import React, {Component } from 'react';
import ItalianImg from "../img/home-small-img/italian-small-img.png";
import MexicanImg from "../img/home-small-img/mexican-small-img.png";
import JapaneseImg from "../img/home-small-img/japanese-small-img.png";
import VegiImg from "../img/home-small-img/vegi-small-img.png";
import ChineseImg from "../img/home-small-img/chinese-small-img.png";
import ItalianPizza from "../img/home-small-img/pizza-small-image.png";
import FastDeliveryBanner from "../../src/img/Carousel-images/fast-delivery-banner.png";
import { Link } from 'react-router-dom';


class TopRatedRestaurant extends Component{
    render(){
        
        return(
            <div className="bg_gray">
            <div className="container margin_60_40">
                <div className="main_title">
                    <span><em></em></span>
                    <h2>Top Rated Restaurants</h2>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    <a href="#0">View All &rarr;</a>
                </div>
                <div className="row add_bottom_25">
                    <div className="col-lg-6">
                        <div className="list_home">
                            <ul>
                                <li>
                                    {/* <a href="detail-restaurant.html"> */}
                                    <Link to="/DetailPage2">

                                        <figure>
                                            <img src={ItalianImg} data-src={ItalianImg} alt="" className="lazy" width="350" height="233"/>
                                        </figure>
                                        <div className="score"><strong>9.5</strong></div>
                                        <em>Italian</em>
                                        <h3>La Monnalisa</h3>
                                        <small>8 Patriot Square E2 9NF</small>
                                        <ul>
                                            <li><span className="ribbon off">-30%</span></li>
                                            <li>Average price $35</li>
                                        </ul>
                                    {/* </a> */}
                                    </Link>
                                </li>
                                <li>
                                    {/* <a href="detail-restaurant.html"> */}
                                    <Link to="/DetailPage2">
                                        <figure>
                                            <img src={MexicanImg} data-src={MexicanImg} alt="" className="lazy" width="350" height="233"/>
                                        </figure>
                                        <div className="score"><strong>8.0</strong></div>
                                        <em>Mexican</em>
                                        <h3>Alliance</h3>
                                        <small>27 Old Gloucester St, 4563</small>
                                        <ul>
                                            <li><span className="ribbon off">-40%</span></li>
                                            <li>Average price $30</li>
                                        </ul>
                                    {/* </a> */}
                                    </Link>
                                </li>
                                <li>
                                    {/* <a href="detail-restaurant.html"> */}
                                    <Link to="/DetailPage2">
                                        <figure>
                                            <img src={JapaneseImg} data-src={JapaneseImg} alt="" className="lazy" width="350" height="233"/>
                                        </figure>
                                        <div className="score"><strong>9.0</strong></div>
                                        <em>Sushi - Japanese</em>
                                        <h3>Sushi Gold</h3>
                                        <small>Old Shire Ln EN9 3RX</small>
                                        <ul>
                                            <li><span className="ribbon off">-25%</span></li>
                                            <li>Average price $20</li>
                                        </ul>
                                    {/* </a> */}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="list_home">
                            <ul>
                                <li>
                                    {/* <a href="detail-restaurant.html"> */}
                                    <Link to="/DetailPage2">
                                        <figure>
                                            <img src={VegiImg} data-src={VegiImg} alt="" className="lazy" width="350" height="233"/>
                                        </figure>
                                        <div className="score"><strong>9.5</strong></div>
                                        <em>Vegetarian</em>
                                        <h3>Mr. Pepper</h3>
                                        <small>27 Old Gloucester St, 4563</small>
                                        <ul>
                                            <li><span className="ribbon off">-30%</span></li>
                                            <li>Average price $20</li>
                                        </ul>
                                    {/* </a> */}
                                    </Link>
                                </li>
                                <li>
                                    {/* <a href="detail-restaurant.html"> */}
                                    <Link to="/DetailPage2">
                                        <figure>
                                            <img src={ChineseImg} data-src={ChineseImg} alt="" className="lazy" width="350" height="233"/> 
                                        </figure>
                                        <div className="score"><strong>8.0</strong></div>
                                        <em>Chinese</em>
                                        <h3>Dragon Tower</h3>
                                        <small>22 Hertsmere Rd E14 4ED</small>
                                        <ul>
                                            <li><span className="ribbon off">-50%</span></li>
                                            <li>Average price $35</li>
                                        </ul>
                                    {/* </a> */}
                                    </Link>
                                </li>
                                <li>
                                    {/* <a href="detail-restaurant.html"> */}
                                    <Link to="/DetailPage2">
                                        <figure>
                                            <img src={ItalianPizza} data-src={ItalianPizza} alt="" className="lazy" width="350" height="233"/> {/*img/location_list_6.jpg */}
                                        </figure>
                                        <div className="score"><strong>8.5</strong></div>
                                        <em>Pizza - Italian</em>
                                        <h3>Bella Napoli</h3>
                                        <small>135 Newtownards Road BT4</small>
                                        <ul>
                                            <li><span className="ribbon off">-45%</span></li>
                                            <li>Average price $25</li>
                                        </ul>
                                    {/* </a> */}
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- /row --> */}
                {/* <div className="banner lazy" data-bg="url(img/banner_bg_desktop.jpg)"> */}
                <div className="banner lazy">
                    <div className="wrapper d-flex align-items-center opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.3)">
                        <div>
                            <small>FooYes Delivery</small>
                            <h3>We Deliver to your Office</h3>
                            <p>Enjoy a tasty food in minutes!</p>
                            <Link to="/DetailPage2"className="btn_1 gradient">Start Now!</Link>
                        </div>
                    </div>
                    {/* <!-- /wrapper --> */}
                </div>
                {/* <!-- /banner --> */}
            </div>
        </div>
        // {/* <!-- /bg_gray -->         */}
        );
    }
} 
export default TopRatedRestaurant;