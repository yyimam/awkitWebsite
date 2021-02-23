import React from "react";
import Img1 from "../../img/Carousel-images/123.jpg";
import Img4 from "../../img/Carousel-images/4.jpg";
import Img5 from "../../img/Carousel-images/5.jpg";
import Img6 from "../../img/Carousel-images/6.jpg";
import Img7 from "../../img/Carousel-images/7.jpg";
import Img8 from "../../img/Carousel-images/8.jpg";
import Img9 from "../../img/Carousel-images/9.jpg";
import Img10 from "../../img/Carousel-images/10.jpg";
import Img11 from "../../img/Carousel-images/11.jpg";
import Img12 from "../../img/Carousel-images/12.jpg";
import Img13 from "../../img/Carousel-images/13.jpg";
import Img14 from "../../img/Carousel-images/14.jpg";
import { Link } from "react-router-dom";

//
export let data = [
    { "name": "Pizza", "item": "Da Alfredo", "address": "27 Old Gloucester st", "rating": "8.9", "img": Img1 },
    { "name": "Burghers", "item": "Best Burghers", "address": "27 Old Gloucester st", "rating": "9.5", "img": Img4 },
    { "name": "Vegetarian", "item": "Vego Life", "address": "27 Old Gloucester st", "rating": "7.5", "img": Img5 },
    { "name": "Japanese", "item": "Sushi Temple", "address": "27 Old Gloucester st", "rating": "9.5", "img": Img6 },
    { "name": "Pizza", "item": "Auto Pizza", "address": "27 Old Gloucester st", "rating": "7.0", "img": Img7 },
    { "name": "Burghers", "item": "Alliance", "address": "27 Old Gloucester st", "rating": "8.9", "img": Img8 },
    { "name": "Chinese", "item": "Alliance", "address": "27 Old Gloucester st", "rating": "8.9", "img": Img9 },
    { "name": "Sushi", "item": "Dragon Tower", "address": "27 Old Gloucester st", "rating": "8.9", "img": Img10 },
    { "name": "Mexican", "item": "El Paso Tacos", "address": "27 Old Gloucester st", "rating": "8.9", "img": Img11 },
    { "name": "Bakery", "item": "Monnalisa", "address": "27 Old Gloucester st", "rating": "8.9", "img": Img12 },
    { "name": "Chinese", "item": "Pechino Express", "address": "27 Old Gloucester st", "rating": "8.9", "img": Img13 },
    { "name": "Mexican", "item": "Guachamole", "address": "135 Newtownards Road", "rating": "8.9", "img": Img14 },
]



function ItemsContainer(props: any) {
    let { _id, imgSmall, storeName, searchCategory, address, rating } = props.data //Getting data

    return (
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 isotope-item delivery">
            <div className="strip">
                <figure>
                    <span className="ribbon off">15% off</span>
                    <img src={imgSmall} data-src={imgSmall} className="img-fluid lazy" alt="" />
                    <Link to={"/DetailPage/" + _id} className="strip_info" >
                        {/* <small>{props.data.storeName}</small> */}
                        <div className="item_title">
                            <h3>{storeName}</h3>
                            <h3 className="pt-1">{searchCategory}</h3>
                            <small>{address}</small>
                        </div>
                    </Link>
                </figure>
                <ul>
                    <li className="ml-5"><span className="take yes">Takeaway</span> <span className="deliv yes">Delivery</span></li>
                    <li className="mr-5">
                        <div className="score"><strong>{rating}</strong></div>
                    </li>
                </ul>
            </div>
        </div>
    )

}



export default ItemsContainer;
