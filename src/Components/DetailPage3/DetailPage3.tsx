import React, { Component } from "react";
// import DetailPageTable, { data } from "../DetailPage2/DetailPageTable";
import OrderSum from "../DetailPage2/OrderSum";
import Review from "../DetailPage2/Review";

class DetailPage3 extends Component {
    render() {
        return (
            <main>
                <div className="container margin_detail_2">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="detail_page_head clearfix">
                                <div className="rating">
                                    <div className="score"><span>Superb<em>15 Reviews</em></span><strong>8.9</strong></div>
                                </div>
                                <div className="title">
                                    <h1>Pizzeria da Alfredo</h1>
                                    27 Old Gloucester St, 4530 London - <a href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361" target="blank">Get directions</a>
                                    <ul className="tags">
                                        <li><a href="#0">Pizza</a></li>
                                        <li><a href="#0">Italian Food</a></li>
                                        <li><a href="#0">Best Price</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- /detail_page_head --> */}
                            <h6>About "da Alfredo"</h6>
                            <p>Mei at intellegat reprehendunt, te facilisis definiebas dissentiunt usu. Choro delicata voluptatum cu vix.<br />Sea error splendide at. Te sed facilisi persequeris definitiones, ad per scriptorem instructior, vim latine adipiscing no. Cu tacimates salutandi his, mel te dicant quodsi aperiri. Unum timeam his eu.</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="pictures magnific-gallery clearfix">
                                <figure>
                                    <a href="img/detail_gallery/detail_1.jpg" title="Photo title" data-effect="mfp-zoom-in">
                                        <img src="img/thumb_detail_1.jpg" data-src="img/thumb_detail_1.jpg" className="lazy loaded" alt="" data-was-processed="true" />
                                    </a>
                                </figure>
                                <figure><a href="img/detail_gallery/detail_2.jpg" title="Photo title" data-effect="mfp-zoom-in"><img src="img/thumb_detail_2.jpg" data-src="img/thumb_detail_2.jpg" className="lazy loaded" alt="" data-was-processed="true" /></a></figure>
                                <figure><a href="img/detail_gallery/detail_3.jpg" title="Photo title" data-effect="mfp-zoom-in"><img src="img/thumb_detail_3.jpg" data-src="img/thumb_detail_3.jpg" className="lazy loaded" alt="" data-was-processed="true" /></a></figure>
                                <figure><a href="img/detail_gallery/detail_4.jpg" title="Photo title" data-effect="mfp-zoom-in"><img src="img/thumb_detail_4.jpg" data-src="img/thumb_detail_4.jpg" className="lazy loaded" alt="" data-was-processed="true" /></a></figure>
                                <figure><a href="img/detail_gallery/detail_4.jpg" title="Photo title" data-effect="mfp-zoom-in"><img src="img/thumb_detail_6.jpg" data-src="img/thumb_detail_6.jpg" className="lazy loaded" alt="" data-was-processed="true" /></a></figure>
                                <figure><a href="img/detail_gallery/detail_5.jpg" title="Photo title" data-effect="mfp-zoom-in"><span className="d-flex align-items-center justify-content-center">+10</span><img src="img/thumb_detail_5.jpg" data-src="img/thumb_detail_5.jpg" className="lazy loaded" alt="" data-was-processed="true" /></a></figure>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /row --> */}
                </div>
                {/* <!-- /container --> */}

                <nav className="secondary_nav sticky_horizontal">
                    <div className="container">
                        <ul id="secondary_nav">
                            <li><a className="list-group-item list-group-item-action" href="#section-1">Starters</a></li>
                            <li><a className="list-group-item list-group-item-action" href="#section-2">Main Courses</a></li>
                            <li><a className="list-group-item list-group-item-action" href="#section-3">Desserts</a></li>
                            <li><a className="list-group-item list-group-item-action" href="#section-4">Drinks</a></li>
                            <li><a className="list-group-item list-group-item-action" href="#section-5"><i className="icon_chat_alt"></i>Reviews</a></li>
                        </ul>
                    </div>
                    <span></span>
                </nav>
                {/* <!-- /secondary_nav --> */}
                {/* <DetailPageTable />
                <Review /> */}
                <div className="bg_gray" style={{ transform: "none" }}>
                    <div className="container margin_detail" style={{ transform: "none" }}>
                        <div className="row" style={{ transform: "none" }}>
                            <div className="col-lg-8 list_menu">
                                {/* <!-- /secondary_nav --> */}
{/* 

                                {
                                    data.map((rec: any) => {
                                        return (

                                            <DetailPageTable data={rec} />

                                        )
                                    })

                                } */}

                            </div>
                            <OrderSum />

                        </div>
                    </div>
                </div>
                <Review />
            </main>
        );
    }

}

export default DetailPage3;