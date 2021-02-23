import React, { Component } from "react";
import { Link } from "react-router-dom";
import How1 from "../../img/how_1.svg";
import How2 from "../../img/how_2.svg";
import How3 from "../../img/how_3.svg";


class HomeStartOrder extends Component {
    render() {
        return (
            <div className="shape_element_2">
                <div className="container margin_60_0">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="box_how">
                                        <figure><img src={How1} data-src="img/how_1.svg" alt="" width="150" height="167" className="lazy" /></figure>
                                        <h3>Easly Order</h3>
                                        <p>Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus sollicitudin.</p>
                                    </div>
                                    <div className="box_how">
                                        <figure><img src={How2} data-src="img/how_2.svg" alt="" width="130" height="145" className="lazy" /></figure>
                                        <h3>Quick Delivery</h3>
                                        <p>Maecenas pulvinar, risus in facilisis dignissim, quam nisi hendrerit nulla, id vestibulum.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                    <div className="box_how">
                                        <figure><img src={How3} data-src="img/how_3.svg" alt="" width="150" height="132" className="lazy" /></figure>
                                        <h3>Enjoy Food</h3>
                                        <p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center mt-3 d-block d-lg-none"><Link to="/DetailPage2"className="btn_1 medium gradient pulse_bt mt-2">Register Now!</Link></p>
                        </div>
                        <div className="col-lg-5 offset-lg-1 align-self-center">
                            <div className="intro_txt">
                                <div className="main_title">
                                    <span><em></em></span>
                                    <h2>Start Ordering Now</h2>
                                </div>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur deserunt.</p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <p><a href="#0" className="btn_1 medium gradient pulse_bt mt-2">Register</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default HomeStartOrder;