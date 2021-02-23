import React, { Component, Fragment } from "react";

class Review extends Component{
    render(){
        return(
            <Fragment>
                <main className="bg_gray">
		
		<div className="container margin_60_20">
		    <div className="row justify-content-center">
		        <div className="col-lg-8">
		            <div className="box_general write_review">
		                <h1 className="add_bottom_15">Write a review for "Pizzeria Da Alfredo"</h1>
		                <label className="d-block add_bottom_15">Overall rating</label>
		                <div className="row">
		                    <div className="col-md-3 add_bottom_25">
		                        <div className="add_bottom_15">Food Quality <strong class="food_quality_val"></strong></div>
		                        <input type="range" min="0" max="10" step="1" value={0} data-orientation="horizontal" id="food_quality" name="food_quality"/>
		                    </div>
		                    <div className="col-md-3 add_bottom_25">
		                        <div className="add_bottom_15">Service <strong class="service_val"></strong></div>
		                        <input type="range" min={0} max={10} step={1}  value={0} data-orientation="horizontal" id="service" name="service"/>
		                    </div>
		                    <div className="col-md-3 add_bottom_25">
		                        <div className="add_bottom_15">Punctuality <strong class="location_val"></strong></div>
		                        <input type="range"min={0} max={10} step={1}  value={0} data-orientation="horizontal" id="location" name="location"/>
		                    </div>
		                    <div className="col-md-3 add_bottom_25">
		                        <div className="add_bottom_15">Price <strong class="price_val"></strong></div>
		                        <input type="range" min={0} max={10} step={1}  value={0} data-orientation="horizontal" id="price" name="price"/>
		                    </div>
		                </div>
		                <div className="form-group">
		                    <label>Title of your review</label>
		                    <input className="form-control" type="text" placeholder="If you could say it in one sentence, what would you say?"/>
		                </div>
		                <div className="form-group">
		                    <label>Your review</label>
		                    <textarea className="form-control" style={{height:"180"}} placeholder="Write your review to help others learn about this online business"></textarea>
		                </div>
		                <div className="form-group">
		                    <label>Add your photo (optional)</label>
		                    <div className="fileupload"><input type="file" name="fileupload" accept="image/*"/></div>
		                </div>
		                <div className="form-group">
		                    <div className="checkboxes float-left add_bottom_15 add_top_15">
		                        <label className="container_check">Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his.
		                            <input type="checkbox"/>
		                            <span className="checkmark"></span>
		                        </label>
		                    </div>
		                </div>
		                <a href="confirm.html" className="btn_1">Submit review</a>
		            </div>
		        </div>
		    </div>
		    {/* <!-- /row --> */}
		</div>
		{/* <!-- /container --> */}
		
	</main>











               
                
            </Fragment>
        )
    }
}
export default Review;