import React, { Component } from "react";
import "./OrderTrackingStyle.css";
import Order from "../../img/order.png";
import Truck from "../../img/delivery-van.png"
import Home from "../../img/home.png";
import Gift from "../../img/gift.png";
import Arrow from "../../img/arrow.svg";
import { MyMapComponent } from "./OrderTrackingMap";
// import Map from "../../img/map.png";
// import List from "../../img/list.png";



class OrderTracking extends Component {
	handleClick = () => {
		// $(".mapBtn").on("click", function () {
		// 	$(".map-right").css("display", "block");
		// 	$(".main").css("display", "none",);





		// })

		// $(".statusBtn").on("click", function () {
		// 	$(".map-right").css("display", "none");
		// 	$(".main").css("display", "block");

		// })

		$(".viewMap").on("click", function () {
			$(".map-right").css("display", "block");
			$(".mains").css("display", "none",);
			$(".statusBtn").css("display", "block");
		})

		$(".statusBtn").on("click", function() {
			$(".map-right").css("display", "none");
			$(".mains").css("display", "block");
			$(".statusBtn").css("display", "none");
		})

	}

	render() {
		return (
			<div style={{ backgroundColor: "#F5F5F5" }}>
				<main>
					<div className="container-fluid ">

						<div className="row row-height">
							{/* <div className="btns">

								<button className="statusBtn"><img src={List} className="list-icon" width= "30" height= "30" alt=""/></button>
								<button className="mapBtn" onClick={this.handleClick}><img src={Map} width= "30" height= "30" alt=""/></button>
							</div> */}
							<div className="btns">

								<button className="statusBtn" onClick={this.handleClick}>Back</button>
							</div>
							<div className="content-left2  map_view" style={{marginTop: "2%"}}>
								{/*Order Received */}
								<div className="order-received-main-container mains">
									<div style={{ display: "flex", justifyContent: "space-between" }}>
										<h4 style={{ float: "left", fontWeight: "bolder" }}>Order received</h4>
										<small><a className="viewMap" style={{ color: "red" }} onClick={this.handleClick}>View Map</a></small>
									</div>
									<p style={{ textAlign: "left", color: "rgb(170, 165, 165)" }}>McDonald 1:53pm arrival</p>
									<div className="current-status-signs">
										<div>
											<nav style={{ backgroundColor: "red" }}></nav>
											<img src={Order} alt="" width="15" height="15" style={{ marginTop: "8%" }} />
											<nav></nav>
											<img src={Truck} alt="" width="15" height="15" style={{ marginTop: "8%" }} />
											<nav></nav>
											<img src={Home} alt="" width="15" height="15" style={{ marginTop: "8%" }} />
										</ div>
									</div>

								</div>
								{/* / Order received */}

								{/* Item Container */}
								<div className="order-received-main-container item-Container mains">
									<div style={{ display: "flex", justifyContent: "space-between" }}>
										<h4 style={{ float: "left", fontWeight: "bolder" }}>McDonald's</h4>
										<small>
											{/* <img src={Arrow} alt="" width="40" height="50"/> */}
											<img src="https://img.icons8.com/color/48/000000/chevron-right.png" width="30" height="30" />
										</small>
									</div>
									<h4>1 Item</h4>
									<p style={{ textAlign: "left", color: "rgb(170, 165, 165)" }}>1x Filet o Fish Meal</p>
								</div>

								{/* / Item Container */}

								{/* delivery address */}
								<div className="delivery-address mains">
									<nav>
										<h4 style={{ fontWeight: "bolder" }}>Delivery Address</h4>
										<p style={{ color: "rgb(170, 165, 165)" }}>34 E Main st, Mystic, CT 06355, USA</p>
									</nav>
								</div>
								{/* / delivery address */}

								{/*  invite friend */}

								<div className="discount-invite-friend mains">
									<p><img src={Gift} width="40" height="50" alt="" className="gift" />Get $10.00 off. <i style={{ fontWeight: 1000 }}>Invite Friend</i>
										<small style={{ marginLeft: "10px" }}><img src={Arrow} width="30" height="30" className="arrow" /></small></p>
								</div>
								{/* / invite friend */}

								{/* <!-- /row --> */}
							</div>

							{/* <!-- /content-left--> */}
							<div className="col map-right">
								<div id="map" className=" map_right_listing">
									<MyMapComponent />

								</div>
								{/* <!-- map--> */}
							</div>
							{/* <!-- /map-right--> */}
						</div>
						{/* <!-- /row--> */}
					</div>
					{/* <!-- /container-fluid --> */}
				</main>
				{/* <!--/main--></div> */}


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

			</div>


		)
	}
}

export default OrderTracking;