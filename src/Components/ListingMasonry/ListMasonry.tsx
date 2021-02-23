import React, { Fragment } from "react"
import { connect } from "react-redux";
import { MyMapComponent } from "../OrderTracking/OrderTrackingMap";
import { store } from "../store";
import ItemsContainer from "./ItemsContainer";
import { useQuery, gql } from '@apollo/client';
import ReactLoading from "react-loading";

const query =gql`
query ($limit: Int, $page: Int, $_id: String) {
	getStore(limit: $limit, page:$page, _id:$_id){
		store{
			_id
			storeType
			storeName
			subCategory{
			  subCategoryName
			  subCategorySlug
			}
			storeNameSlug
			storeWorkingTimeHourly
			storeWorkingTimeWeekly
			shortDescription
			longDescription
			imgSmall
			imgBig
			logo
			deliveryType
			address
			phoneNumber
			contactPerson
			coords{
			  lat
			  long
			}
			searchCategory{
			  _id
			  categoryName
			  categoryNameSlug
			}
			saved
			updated
			productID{
			  _id
			  productName
			  productSlug
			  productMainCategorySlug
			  productCategoryLevel1{
				_id
				name
			  }
			  productDescriptionLong
			  productDescriptionShort
			  productImgSmall
			  productImgLarge
			  caseSoldOut
			  StoreID
			  storeName
			  createUserID
			  productAdditionalID{
				_id
				categoryName
				selectUpto
				selectionType
				confirmSelection
				categoryItems{
				  itemName
				  price
				}
			   
			  }
			  createUserID
			  updated
			}
			pickUp
			rating
			zipCode
		  }
		  totalItem
		limit
		offset
	}
  }



`





const ListMasonry = (props) => {
	store.dispatch({ type: "notFixedClass", data: "header header_in clearfix" })
	// store.dispatch({type: "items", data: { name: data[0]}})
	// console.log("jgfgh",store.getState());
	// console.log("array check", this.props.reduxGraphData.rec.getStore)


	const { zipCode, storeType } = props.reduxData;

	const { data, loading, error, refetch } = useQuery(query, {
		variables: { "limit": 20, "page": 1, "zipCode": +zipCode, "storeType": storeType },
	})
// console.log("deta",data);


	return loading ? (<Fragment> <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20%" }}><ReactLoading type={"spin"} color={"tomato"} className="spin-123" /></div></Fragment>) : (

		<Fragment>

			<main className="main">
				<div className="page_header element_to_stick filterPg">
					<div className="container">
						<div className="row">
							<div className="col-xl-8 col-lg-7 col-md-7 d-none d-md-block">
								<h1>145 restaurants in Convent Street 2983</h1>
								<a href="#0">Change address</a>
							</div>
							<div className="col-xl-4 col-lg-5 col-md-5">
								<div className="search_bar_list">
									<input type="text" className="form-control" placeholder="Dishes, restaurants or cuisines" />
									<button type="submit"><i className="icon_search"></i></button>
								</div>
							</div>
						</div>
						{/* <!-- /row --> */}
					</div>
				</div>
				{/* <!-- /page_header --> */}

				<div className="filters_full clearfix add_bottom_15">
					<div className="container">
						<div className="type_delivery">
							<ul className="clearfix">
								<li>
									<label className="container_radio" style={{ border: "none" }}>All
						            <input type="radio" name="type_d" value="all" id="all"  data-filter="*" className="selected" />
									{/* checked */}
										<span className="checkmark"></span>
									</label>
								</li>
								<li>
									<label className="container_radio" style={{ border: "none" }}>Delivery
						            <input type="radio" name="type_d" value="delivery" id="delivery" data-filter=".delivery" />
										<span className="checkmark"></span>
									</label>
								</li>
								<li>
									<label className="container_radio" style={{ border: "none" }}>Takeaway
						            <input type="radio" name="type_d" value="takeway" id="takeaway" data-filter=".takeaway" />
										<span className="checkmark"></span>
									</label>
								</li>
							</ul>
						</div>
						{/* <!-- /type_delivery --> */}
						<a className="btn_map mobile btn_filters" data-toggle="collapse" href="#collapseMap"><i className="icon_pin_alt"></i></a>
						<a href="#collapseFilters" data-toggle="collapse" className="btn_filters"><i className="icon_adjust-vert"></i><span>Filters</span></a>
					</div>
				</div>
				{/* <!-- /filters_full --> */}

				<div className="collapse" id="collapseMap">
					<div id="map" className="map">
						<MyMapComponent />
					</div>
				</div>
				{/* <!-- /Map --> */}


				<div className="collapse filters_2" id="collapseFilters">
					<div className="container margin_30_20">
						<div className="row">
							<div className="col-md-4">
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
							</div>
							<div className="col-md-4">
								<div className="filter_type">
									<h6>Rating</h6>
									<ul>
										<li>
											<label className="container_check">Superb 9+ <small>06</small>
												<input type="checkbox" />
												<span className="checkmark"></span>
											</label>
										</li>
										<li>
											<label className="container_check">Very Good 8+ <small>12</small>
												<input type="checkbox" />
												<span className="checkmark"></span>
											</label>
										</li>
										<li>
											<label className="container_check">Good 7+ <small>17</small>
												<input type="checkbox" />
												<span className="checkmark"></span>
											</label>
										</li>
										<li>
											<label className="container_check">Pleasant 6+ <small>43</small>
												<input type="checkbox" />
												<span className="checkmark"></span>
											</label>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-md-4">
								<div className="filter_type">
									<h6>Distance</h6>
									<div className="distance"> Radius around selected destination <span></span> km</div>
									<div className="mb-3
	                        "><input type="range" min="10" max="100" step="10" value="30" data-orientation="horizontal" /></div>
								</div>
							</div>
						</div>
						{/* <!-- /row --> */}
					</div>
				</div>
				{/* <!-- /filters --> */}
				<div className="container margin_30_20">

					<div className="promo mb_30">
						<h3>Free Delivery for your first 14 days!</h3>
						<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
						<i className="icon-food_icon_delivery"></i>
					</div>
					{/* <!-- /promo --> */}

					{/* <div className="row isotope-wrapper">
							{

								data.map((rec: any, index: number) => {
									return (
										<ItemsContainer key={index} data={rec} />
									)
								}

								)
							}

						</div> */}

					<div className="row isotope-wrapper">
						{
							data.getStore.store.map((rec: any, index: number) => {
								return (
									<ItemsContainer key={rec._id} data={rec} />
								)
							}

							)
						}

					</div>
					{/* <!-- /strip row --> */}
					<div className="pagination_fg">
						<a href="#">&laquo;</a>
						<a href="#" className="active">1</a>
						<a href="#">2</a>
						<a href="#">3</a>
						<a href="#">4</a>
						<a href="#">5</a>
						<a href="#">&raquo;</a>
					</div>
				</div>
				{/* <!-- /container --> */}
			</main>


		</Fragment>
	)
}


const mapStateToProps = (state: any) => ({
	reduxData: state.reducerZipCode,
	// reduxGraphData: state.reducerGraphqlRecord
})

export default connect(mapStateToProps, null)(ListMasonry);