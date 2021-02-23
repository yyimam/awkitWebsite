import { type } from "os";
import { Component } from "react";
import React from "react-router-dom";
import { Link } from "react-router-dom";
import { data } from "../../ListingMasonry/ItemsContainer";
import { store } from "../../store";
import MainLogo from "../../../img/Carousel-images/logo.png";


// import { createEventHandler } from "recompose";




class HeaderNav extends Component<any, any> {

    constructor(props: any) {

        super(props);
        this.state = {
            dClass: "header black_nav clearfix element_to_stick ",
            dcolor: "colorWhite",
            // navBCon: "container",
        };
    }

    handleChange = () => {
        this.setState({ dClass: "header header_in clearfix" });
        // console.log("state", this.state.dClass, store.getState().reducerItems["notFixedClass"])
        // componentWillMount(){
        //     
    }
    //show-submenu
    //containerWhite

    render() {
        // store.subscribe(this.handleChange)
        // console.log("data","");
        //    this.setState({"dClass" : });
        // const [dClass, setdClass] = useState("header black_nav clearfix element_to_stick ");
        return (
            <header className={this.state.dClass} style={{ background: "rgb(43, 43, 43)" }}>
                <div className="container">
                    <div id="logo">
                        <img src={MainLogo} width="60" height="42" />
                    </div>
                    <div className="layer"></div>{/*<!-- Opacity Mask Menu Mobile -->*/}
                    <ul id="top_menu">
                        <li><a href="#sign-in-dialog" id="sign-in" className="login"></a></li>
                        <li><a className="wishlist_bt_top" title="Your wishlist"></a></li>
                    </ul>
                    {/* <!-- /top_menu --> */}
                    <a href="#0" className="open_close menuCloser">
                        <i className="icon_menu" style={{ color: " white" }}></i><span>Menu</span>
                    </a>
                    <nav className="main-menu">
                        <div id="header_menu">
                            <a href="#0" className="open_close menuCloser">
                                <i className="icon_close"></i><span>Menu</span>
                            </a>
                            <Link to="/"><img src={MainLogo} width="105" height="70" /></Link>
                        </div>
                        <ul>
                            <li>
                                <Link to="/" className="colorWhite menuCloser" onClick={() => {
                                    this.setState({ dClass: " header black_nav clearfix element_to_stick" }); console.log(this.state.dClass);
                                }}>Home</Link>

                            </li>

                            <li className="submenu">
                                <Link to="" className="colorWhite show-submenu">Listing</Link>
                                <ul>
                                    <li className="third-level"><a href="#0">List pages</a>
                                        <ul>
                                            {/*onClick={() => {
                                                this.setState({ dClass: " header header_in clearfix" }); console.log(this.state.dClass);
                                            }} */}
                                            <li> <Link to={"/ListSideMap"} className="listMap menuCloser">List side map</Link> </li>
                                            <li>   <Link to={"/ListMasonry"} className="listfilter menuCloser" >List Masonry Filter</Link></li>

                                        </ul>
                                    </li>
                                    <li className="third-level"><Link to="">Detail pages</Link>
                                        <ul>

                                            <li><Link to="/DetailPage2" className="menuCloser" >Detail page 2</Link></li>
                                            {/* <li><Link to="/DetailPage3">Detail page 3</Link></li> */}
                                        </ul>
                                    </li>
                                    <li className="third-level"><Link to="">OpenStreetMap</Link>
                                        <ul>
                                            <li> <Link to={"/ListSideMap"} className="menuCloser">List side map</Link> </li>
                                            <li>  <Link to={"/ListMasonry"} className="menuCloser">List Masonry Filter</Link></li>
                                        </ul>
                                    </li>
                                    {/*onClick={() => {
                                        this.setState({ dcolor: "colorWhite show-submenu" }); console.log(this.state.dClass);
                                    }} */}
                                    <li><Link to={"/SubmitRestaurant"} className="menuCloser">Submit Restaurant</Link></li>
                                    {/*  onClick={() => {
                                        this.setState({ dClass: " header header_in clearfix" }); console.log(this.state.dcolor);
                                    }}*/}
                                    <li><Link to={"/SubmitRider"} className="menuCloser">Submit Rider</Link></li>
                                    {/*onClick={() => {
                                        this.setState({ dClass: " header header_in clearfix" }); console.log(this.state.dClass);
                                    }} */}
                                    <li><Link to={"/Order"} className="menuCloser">Order</Link></li>
                                    {/*onClick={() => {
                                        this.setState({ dClass: " header header_in clearfix" }); console.log(this.state.dClass);
                                    }} */}
                                    <li><Link to={"/ConfirmOrder"} className="menuCloser">Confirm Order</Link></li>
                                    {/*onClick={() => {
                                        this.setState({ dClass: " header header_in clearfix" }); console.log(this.state.dClass);
                                    }} */}
                                    <li><Link to="/OrderTracking" className="menuCloser">Order Tracking</Link></li>
                                    <li><Link to="/GroceryStores" className="menuCloser" >Grocery Stores</Link> </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <Link to="" className="colorWhite show-submenu">Other Pages</Link>
                                <ul className="show_normal">
                                    {/*onClick={() => {
                                        this.setState({ dClass: " header header_in clearfix" }); console.log(this.state.dClass);
                                    }} */}
                                    <li><Link to={"/SignUp"} className="menuCloser">Sign Up</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* <!-- Sign In Modal --> */}
                <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">
                    <div className="modal_header">
                        <h3>Sign In</h3>
                    </div>
                    <form>
                        <div className="sign-in-wrapper">
                            <a href="#0" className="social_bt facebook">Login with Facebook</a>
                            <a href="#0" className="social_bt google">Login with Google</a>
                            <div className="divider"><span>Or</span></div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" id="email" />
                                <i className="ti-email"></i>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" id="password" value="" />
                                <i className="ti-lock"></i>
                            </div>
                            <div className="clearfix add_bottom_15">
                                <div className="checkboxes float-left">
                                    <label className="container_check">Remember me
						  <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="float-right"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
                            </div>
                            <div className="text-center">
                                <input type="submit" value="Log In" className="btn_1 full-width mb_5" />
					Don’t have an account? <a href="account.html">Sign up</a>
                            </div>
                            <div id="forgot_pw">
                                <div className="form-group">
                                    <label>Please confirm login email below</label>
                                    <input type="email" className="form-control" name="email_forgot" id="email_forgot" />
                                    <i className="icon_mail_alt"></i>
                                </div>
                                <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
                                <div className="text-center"><input type="submit" value="Reset Password" className="btn_1" /></div>
                            </div>
                        </div>
                    </form>
                    {/* <!--form --> */}
                </div>
                {/* <!-- /Sign In Modal --> */}
            </header>
        )
    }
}


export default HeaderNav;