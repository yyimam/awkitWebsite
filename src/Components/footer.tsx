import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
                <footer>
            <div>
                    <div className="wave footer"></div>
                    <div className="container margin_60_40 fix_mobile">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <h3 data-target="#collapse_1">Quick Links</h3>
                                <div className="collapse dont-collapse-sm links" id="collapse_1">
                                    <ul>
                                        <li><a>About us</a></li>
                                        <li><a>Add your restaurant</a></li>
                                        <li><a>Help</a></li>
                                        <li><a>My account</a></li>
                                        <li><a>Blog</a></li>
                                        <li><a>Contacts</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h3 data-target="#collapse_2">Categories</h3>
                                <div className="collapse dont-collapse-sm links" id="collapse_2">
                                    <ul>
                                        <li><a>Top Categories</a></li>
                                        <li><a>Best Rated</a></li>
                                        <li><a>Best Price</a></li>
                                        <li><a>Latest Submissions</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h3 data-target="#collapse_3">Contacts</h3>
                                <div className="collapse dont-collapse-sm contacts" id="collapse_3">
                                    <ul>
                                        <li><i className="icon_house_alt"></i>12345 demo st.<br/> 678 Los Angeles - US</li>
                                        <li><i className="icon_mobile"></i>+88 888-88-8888</li>
                                        <li><i className="icon_mail_alt"></i><a>info@domain.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h3 data-target="#collapse_4">Keep in touch</h3>
                                <div className="collapse dont-collapse-sm" id="collapse_4">
                                    <div id="newsletter">
                                        <div id="message-newsletter"></div>
                                        <form method="post" action="assets/newsletter.php" name="newsletter_form" id="newsletter_form">
                                            <div className="form-group">
                                                <input type="email" name="email_newsletter" id="email_newsletter" className="form-control" placeholder="Your email" />
                                                <button type="submit" id="submit-newsletter"><i className="arrow_carrot-right"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="follow_us">
                                        <h5>Follow Us</h5>
                                        <ul>
                                            <li><a><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/twitter_icon.svg" alt="" className="lazy" /></a></li>
                                            <li><a><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/facebook_icon.svg" alt="" className="lazy" /></a></li>
                                            <li><a><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/instagram_icon.svg" alt="" className="lazy" /></a></li>
                                            <li><a><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/youtube_icon.svg" alt="" className="lazy" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /row--> */}
                        {/* <hr/> */}
                        <div className="row add_bottom_25">
                            <div className="col-lg-6">
                                <ul className="footer-selector clearfix">
                                    <li>
                                        <div className="styled-select lang-selector">
                                            <select>
                                                <option value="English" selected>English</option>
                                                <option value="French">French</option>
                                                <option value="Spanish">Spanish</option>
                                                <option value="Russian">Russian</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="styled-select currency-selector">
                                            <select>
                                                <option value="US Dollars" selected>US Dollars</option>
                                                <option value="Euro">Euro</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/cards_all.svg" alt="" width="230" height="35" className="lazy" /></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="additional_links">
                                    <li><a>Terms and conditions</a></li>
                                    <li><a>Privacy</a></li>
                                    <li><span>© Awkit</span></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!--/footer--> */}

                    </div>
            </div>
                </footer>
            // </div>
        )
    }
}

export default Footer;