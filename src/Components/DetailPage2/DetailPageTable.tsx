import React, { Component, useState } from "react";
// import OrderSum from "./OrderSum";
import ItalianImg from "../../img/home-small-img/italian-small-img.png";
import MexicanImg from "../../img/home-small-img/mexican-small-img.png";
import JapaneseImg from "../../img/home-small-img/japanese-small-img.png";
import VegiImg from "../../img/home-small-img/vegi-small-img.png";
import ItalianPizza from "../../img/home-small-img/pizza-small-image.png";
import Cake from "../../img/home-small-img/cake.jpg";
import Custard from "../../img/home-small-img/custard.jpg";
import Profilterolese from "../../img/home-small-img/Profilteroles.jpg";
import Drink from "../../img/home-small-img/drink.jpg"
import Beer from "../../img/home-small-img/beer.jpg"
import Wine from "../../img/home-small-img/red-wine.jpg"
import WhiteWine from "../../img/home-small-img/white-wine.jpg"
import CartModal from "./CartModal";
import { event } from "jquery";
import { useQuery, gql, useLazyQuery } from '@apollo/client';

// import CartModal from "./CartModal";
// require("react-bootstrap/ModalHeader")
// import {store} from "../store";






export const mainData = [
	{
		sectionId: "section-1",
		headerName: "Starters",
		items: [
			{
				key: 1, name: "Mexican Enchiladas", type: "radio", cal: "180-200 cal", des: "Fuisset mentitum deleniti sit ea", price: "$9.40", img: ItalianImg,
				"additionals": [{ headerName: "Select Size", class: "container_radio", selection: 1, type: "radio", "hCtg": [{ name: "Mediam", price: "$5.00", option: 1 }, { name: "Large", price: "$5.00", option: 2 }] }, { headerName: "Select Side", class: "container_check", selection: "upto 3", cCLass: "checkbox_class", type: "checkbox", "hCtg": [{ name: "French Fries", price: "$5.00" }, { name: "Boiled Egg", price: "$5.00" }, { name: "cappuccino", price: "$3.00" }, { name: "Black Coffe", price: "$5.00" }] }]
			},
			{
				key: 2, name: "Cheese Quesadilla", type: "radio", cal: "210-210 cal", des: "Fuisset mentitum deleniti sit ea", price: "$12.00", img: MexicanImg,
				"additionals": [{ headerName: "Select Size", class: "container_radio", selection: 1, type: "radio", "hCtg": [{ name: "Mediam", price: "$5.00", option: 1 }, { name: "Large", price: "$5.00", option: 2 }] }, { headerName: "Select Side", class: "container_check", selection: "upto 3", cCLass: "checkbox_class", type: "checkbox", "hCtg": [{ name: "franchFrise", price: "$5.00" }, { name: "cock", price: "$5.00" }, { name: "Coca Cola", price: "$5.00" }, { name: "Beer", price: "$5.00" }] }]
			},
			{
				key: 3, name: "Mexican Enchiladas", type: "radio", cal: "180-200 cal", des: "Fuisset mentitum deleniti sit ea", price: "$9.40", img: JapaneseImg,
				"additionals": [{ headerName: "Select Size", class: "container_radio", selection: 1, type: "radio", "hCtg": [{ name: "Mediam", price: "$5.00", option: 1 }, { name: "Large", price: "$5.00", option: 2 }] }, { headerName: "Select Side", class: "container_check", selection: "upto 3", cCLass: "checkbox_class", type: "checkbox", "hCtg": [{ name: "franchFrise", price: "$5.00" }, { name: "cock", price: "$5.00" }, { name: "cappuccino", price: "$3.00" }, { name: "Black Coffe", price: "$5.00" }] }]
			},
			{
				key: 4, name: "Mexican Enchiladas", type: "radio", cal: "180-200 cal", des: "Fuisset mentitum deleniti sit ea", price: "$9.40", img: VegiImg,
				"additionals": [{ headerName: "Select Size", class: "container_radio", selection: 1, type: "radio", "hCtg": [{ name: "Mediam", price: "$5.00", option: 1 }, { name: "Large", price: "$5.00", option: 2 }] }, { headerName: "Select Side", class: "container_check", selection: "upto 3", cCLass: "checkbox_class", type: "checkbox", "hCtg": [{ name: "franchFrise", price: "$5.00" }, { name: "cock", price: "$5.00" }, { name: "cappuccino", price: "$3.00" }, { name: "Black Coffe", price: "$5.00" }] }]
			},
		]
	},
	{
		sectionId: "section-2",
		headerName: "Main Courses",
		items: [
			{
				key: 5, name: "Cheese Quesadilla", type: "radio", cal: "210-210 cal", des: "Fuisset mentitum deleniti sit ea", price: "$12.00", img: VegiImg,
				"additionals": [{ headerName: "Select Size", class: "container_radio", selection: 1, type: "radio", "hCtg": [{ name: "Mediam", price: "$5.00", option: 1 }, { name: "Large", price: "$5.00", option: 2 }] }, { headerName: "Select Side", class: "container_check", selection: "upto 3", cCLass: "checkbox_class", type: "checkbox", "hCtg": [{ name: "franchFrise", price: "$5.00" }, { name: "cock", price: "$5.00" }, { name: "Coca Cola", price: "$5.00" }, { name: "Beer", price: "$5.00" }] }]
			},
			{
				key: 6, name: "Chorizo & Cheese", type: "radio", cal: "170-175 cal", des: "Fuisset mentitum deleniti sit ea", price: "$24.71", img: JapaneseImg,
				"additionals": [{ headerName: "Select Size", class: "container_radio", selection: 1, type: "radio", "hCtg": [{ name: "Mediam", price: "$5.00", option: 1 }, { name: "Large", price: "$5.00", option: 2 }] }, { headerName: "Select Side", class: "container_check", selection: "upto 3", cCLass: "checkbox_class", type: "checkbox", "hCtg": [{ name: "franchFrise", price: "$5.00" }, { name: "cock", price: "$5.00" }, { name: "cappuccino", price: "$3.00" }, { name: "Black Coffe", price: "$5.00" }] }]
			},
			{
				key: 7, name: "Beef Tacp", type: "radio", cal: "150-190 cal", des: "Fuisset mentitum deleniti sit ea", price: "$8.70", img: MexicanImg,
				"additionals": [{ headerName: "Select Size", class: "container_radio", selection: 1, type: "radio", "hCtg": [{ name: "Mediam", price: "$5.00", option: 1 }, { name: "Large", price: "$5.00", option: 2 }] }, { headerName: "Select Side", class: "container_check", selection: "upto 3", cCLass: "checkbox_class", type: "checkbox", "hCtg": [{ name: "franchFrise", price: "$5.00" }, { name: "cock", price: "$5.00" }, { name: "Coca Cola", price: "$5.00" }, { name: "Beer", price: "$5.00" }] }]
			},
			{
				key: 8, name: "Minced Beef Double Layer", cal: "160-190 cal", type: "radio", des: "Fuisset mentitum deleniti sit ea", price: "$6.30", img: ItalianImg,
				"additionals": [{ headerName: "Select Size", class: "container_radio", selection: 1, type: "radio", "hCtg": [{ name: "Mediam", price: "$5.00", option: 1 }, { name: "Large", price: "$5.00", option: 2 }] }, { headerName: "Select Side", class: "container_check", selection: "upto 3", cCLass: "checkbox_class", type: "checkbox", "hCtg": [{ name: "franchFrise", price: "$5.00" }, { name: "cock", price: "$5.00" }, { name: "cappuccino", price: "$3.00" }, { name: "Black Coffe", price: "$5.00" }] }]
			},
			{
				key: 9, name: "Piri Piri Chicken", type: "radio", cal: "170-220 cal", des: "Fuisset mentitum deleniti sit ea", price: "$7.40", img: ItalianImg,
				"additionals": [{ headerName: "Select Size", class: "container_radio", selection: 1, type: "radio", "hCtg": [{ name: "Mediam", price: "$5.00", option: 1 }, { name: "Large", price: "$5.00", option: 2 }] }, { headerName: "Select Side", class: "container_check", selection: "upto 3", cCLass: "checkbox_class", type: "checkbox", "hCtg": [{ name: "franchFrise", price: "$5.00" }, { name: "cock", price: "$5.00" }, { name: "Coca Cola", price: "$5.00" }, { name: "Beer", price: "$5.00" }] }]
			},
			{
				key: 10, name: "Burrito Al Pastor", type: "radio", cal: "140-160 cal", des: "Fuisset mentitum deleniti sit ea", price: "$7.70", img: ItalianPizza,
				"additionals": [{ headerName: "Select Size", class: "container_radio", selection: 1, type: "radio", "hCtg": [{ name: "Mediam", price: "$5.00", option: 1 }, { name: "Large", price: "$5.00", option: 2 }] }, { headerName: "Select Side", class: "container_check", selection: "upto 3", cCLass: "checkbox_class", type: "checkbox", "hCtg": [{ name: "franchFrise", price: "$5.00" }, { name: "cock", price: "$5.00" }, { name: "Coca Cola", price: "$5.00" }, { name: "Beer", price: "$5.00" }] }]
			},
		]
	},
	{
		sectionId: "section-3",
		headerName: "Desserts",
		items: [
			{
				key: 11, name: "Chocolate Fudge Cake", type: "radio", cal: "150-170 cal", des: "Fuisset mentitum deleniti sit ea", price: "$24.71", img: Cake,
				"additionals": [{ headerName: "Select Size", class: "container_radio", selection: 1, type: "radio", "hCtg": [{ name: "Mediam", additional_id: "65465465498", price: "$5.00", option: 1 }, { name: "Large", price: "$5.00", option: 2 }] }, { headerName: "Select Side", class: "container_check", selection: "upto 3", cCLass: "checkbox_class", type: "checkbox", "hCtg": [{ name: "Cream", price: "$5.00" }, { name: "Milk", price: "$5.00" }, { name: "", price: "$5.00" }, { name: "Green Tea", price: "$5.00" }] }]
			},
			{
				key: 12, name: "Cheesecake", type: "radio", cal: "185-210 cal", des: "Fuisset mentitum deleniti sit ea", price: "$7.50", img: Cake,
				"additionals": [{ headerName: "Select Size", class: "container_radio", selection: 1, type: "radio", "hCtg": [{ name: "Mediam", additional_id: "65465465498", price: "$5.00", option: 1 }, { name: "Large", price: "$5.00", option: 2 }] }, { headerName: "Select Side", class: "container_check", selection: "upto 3", cCLass: "checkbox_class", type: "checkbox", "hCtg": [{ name: "Chocalate", price: "$5.00" }, { name: "Sugar", price: "$5.00" }, { name: "Black Coffe", price: "$5.00" }, { name: "cappuccino", price: "$5.00" }] }]
			},
			{
				key: 13, name: "Apple Pie & Custard", type: "radio", cal: "90-120 cal", des: "Fuisset mentitum deleniti sit ea", price: "$9.70", img: Custard,
				"additionals": [{ headerName: "Select Size", class: "container_radio", selection: 1, type: "radio", "hCtg": [{ name: "Mediam", additional_id: "65465465498", price: "$5.00", option: 1 }, { name: "Large", price: "$5.00", option: 2 }] }, { headerName: "Select Side", class: "container_check", selection: "upto 3", cCLass: "checkbox_class", type: "checkbox", "hCtg": [{ name: "Ice Cream", price: "$5.00" }, { name: "Icde", price: "$5.00" }, { name: "Black Coffe", price: "$5.00" }, { name: "cappuccino", price: "$5.00" }] }]
			},
			{
				key: 14, name: "Profilteroles", type: "radio", cal: "100-140 cal", des: "Fuisset mentitum deleniti sit ea", price: "$12.00", img: Custard,
				"additionals": [{ headerName: "Select Size", class: "container_radio", selection: 1, type: "radio", "hCtg": [{ name: "Mediam", additional_id: "65465465498", price: "$5.00", option: 1 }, { name: "Large", price: "$5.00", option: 2 }] }, { headerName: "Select Side", class: "container_check", selection: "upto 3", cCLass: "checkbox_class", type: "checkbox", "hCtg": [{ name: "Cheese", price: "$5.00" }, { name: "Sugar", price: "$5.00" }, { name: "Black Coffe", price: "$5.00" }, { name: "cappuccino", price: "$5.00" }] }]
			},


		]
	},
	{
		sectionId: "section-4",
		headerName: "Drinks",
		items: [
			{
				key: 15, name: "Coca Cola", type: "radio", cal: "80-100 cal", des: "Fuisset mentitum deleniti sit ea", price: "$4.71", img: Drink,
				"additionals": [{ headerName: "Select Size", class: "container_radio", selection: 1, type: "radio", "hCtg": [{ name: "Mediam", price: "$5.00", option: 1 }, { name: "Large", price: "$5.00", option: 2 }] }, { headerName: "Select Side", class: "container_check", selection: "upto 3", cCLass: "checkbox_class", type: "checkbox", "hCtg": [{ name: "7up", price: "$5.00" }, { name: "Coca Cola", price: "$5.00" }, { name: "Red Wine", price: "$5.00" }, { name: "White Wine", price: "$5.00" }, { name: "Soda", price: "$5.00" }] }]
			},
			{
				key: 16, name: "Beer Corona", type: "radio", cal: "70-90 cal", des: "Fuisset mentitum deleniti sit ea", price: "$7.50", img: Beer,
				"additionals": [{ headerName: "Select Size", class: "container_radio", selection: 1, type: "radio", "hCtg": [{ name: "Mediam", price: "$5.00", option: 1 }, { name: "Large", price: "$5.00", option: 2 }] }, { headerName: "Select Side", class: "container_check", selection: "upto 3", cCLass: "checkbox_class", type: "checkbox", "hCtg": [{ name: "7up", price: "$5.00" }, { name: "Coca Cola", price: "$5.00" }, { name: "Red Wine", price: "$5.00" }, { name: "White Wine", price: "$5.00" }, { name: "Soda", price: "$5.00" }] }]
			},
			{
				key: 17, name: "Red Wine", type: "radio", cal: "60-80 cal", des: "Fuisset mentitum deleniti sit ea", price: "$9.70", img: Wine,
				"additionals": [{ headerName: "Select Size", class: "container_radio", selection: 1, type: "radio", "hCtg": [{ name: "Mediam", price: "$5.00", option: 1 }, { name: "Large", price: "$5.00", option: 2 }] }, { headerName: "Select Side", class: "container_check", selection: "upto 3", cCLass: "checkbox_class", type: "checkbox", "hCtg": [{ name: "7up", price: "$5.00" }, { name: "Coca Cola", price: "$5.00" }, { name: "Red Wine", price: "$5.00" }, { name: "White Wine", price: "$5.00" }, { name: "Soda", price: "$5.00" }] }]
			},
			{
				key: 18, name: "White Wine", type: "radio", cal: "65-75 cal", des: "Fuisset mentitum deleniti sit ea", price: "$12.00", img: WhiteWine,
				"additionals": [{ headerName: "Select Size", class: "container_radio", selection: 1, type: "radio", "hCtg": [{ name: "Mediam", price: "$5.00", option: 1 }, { name: "Large", price: "$5.00", option: 2 }] }, { headerName: "Select Side", class: "container_check", selection: "upto 3", cCLass: "checkbox_class", type: "checkbox", "hCtg": [{ name: "7up", price: "$5.00" }, { name: "Coca Cola", price: "$5.00" }, { name: "Red Wine", price: "$5.00" }, { name: "White Wine", price: "$5.00" }, { name: "Soda", price: "$5.00" }, { name: "Sprite", price: "$5.00" }, { name: "Pespi", price: "$5.00" }] }]
			},
		]
	},

];


