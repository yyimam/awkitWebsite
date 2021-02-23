import React, { Component } from "react";
import { MyMapComponent } from "../OrderTracking/OrderTrackingMap";
import { store } from "../store";

import Img1 from "../../img/Carousel-images/123.jpg";
import Img2 from "../../img/Carousel-images/alfredo.jpg";
import Img3 from "../../img/Carousel-images/19.jpg";
import Img4 from "../../img/Carousel-images/4.jpg";
import Img5 from "../../img/Carousel-images/5.jpg";
import Img6 from "../../img/Carousel-images/6.jpg";
import Img7 from "../../img/Carousel-images/7.jpg";
import Img8 from "../../img/Carousel-images/8.jpg";
import Img9 from "../../img/Carousel-images/9.jpg";
import Img10 from "../../img/Carousel-images/10.jpg";
// import Img11 from "../../img/Carousel-images/11.jpg";
// import Img12 from "../../img/Carousel-images/12.jpg";
// import Img13 from "../../img/Carousel-images/13.jpg";
// import Img14 from "../../img/Carousel-images/14.jpg";
// import Img15 from "../../img/Carousel-images/15.jpg";
// import Img16 from "../../img/Carousel-images/16.jpg";
// import Img17 from "../../img/Carousel-images/17.jpg";
// import Img18 from "../../img/Carousel-images/18.jpg";
// import Img19 from "../../img/Carousel-images/19.jpg";
// import Img20 from "../../img/Carousel-images/20.jpg";
import { Link } from "react-router-dom";

class ListSideMap extends Component {

