import React, { Component, Fragment } from 'react';
// import './submit.css'
import './wizard.css'



class SubmitRider extends Component {
    render() {
        return (
            <Fragment>
                <div className="hero_single inner_pages background-image riderBanner" data-background="url(img/rider-banner.jpg)">
                    <div className="opacity-mask forRiderBanner" data-opacity-mask="rgba(0, 0, 0, 0.6)">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-9 col-lg-10 col-md-8">
                                    <h1>Become a Awkit Rider</h1>
                                    <p>Flexible work, competitive fees</p>
                                    <a href="#apply" className="btn_1 gradient btn_scroll">Apply Now</a>
                                </div>
                            </div>
                            {/* <!-- /row --> */}
                        </div>
                    </div>
                    <div className="wave hero gray"></div>
                </div>
                {/* // <!-- /hero_single --> */}

                <div className="bg_gray">
                    <div className="container margin_30_40">
                        <div className="main_title center">
                            <span><em></em></span>
                            <h2>Why Work with Us</h2>
                            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                        </div>

                        <div className="row justify-content-center add_bottom_45">
                            <div className="col-lg-4 col-md-6">
                                <div className="box_topic submit">
                                    <figure><img src="img/icon_submit_1.svg" alt="" style={{ width: '110px', height:'100px' }} /></figure>
                                    <h3>Your compensation</h3>
                                    <p>What you earn per order depends on your experience and ratings.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="box_topic submit">
                                    <figure><img src="img/icon_submit_2.svg" alt="" style={{ width:'110px', height:'100px' }} /></figure>
                                    <h3>Choose when to work</h3>
                                    <p>You’ll be self-employed and free to work to your own availability.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="box_topic submit">
                                    <figure><img src="img/icon_submit_3.svg" alt="" style={{ width:'110px', height:'100px' }} /></figure>
                                    <h3>You will only need</h3>
                                    <p>Your vehicle (motorcycle, bike or car), an iPhone or Android device.</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /row --> */}

                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-10">
                                <div className="main_title center">
                                    <h3 style={{marginBottom: "0"}}>Frequent questions</h3>
                                    <p>Here you'll be able find answers your questions</p>
                                </div>

                                <div role="tablist" className="add_bottom_15 accordion_2" id="accordion_group">
                                    <div className="card">
                                        <div className="card-header" role="tab">
                                            <h5>
                                                <a data-toggle="collapse" href="#collapseOne" aria-expanded="true"><i className="indicator icon_minus-06"></i>Introdocution</a>
                                            </h5>
                                        </div>

                                        <div id="collapseOne" className="collapse show" role="tabpanel" data-parent="#accordion_group">
                                            <div className="card-body">
                                                <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /card --> */}
                                    <div className="card">
                                        <div className="card-header" role="tab">
                                            <h5>
                                                <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false">
                                                    <i className="indicator icon_plus"></i>Generative Modeling Review
									</a>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse" role="tabpanel" data-parent="#accordion_group">
                                            <div className="card-body">
                                                <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /card --> */}
                                    <div className="card">
                                        <div className="card-header" role="tab">
                                            <h5>
                                                <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false">
                                                    <i className="indicator icon_plus"></i>Variational Autoencoders
									</a>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" className="collapse" role="tabpanel" data-parent="#accordion_group">
                                            <div className="card-body">
                                                <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /card --> */}
                                </div>
                                {/* <!-- /accordion group --> */}
                            </div>
                            {/* <!-- /col --> */}
                        </div>
                        {/* <!-- /row --> */}
                    </div>
                    {/* <!-- /container --> */}
                </div>
                {/* <!-- /bg_gray --> */}

                <div className="container margin_60_40" id="apply">

			<div className="row justify-content-center">
				<div className="col-lg-6 col-md-8">
					<div className="main_title center">
						<span><em></em></span>
						<h2>Apply Now</h2>
						<p>Note that you must be over 18 years old</p>
					</div>

					<div id="wizard_container">
					<div id="top-wizard">
							<div id="progressbar"></div>
						</div>
						{/* <!-- /top-wizard --> */}
						<form id="wrapped" method="POST">
							<input id="website" name="website" type="text" value=""/>
							{/* <!-- Leave for security protection, read docs for details --> */}
							<div id="middle-wizard">

								<div className="step">
									<h3 className="main_question"><strong>1/5</strong>Where would you like to work?</h3>
									<div className="form-group">
										<div className="custom_select clearfix">
											<select className="wide required" name="location">
												<option value="">Your City</option>
												<option value="London">London</option>
												<option value="Paris">Paris</option>
												<option value="Madrid">Madrid</option>
												<option value="Berlin">Berlin</option>
												<option value="Rome">Rome</option>                             
											</select>
										</div>
									</div>
								</div>

								<div className="step">
									<h3 className="main_question"><strong>3/5</strong>What's your vehicle type?</h3>
									<div className="form-group">
										<label className="container_radio version_2">Bicycle
											<input type="radio" name="vehicle" value="Bicycle" className="required"/>
											<span className="checkmark"></span>
										</label>
									</div>
									<div className="form-group">
										<label className="container_radio version_2">Scooter
											<input type="radio" name="vehicle" value="Scooter" className="required"/>
											<span className="checkmark"></span>
										</label>
									</div>
									<div className="form-group">
										<label className="container_radio version_2">Car
											<input type="radio" name="vehicle" value="Car" className="required"/>
											<span className="checkmark"></span>
										</label>
									</div>
									<p>
										<strong><i className="icon_info"></i> Note</strong><br/>
										Lorem ipsum dolor sit amet, per ex tollit honestatis, vis aeque tantas at, et his summo inermis conceptam. Mazim accusamus ut mea. Tritani legimus patrioque no per.
									</p>
								</div>
								{/* <!-- /step--> */}

								<div className="step">
									<h3 className="main_question"><strong>4/5</strong>How did you hear about us?</h3>
									<div className="form-group">
										<label className="container_check version_2">Google Search Engine
											<input type="checkbox" name="how_hear[]" value="Google Search Engine" className="required"/>
											<span className="checkmark"></span>
										</label>
									</div>
									<div className="form-group">
										<label className="container_check version_2">A friend of mine
											<input type="checkbox" name="how_hear[]" value="A friend of mine" className="required"/>
											<span className="checkmark"></span>
										</label>
									</div>
									<div className="form-group">
										<label className="container_check version_2">Print Advertise
											<input type="checkbox" name="how_hear[]" value="Print Advertise" className="required"/>
											<span className="checkmark"></span>
										</label>
									</div>
									<div className="form-group">
										<label className="container_check version_2">Newspaper
											<input type="checkbox" name="how_hear[]" value="Newspaper" className="required"/>
											<span className="checkmark"></span>
										</label>
									</div>
									<div className="form-group">
										<label className="container_check version_2">Other
											<input type="checkbox" name="how_hear[]" value="Other" className="required"/>
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
								{/* <!-- /step--> */}

								<div className="submit step">
									<h3 className="main_question"><strong>5/5</strong>Tell us about yourself</h3>
									<div className="form-group">
										<input type="text" name="firstname" className="form-control required" placeholder="First and Last Name"/>
									</div>
									<div className="form-group">
										<input type="email" name="email" className="form-control required" placeholder="Your Email"/>
									</div>
									<div className="form-group">
										<input type="text" name="telephone" className="form-control required" placeholder="Your Telephone"/>
									</div>
									<div className="row">
										<div className="col-3">
											<div className="form-group">
												<input type="text" name="age" className="form-control required" placeholder="Age"/>
											</div>
										</div>
										<div className="col-9">
											<div className="form-group radio_input">
												<label className="container_radio">Male
													<input type="radio" name="gender" value="Male" className="required"/>
													<span className="checkmark"></span>
												</label>
												<label className="container_radio">Female
													<input type="radio" name="gender" value="Female" className="required"/>
													<span className="checkmark"></span>
												</label>
											</div>
										</div>
									</div>
									{/* <!-- /row --> */}
									<div className="form-group terms">
										<label className="container_check">Please accept our <a href="#" data-toggle="modal" data-target="#terms-txt">Terms and conditions</a>
											<input type="checkbox" name="terms" value="Yes" className="required"/>
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
								{/* <!-- /step--> */}

							</div>
							{/* <!-- /middle-wizard --> */}
							<div id="bottom-wizard">
								<button type="button" name="backward" className="backward">Prev</button>
								<button type="button" name="forward" className="forward">Next</button>
								<button type="submit" name="process" className="submit">Submit</button>
							</div>
							{/* <!-- /bottom-wizard --> */}
						</form>
					</div>
					{/* <!-- /Wizard container --> */}
				</div>
				{/* <!-- /col --> */}
			</div>
			{/* <!-- /row -->	 */}
		</div>
		{/* <!-- /container --> */}



            </Fragment >


        )
    }
}

export default SubmitRider;