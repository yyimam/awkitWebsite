import React, { Component, Fragment } from 'react';
import './submit.css';
// import './Stylefooter.css';s

class SubmitRestaurant extends Component {
    render() {
        return (
            <div>
                <div className="hero_single inner_pages background-image bannerimg" >
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

                <div className="container margin_30_20">
                    <div className="main_title center">
                        <span><em></em></span>
                        <h2>Why Submit to Awkit</h2>
                        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    </div>

                    <div className="row justify-content-center align-items-center add_bottom_15">
                        <div className="col-lg-6">
                            <div className="box_about">
                                <h3>Boost your Bookings</h3>
                                <p className="lead">Est falli invenire interpretaris id, magna libris sensibus mel id.</p>
                                <p>Per eu nostrud feugiat. Et quo molestiae persecuti neglegentur. At zril definitionem mei, vel ei choro volumus. An tota nulla soluta has, ei nec essent audiam, te nisl dignissim vel. Ex velit audire perfecto pro, ei mei doming vivendo legendos. Cu sit magna zril, an odio delectus constituto vis. Vis ludus omnesque ne, est veri quaeque ad.</p>
                                <img src="img/arrow_about.png" alt="" className="arrow_1" />
                            </div>
                        </div>
                        <div className="col-lg-6 text-center d-none d-lg-block">
                            <img src="img/about_1.svg" alt="" className="img-fluid" width="250" height="250" />
                        </div>
                    </div>
                    {/* <!-- /row --> */}
                    <div className="row justify-content-center align-items-center add_bottom_15">
                        <div className="col-lg-6 text-center d-none d-lg-block">
                            <img src="img/about_2.svg" alt="" className="img-fluid" width="250" height="250" />
                        </div>
                        <div className="col-lg-6">
                            <div className="box_about">
                                <h3>Manage Easly</h3>
                                <p className="lead">Est falli invenire interpretaris id, magna libris sensibus mel id.</p>
                                <p>Per eu nostrud feugiat. Et quo molestiae persecuti neglegentur. At zril definitionem mei, vel ei choro volumus. An tota nulla soluta has, ei nec essent audiam, te nisl dignissim vel. Ex velit audire perfecto pro, ei mei doming vivendo legendos. Cu sit magna zril, an odio delectus constituto vis. Vis ludus omnesque ne, est veri quaeque ad.</p>
                                <img src="img/arrow_about.png" alt="" className="arrow_2" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- /row --> */}
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <div className="box_about">
                                <h3>Reach New Customers</h3>
                                <p className="lead">Est falli invenire interpretaris id, magna libris sensibus mel id.</p>
                                <p>Per eu nostrud feugiat. Et quo molestiae persecuti neglegentur. At zril definitionem mei, vel ei choro volumus. An tota nulla soluta has, ei nec essent audiam, te nisl dignissim vel. Ex velit audire perfecto pro, ei mei doming vivendo legendos. Cu sit magna zril, an odio delectus constituto vis. Vis ludus omnesque ne, est veri quaeque ad.</p>
                            </div>

                        </div>
                        <div className="col-lg-6 text-center d-none d-lg-block">
                            <img src="img/about_3.svg" alt="" className="img-fluid" width="250" height="250" />
                        </div>
                    </div>
                    {/* <!-- /row --> */}
                </div>
                {/* <!-- /container --> */}




                <div className="bg_gray">
                    <div className="container margin_60_40">
                        <div className="main_title center">
                            <span><em></em></span>
                            <h2>Our Pricing Plans</h2>
                            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                        </div>
                        <div className="row plans">
                            <div className="plan col-md-4">
                                <div className="plan-title">
                                    <h3>1 Month</h3>
                                    <p>Free of charge one standard listing</p>
                                </div>
                                <p className="plan-price">Free</p>
                                <ul className="plan-features">
                                    <li><strong>Check and go</strong> included</li>
                                    <li><strong>1 month</strong> valid</li>
                                    <li><strong>Unsubscribe</strong> anytime</li>
                                </ul>
                                <a href="#submit" className="btn_1 gray btn_scroll">Submit</a>
                            </div>
                            {/* <!-- End col-md-4 --> */}

                            <div className="plan plan-tall col-md-4">
                                <div className="plan-title">
                                    <h3>6 Months</h3>
                                    <p>One time fee for one listing, highlighted in search results</p>
                                </div>
                                <p className="plan-price">$199</p>
                                <ul className="plan-features">
                                    <li><strong>Premium</strong> support</li>
                                    <li><strong>Check and go</strong> included</li>
                                    <li><strong>APP</strong> included</li>
                                    <li><strong>6 months</strong> valid</li>
                                    <li><strong>Unsubscribe</strong> anytime</li>
                                </ul>
                                <a href="#submit" className="btn_1 gradient btn_scroll">Submit</a>
                            </div>
                            {/* <!-- End col-md-4 --> */}

                            <div className="plan col-md-4">
                                <div className="plan-title">
                                    <h3>12 Months</h3>
                                    <p>Monthly subscription for unlimited listings</p>
                                </div>
                                <p className="plan-price">$299</p>
                                <ul className="plan-features">
                                    <li><strong>Premium</strong> support</li>
                                    <li><strong>Check and go</strong> included</li>
                                    <li><strong>12 months</strong> valid</li>
                                    <li><strong>Unsubscribe</strong> anytime</li>
                                </ul>
                                <a href="#submit" className="btn_1 gray btn_scroll">Submit</a>
                            </div>
                            {/* <!-- End col-md-4 --> */}
                        </div>
                        {/* <!-- End row plans--> */}
                    </div>
                    {/* <!-- /container --> */}
                </div>

                <div className="container margin_60_20" id="submit">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="text-center add_bottom_15">
                                <h4>Please fill the form below</h4>
                                <p>Id persius indoctum sed, audiam verear his in, te eum quot comprehensam. Sed impetus vocibus repudiare et.</p>
                            </div>
                            <div id="message-register"></div>
                            <form method="post" action="assets/register.php" id="register">
                                <h6>Personal data</h6>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name and Last Name" name="name_register" id="name_register" />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /row --> */}
                                <div className="row add_bottom_15">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email Address" name="email_register" id="email_register" />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /row --> */}
                                <h6>Restaurant data</h6>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Restaurant Name" name="restaurantname_register" id="restaurantname_register" />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /row --> */}
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Address" name="address_register" id="address_register" />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /row --> */}
                                <div className="row add_bottom_15">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="City" name="city_register" id="city_register" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <div className="custom_select submit">
                                                <select name="country_register" id="country_register" className="form-control wide">
                                                    <option value="">Country</option>
                                                    <option value="Europe">Europe</option>
                                                    <option value="Asia">Asia</option>
                                                    <option value="Unated States">Unated States</option>
                                                    <option value="Oceania">Oceania</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /row --> */}
                                <h6>I am not a robot</h6>
                                <div className="row add_bottom_25">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" id="verify_register" className="form-control" placeholder="Human verify: 3 + 1 =?" />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /row --> */}
                                <div className="form-group text-center"><input type="submit" className="btn_1 gradient" value="Submit" id="submit-register" /></div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <!-- /container --> */}
                {/* </div> */}
                
            </div>

            // <!-- /main -->

        )
    }
}
export default SubmitRestaurant;
