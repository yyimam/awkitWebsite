import React, { Component } from "react";
import { Link } from "react-router-dom";


class ConfirmOrder extends Component{
    render(){
        return(
            <div>
                <main className="bg_gray" style={{marginTop: "2%"}}>
		
		<div className="container margin_60_40">
		    <div className="row justify-content-center">
		        <div className="col-lg-4">
		        	<div className="box_order_form">
		                <div className="head text-center">
		                    <h3>Pizzeria da Alfredo</h3>
		                    27 Old Gloucester St, 4530 - <Link to="/ListSideMap">Get directions</Link>
		                </div>
		                {/* <!-- /head --> */}
		                <div className="main">
		                	<div id="confirm">
								<div className="icon icon--order-success svg add_bottom_15">
									<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72">
										<g fill="none" stroke="#8EC343" stroke-width="2">
											<circle cx="36" cy="36" r="35" style={{strokeDasharray:"240px, 240px" , strokeDashoffset:"480px"}}></circle>
											<path d="M17.417,37.778l9.93,9.909l25.444-25.393" style={{strokeDasharray:"50px, 50px" ,strokeDashoffset: "0px"}}></path>
										</g>
									</svg>
								</div>
								<h3>Order Confirmed!</h3>
								<p>Sit an meis aliquam, cetero inermis.</p>
							</div>
		                </div>
		            </div>
		            {/* <!-- /box_booking --> */}
		        </div>
		        {/* <!-- /col --> */}
		    </div>
		    {/* <!-- /row --> */}
		</div>
		{/* <!-- /container --> */}
		
	</main>
	{/* <!-- /main --> */}

            
            </div>
        )
    }
}
export default ConfirmOrder;