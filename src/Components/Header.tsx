import React, { Component } from "react";
import { BrowserRouter} from "react-router-dom";
import MainLogo from "../img/Carousel-images/logo.png";



class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="Header">

                    <div className="hero_single version_1">
                        <div className="opacity-mask">
                            <div className="container homeContainer">
                                <div className="row justify-content-lg-center justify-content-md-center">
                                    <div className="col-xl-6 col-lg-8" style={{textAlign: "center"}}>
                                        <img src={MainLogo} width="287" height="200"/>
                                        <h1 style={{color: "black"}}>Delivery or Takeaway Food</h1>
                                        <p style={{color: "black"}}>The best restaurants at the best price</p>
                                        <form method="post" action="grid-listing-filterscol.html">
                                            <div className="row no-gutters custom-search-input">
                                                <div className="col-lg-10">
                                                    <div className="form-group">
                                                        <input className="form-control no_border_r" type="text" id="autocomplete" placeholder="Seacrh zip code" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <button className="btn_1 gradient" type="submit">Search</button>
                                                </div>
                                            </div>
                                            {/* <!-- /row --> */}
                                            <div className="search_trends" >
                                                <h5 style={{color: "white"}}>Trending:</h5>
                                                <ul style={{marginLeft: "2px", color: "white"}}>
                                                    <li><a style={{color: "white", marginLeft: "5px"}} >Sushi</a></li>
                                                    <li><a style={{color: "white", marginLeft: "5px"}} >Burgher</a></li>
                                                    <li><a style={{color: "white", marginLeft: "5px"}}  >Chinese</a></li>
                                                    <li><a style={{color: "white", marginLeft: "5px"}} >Pizza</a></li>
                                                </ul>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* <!-- /row --> */}
                            </div>
                        </div>
                        <div className="wave hero"></div>
                    </div>
                    {/* <!-- /hero_single --> */}

                </div>
            </BrowserRouter>

        )
    }
}

export default Header;