function DetailPageTable(props: any, { func }) {
	let rec = props.data;
	console.log("rec",rec)
	
	// console.log("recasdfasd", rec, props)
	// let uniqueCategory = props.uniqueCategory
	// const [modalShow, setModalShow] = React.useState(false);
	// console.log("DetailPageTable_props",props.data);



	

	return (


		<section id={""}>
			<h4>{props.catagoryName}</h4>
			<div className="table_wrapper">
				<table className="table cart-list menu-gallery">
					<thead>
						<tr>
							<th>Item</th>
							<th>Price</th>
							<th>Order</th>
						</tr>
					</thead>
					<tbody>
						{rec.map((res, index) => {
							let {_id} = res;
							return (
								<tr key={_id}>
									<td className="d-md-flex align-items-center">
										<figure>
											<a href="#" title="Photo title" data-effect="mfp-zoom-in"><img src={res.productImgSmall} data-src={res.productImgSmall} alt="thumb" className="lazy" style={{width:""}}/></a>
										</figure>
										<div className="flex-md-column">
											<h4>{res.productName}</h4>
											<p>
												{res.productDescriptionLong}
											</p>
										</div>
									</td>
									<td>
										<strong>{"price"}</strong>
									</td>
									<td className="options">
										<div className="dropdown dropdown-options">
											{/*className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true" */}
											<a href="#" onClick={() => {
												//  setModalShow(true) ;
												props.callFunction(res);
											}}  ><i className="icon_plus_alt2"></i></a>
										</div>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</section>
	);
}

export default DetailPageTable;