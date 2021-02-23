import React, { Component } from 'react';
import './order-sign_up.css';
import './detail-page.css';
import { Link } from 'react-router-dom';

class Order extends Component {
	render() {
		return (

			<main className="bg_gray" style={{marginTop: "2%"}}>

				<div className="container margin_60_20">
					<div className="row justify-content-center">
						<div className="col-xl-6 col-lg-8">
							<div className="box_order_form">
								<div className="head">
									<div className="title">
										<h3>Personal Details</h3>
									</div>
								</div>
								{/* <!-- /head --> */}
								<div className="main">
									<div className="form-group">
										<label>First and Last Name</label>
										<input className="form-control" placeholder="First and Last Name" />
									</div>
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label>Email Address</label>
												<input className="form-control" placeholder="Email Address" />
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Phone</label>
												<input className="form-control" placeholder="Phone" />
											</div>
										</div>
									</div>
									<div className="form-group">
										<label>Full Address</label>
										<input className="form-control" placeholder="Full Address" />
									</div>
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label>City</label>
												<input className="form-control" placeholder="City" />
											</div>
										</div>
										<div className="col-md-3">
											<div className="form-group">
												<label>Postal Code</label>
												<input className="form-control" placeholder="0123" />
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- /box_order_form --> */}
							<div className="box_order_form">
								<div className="head">
									<div className="title">
										<h3>Payment Method</h3>
									</div>
								</div>
								{/* <!-- /head --> */}
								<div className="main">
									<div className="payment_select">
										<label className="container_radio">Credit Card
					                <input type="radio" value="" checked name="payment_method" />
											<span className="checkmark"></span>
										</label>
										<i className="icon_creditcard"></i>
									</div>
									<div className="form-group">
										<label>Name on card</label>
										<input type="text" className="form-control" id="name_card_order" name="name_card_order" placeholder="First and last name" />
									</div>
									<div className="form-group">
										<label>Card number</label>
										<input type="text" id="card_number" name="card_number" className="form-control" placeholder="Card number" />
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>Expiration date</label>
											<div className="row">
												<div className="col-md-6 col-6">
													<div className="form-group">
														<input type="text" id="expire_month" name="expire_month" className="form-control" placeholder="mm" />
													</div>
												</div>
												<div className="col-md-6 col-6">
													<div className="form-group">
														<input type="text" id="expire_year" name="expire_year" className="form-control" placeholder="yyyy" />
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-sm-12">
											<div className="form-group">
												<label>Security code</label>
												<div className="row">
													<div className="col-md-4 col-6">
														<div className="form-group">
															<input type="text" id="ccv" name="ccv" className="form-control" placeholder="CCV" />
														</div>
													</div>
													<div className="col-md-8 col-6">
														<img src="img/icon_ccv.gif" width="50" height="29" alt="ccv" /><small>Last 3 digits</small>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/* <!--End row --> */}
									<div className="payment_select" id="paypal">
										<label className="container_radio">Pay with Paypal
					                <input type="radio" value="" name="payment_method" />
											<span className="checkmark"></span>
										</label>
									</div>
									<div className="payment_select">
										<label className="container_radio">Pay with Cash
					                <input type="radio" value="" name="payment_method" />
											<span className="checkmark"></span>
										</label>
										<i className="icon_wallet"></i>
									</div>
								</div>
							</div>
							{/* <!-- /box_order_form --> */}
						</div>
						<div className="col-xl-4 col-lg-4" id="sidebar_fixed"
						/* <!-- /col --> */
							// style={{
							// 	position:'relative',
							// 	overflow:'visible',
							// 	boxSizing:'border-box',
							// 	minHeight: '1px'
							// }}
							>
							{/* <div className="theiaStickySidebar"
								style={{
									paddingTop: '0px',
									paddingBottom: '1px',
									position: 'static',
									transform: ' none',
									top:'0px',
									left:'741.5px'
								}}> */}

								{/* <div className="resize-sensor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden;"><div class="resize-sensor-expand" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;"><div style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 390px; height: 993px;"></div></div><div class="resize-sensor-shrink" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;"><div style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%"></div></div></div></div> */}
								<div className="box_order">
									<div className="head">
										<h3>Order Summary</h3>
										<div>Pizzeria da Alfredo</div>
									</div>
									{/* <!-- /head --> */}
									<div className="main">
										<ul>
											<li>Date<span>Today 23/11/2019</span></li>
											<li>Hour<span>08.30pm</span></li>
											<li>Type<span>Delivery</span></li>
										</ul>
										<hr />
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
										<Link to="/ConfirmOrder" className="btn_1 gradient full-width mb_5">Order Now</Link>
										<div className="text-center"><small>Or Call Us at <strong>0432 48432854</strong></small></div>
									</div>
								</div>
								{/* <!-- /box_booking --> */}
							</div>
					{/* </div> */}
						</div>

					{/* <!-- /row --> */}
				</div>
				{/* <!-- /container --> */}

			</main>
			// {/* </main><!-- /main --> */}
















		)
	}
}


export default Order;