	render() {
		// console.log('datasdfasdfa',store.getState());
		console.log('datasdfasdfa',store.getState());
		// store.dispatch({ type: "rest", data: {myname:"yousuf"} });
		
		return (
			<div>
				<main>
					<div className="container-fluid full-height">
						<div className="row row-height">
							<div className="content-left sideMapCL">
								<div className="page_header sideMapPg">
									<div className="row">
										<div className="col-xl-12 d-none d-md-block">
											{/* <h1>145 restaurants in Convent Street 2983</h1> */}
										</div>
										<div className="col-xl-12">
											<div className="search_bar_list">
												<input type="text" className="form-control" placeholder="Dishes, restaurants or cuisines" />
												<button type="submit"><i className="icon_search"></i></button>
											</div>
										</div>
									</div>
									{/* <!-- /row --> */}
								</div>
								{/* <!-- /page_header --> */}
								<div className="filters_full clearfix">
									<div className="container-fluid">
										<div className="sort_select">
											<select name="sort" id="sort">
												<option value="popularity">Sort by Top Rated</option>
												<option value="rating">Sort by Reccomended</option>
												<option value="date">Sort by Price: low to high</option>
												<option value="price">Sort by Up to 15% off</option>
												<option value="price-desc">Distance</option>
											</select>
										</div>
										<a href="#collapseFilters" data-toggle="collapse" className="btn_filters"><i className="icon_adjust-vert"></i><span>Filters</span></a>
									</div>
								</div>
								{/* <!-- /filters_full --> */}

								<div className="collapse filters_2" id="collapseFilters">
									<div className="type_delivery">
										<ul className="clearfix">
											<li>
												<label className="container_radio">Delivery
						            <input type="radio" name="type_d" />
													<span className="checkmark"></span>
												</label>
											</li>
											<li>
												<label className="container_radio">Take away
						            <input type="radio" name="type_d" />
													<span className="checkmark"></span>
												</label>
											</li>
										</ul>
									</div>
									{/* <!-- /type_delivery --> */}
									<div className="filter_type">
										<h6>Categories</h6>
										<ul>
											<li>
												<label className="container_check">Pizza - Italian <small>12</small>
													<input type="checkbox" />
													<span className="checkmark"></span>
												</label>
											</li>
											<li>
												<label className="container_check">Japanese - Sushi <small>24</small>
													<input type="checkbox" />
													<span className="checkmark"></span>
												</label>
											</li>
											<li>
												<label className="container_check">Burghers <small>23</small>
													<input type="checkbox" />
													<span className="checkmark"></span>
												</label>
											</li>
											<li>
												<label className="container_check">Vegetarian <small>11</small>
													<input type="checkbox" />
													<span className="checkmark"></span>
												</label>
											</li>
										</ul>
									</div>
									<div className="filter_type">
										<h6>Distance</h6>
										<div className="distance"> Radius around selected destination <span></span> km</div>
										<div className="add_bottom_25"><input type="range" min="10" max="100" step="10" value="30" data-orientation="horizontal" /></div>
									</div>
								</div>
								{/* <!-- /filters --> */}

								<div className="row">
									<div className="col-lg-12 col-sm-6">
										<div className="strip">
											<figure>
												<span className="ribbon off">-30%</span>
												<img src={Img1} data-src={Img1} className="img-fluid lazy" alt="" />
												<Link to="/DetailPage2" className="strip_info">
													<small>Pizza</small>
													<div className="item_title">
														<h3>Da Alfredo</h3>
														<small>27 Old Gloucester St</small>
													</div>
												</Link>
											</figure>
											<ul>
												{/* <li><a href="#0" onClick={onHtmlClick('Marker',1)} className="address">View on Map</a></li> */}
												<li><Link to="/ListSideMAp">View on Map</Link></li>
												<li>
													<div className="score"><strong>8.9</strong></div>
												</li>
											</ul>
										</div>
									</div>
									{/* <!-- /strip grid --> */}
									<div className="col-lg-12 col-sm-6">
										<div className="strip">
											<figure>
												<span className="ribbon off">-40%</span>
												<img src={Img2} data-src={Img2}className="img-fluid lazy" alt="" />
												<Link to="/DetailPage2" className="strip_info">
													<small>Burghers</small>
													<div className="item_title">
														<h3>Best Burghers</h3>
														<small>27 Old Gloucester St</small>
													</div>
												</Link>
											</figure>
											<ul>
												{/* <li><a href="#0" onclick="onHtmlClick('Marker',2)" className="address">View on Map</a></li> */}
												<li><Link to="/ListSideMap">View on Map</Link></li>

												<li>
													<div className="score"><strong>9.5</strong></div>
												</li>
											</ul>
										</div>
									</div>
									{/* <!-- /strip grid --> */}
									<div className="col-lg-12 col-sm-6">
										<div className="strip">
											<figure>
												<img src={Img3} data-src={Img3} className="img-fluid lazy" alt="" />
												<Link to="/DetailPage2" href="detail-restaurant.html" className="strip_info">
													<small>Vegetarian</small>
													<div className="item_title">
														<h3>Vego Life</h3>
														<small>27 Old Gloucester St</small>
													</div>
												</Link>
											</figure>
											<ul>
												{/* <li><Link to="" href="#0" onclick="onHtmlClick('Marker',3)" className="address">View on Map</Link to=""></li> */}
												<li><Link to="/ListSideMap" href="#0" className="address">View on Map</Link></li>

												<li>
													<div className="score"><strong>7.5</strong></div>
												</li>
											</ul>
										</div>
									</div>
									{/* <!-- /strip grid --> */}
									<div className="col-lg-12 col-sm-6">
										<div className="strip">
											<figure>
												<span className="ribbon off">-25%</span>
												<img src={Img4} data-src={Img4} className="img-fluid lazy" alt="" />
												<Link to="/DetailPage2" href="detail-restaurant.html" className="strip_info">
													<small>Japanese</small>
													<div className="item_title">
														<h3>Sushi Temple</h3>
														<small>27 Old Gloucester St</small>
													</div>
												</Link>
											</figure>
											<ul>
												{/* <li><Link to="" href="#0" onclick="onHtmlClick('Marker',4)" className="address">View on Map</Link to=""></li> */}
												<li><Link to="/ListSideMap" href="#0" className="address">View on Map</Link></li>

												<li>
													<div className="score"><strong>9.5</strong></div>
												</li>
											</ul>
										</div>
									</div>
									{/* <!-- /strip grid --> */}
									<div className="col-lg-12 col-sm-6">
										<div className="strip">
											<figure>
												<span className="ribbon off">-30%</span>
												<img src={Img5} data-src={Img5} className="img-fluid lazy" alt="" />
												<Link to="/DetailPage2" href="detail-restaurant.html" className="strip_info">
													<small>Pizza</small>
													<div className="item_title">
														<h3>Auto Pizza</h3>
														<small>27 Old Gloucester St</small>
													</div>
												</Link>
											</figure>
											<ul>
												{/* <li><Link to="" href="#0" onclick="onHtmlClick('Marker',5)" className="address">View on Map</Link to=""></li> */}
												<li><Link to="/ListSideMap" href="#0" className="address">View on Map</Link></li>
												<li>
													<div className="score"><strong>7.0</strong></div>
												</li>
											</ul>
										</div>
									</div>
									{/* <!-- /strip grid --> */}
									<div className="col-lg-12 col-sm-6">
										<div className="strip">
											<figure>
												<img src={Img6} data-src={Img6} className="img-fluid lazy" alt="" />
												<Link to="/DetailPage2" href="detail-restaurant.html" className="strip_info">
													<small>Burghers</small>
													<div className="item_title">
														<h3>Alliance</h3>
														<small>27 Old Gloucester St</small>
													</div>
												</Link>
											</figure>
											<ul>
												{/* <li><Link to="" href="#0" onclick="onHtmlClick('Marker',6)" className="address">View on Map</Link to=""></li> */}
												{/* <li><Link to="" href="#0" onclick="onHtmlClick('Marker',6)" className="address">View on Map</Link to=""></li> */}
												<li><Link to="/ListSideMap" href="#0" className="address">View on Map</Link></li>

												<li>
													<div className="score"><strong>8.9</strong></div>
												</li>
											</ul>
										</div>
									</div>
									{/* <!-- /strip grid --> */}
									<div className="col-lg-12 col-sm-6">
										<div className="strip">
											<figure>
												<span className="ribbon off">-30%</span>
												<img src={Img7} data-src={Img7} className="img-fluid lazy" alt="" />
												<Link to="/DetailPage2" href="detail-restaurant.html" className="strip_info">
													<small>Chinese</small>
													<div className="item_title">
														<h3>Alliance</h3>
														<small>27 Old Gloucester St</small>
													</div>
												</Link>
											</figure>
											<ul>
												{/* <li><Link to="" href="#0" onclick="onHtmlClick('Marker',7)" className="address">View on Map</Link to=""></li> */}
												<li><Link to="/ListSideMap" href="#0" className="address">View on Map</Link></li>

												<li>
													<div className="score"><strong>8.9</strong></div>
												</li>
											</ul>
										</div>
									</div>
									{/* <!-- /strip grid --> */}
									<div className="col-lg-12 col-sm-6">
										<div className="strip">
											<figure>
												<img src={Img8} data-src={Img8} className="img-fluid lazy" alt="" />
												<Link to="/DetailPage2" href="detail-restaurant.html" className="strip_info">
													<small>Sushi</small>
													<div className="item_title">
														<h3>Dragon Tower</h3>
														<small>27 Old Gloucester St</small>
													</div>
												</Link>
											</figure>
											<ul>
												{/* <li><Link to="" href="#0" onclick="onHtmlClick('Marker',8)" className="address">View on Map</Link to=""></li> */}
												<li><Link to="/ListSideMap" href="#0" className="address">View on Map</Link></li>

												<li>
													<div className="score"><strong>8.9</strong></div>
												</li>
											</ul>
										</div>
									</div>
									{/* <!-- /strip grid --> */}
									<div className="col-lg-12 col-sm-6">
										<div className="strip">
											<figure>
												<img src={Img9} data-src={Img9} className="img-fluid lazy" alt="" />
												<Link to="/DetailPage2" href="detail-restaurant.html" className="strip_info">
													<small>Mexican</small>
													<div className="item_title">
														<h3>El Paso Tacos</h3>
														<small>27 Old Gloucester St</small>
													</div>
												</Link>
											</figure>
											<ul>
												{/* <li><Link to="" href="#0" onclick="onHtmlClick('Marker',9)" className="address">View on Map</Link to=""></li> */}
												<li><Link to="/ListSideMap" href="#0" className="address">View on Map</Link></li>
												<li>
													<div className="score"><strong>8.9</strong></div>
												</li>
											</ul>
										</div>
									</div>
									{/* <!-- /strip grid --> */}
									<div className="col-lg-12 col-sm-6">
										<div className="strip">
											<figure>
												<img src={Img10} data-src={Img10} className="img-fluid lazy" alt="" />
												<Link to="/DetailPage2" href="detail-restaurant.html" className="strip_info">
													<small>Bakery</small>
													<div className="item_title">
														<h3>Monnalisa</h3>
														<small>27 Old Gloucester St</small>
													</div>
												</Link>
											</figure>
											<ul>
												{/* <li><Link to="" href="#0" onclick="onHtmlClick('Marker',10)" className="address">View on Map</Link to=""></li> */}
												<li><Link to="/ListSideMap" href="#0" className="address">View on Map</Link></li>
												<li>
													<div className="score"><strong>8.9</strong></div>
												</li>
											</ul>
										</div>
									</div>
									{/* <!-- /strip grid --> */}
								</div>
								{/* <!-- /row --> */}
								<p className="text-center"><Link to="/ListSideMap" href="#0" className="btn_1"><strong>Load more</strong></Link></p>
							</div>
							{/* <!-- /content-left--> */}
							<div className="col map-right">
								<div id="map" className="map_right_listing">
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
			</div>


		)
	}
}

export default ListSideMap;