import React, { Component, Fragment } from 'react';
// import "../gComponent/groceryStore.css";
import logo from "../../../img/Carousel-images/Grocery Store/img1.png";
import ProductScrollbar from './productSLider.tsx/ProductScrollbar';


class GStore extends Component{
    render(){
        return(
            <div className="GMain" style={{background: "#f4f7fa"}}>
                <div className="GBanner">
                <div className="gsHeader">
                        <div className="gslogo"> <img src={logo} width="150" height="150"/></div>
                        <p>Happy Shopping!</p>
                    </div>
                </div>
                <div className="GBody">
                <h3 style={{textAlign: "center", fontSize: "22px", position: "relative", top: "20px"}}>Coupons</h3>
                   <div className="Gcoupons">
                        <div></div>
                        <div></div>
                        <div></div>
                   </div>
                   <div className="Gvegi">
                   <h3 style={{textAlign: "center", fontSize: "22px", position: "relative", top: "90px"}}>Products</h3>
                   <div className="parentOfCarousel" style={{ width: "95%", margin: "auto",overflow: "hidden",position: "relative", top: "90px" }}>
                    <ProductScrollbar  />
                </div>
                   </div>
                </div>
            </div>
        )
    }
}
export default GStore;