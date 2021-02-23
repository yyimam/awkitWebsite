import React, { Component } from "react"
import { Link } from "react-router-dom";
import "../css/style.css";

class HomeOnlineBanner extends Component {
    render() {
        return (
            <section className="section">
                <div className="parentContainer">
                    <div className="HeightContainer">
                        <div className="rowContainers">
                            <nav className="nav1 Navcontainer">
                                <h4>
                                    Delivery
                                </h4>
                                <h1>
                                    Choose what<br />
                                    you want, select<br />
                                    a pick up time
                                </h1>
                                <p>As well known and we are very busy all days advice<br />
                                 you. advice you to call us of before arriving, so we<br />
                                 can guarantee your seat.
                                </p>
                                <button className="btn_1 medium gradient pulse_bt mt-2">
                                    ORDER NOW</button>
                            </nav>
                            <nav className="nav2 Navcontainer">
                            <img className="elementskit-parallax-graphic " src="http://demo.themewinter.com/wp/gloreya/wpcafe-theme/wp-content/uploads/sites/3/2019/10/delivery_bike-min.png" width="200" height="200"/>
                            </nav>
                            <nav className="nav3 Navcontainer">
                                <h4>
                                    Reward
                                </h4>
                                <h1>
                                    Earn points<br />
                                    every time you<br />
                                    order online
                                </h1>
                                <p>As well known and we are very busy all days advice you.<br />
                                advice you to call us of before arriving, so we can<br />
                                guarantee your seat advice.
                                </p>
                                <button className="btn_1 medium gradient pulse_bt mt-2">
                                        LEARN MORE
                                </button>
                            </nav>
                            <nav className="burgerImgNav">
                                <img src="http://demo.themewinter.com/wp/gloreya/wpcafe-theme/wp-content/uploads/sites/3/2019/10/delivery_image-min.png" height="300"/>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HomeOnlineBanner;

