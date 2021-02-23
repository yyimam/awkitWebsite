import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./mainPageStyle.css"
import img1 from "./images/iconBask.png"
import img2 from "./images/icoShop.png"
import img3 from "./images/icoTrim.png"
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { connect } from 'react-redux';
import { send_Data } from '../store/actions';
import { connect } from "react-redux";

// import { useQuery, gql, useLazyQuery } from '@apollo/client';

// const query = gql`
// query ($limit: Int, $page: Int, $zipCode: Int, $storeType: String){
//     getStore(limit: $limit, page:$page, zipCode:$zipCode, storeType:$storeType){
//         _id
//         storeType
//         storeName
//         zipCode
//         rating
//         storeWorkingTimeHourly
//         storeWorkingTimeWeekly
//         shortDescription
//         longDescription
//         imgSmall
//         imgBig
//         logo
//         deliveryType
//         address
//         phoneNumber
//         contactPerson
//         coords {
//           lat
//           long
//         }
//         searchCategory
//         saved
//         updated
//         pickUp
//     }
//   }
// `





const MainPage = (props: any) => {

    // console.log("props", props.reduxData);

    // ------------------STATES-----------------------
    const [zipCodeInput, setZipCode] = useState("");
    // const [storeType, setStoreType] = useState("");
    // const { zipCode, storeType } = props.reduxData;


    // const [callRecord, { data, loading, error, refetch }] = useLazyQuery(query, {
    //     variables: { "limit": 20, "page": 0, "zipCode": + zipCodeInput, "storeType": storeType },
    // })

    // --------------HANDLE CLICK------------------------------
    const HandleClick = (e) => {
        if (zipCodeInput === "") {
            alert("please provide zipcode first")
            return
        }
        send_Data({ zip: zipCodeInput, storeTyp: e })
        props.history.push('/ListMasonry')
    }



    return (
        <div className="mainPage123" >
            <div className="maaain_divvv">
                <div className="heaaader123">
                    <span className="signinnnnn">
                        <Link to={"/DetailPage2"}> signin</Link>
                    </span>
                    <span className="signuuuup">
                        <Link to={"/SignUp"}> signup</Link>
                    </span>
                </div>

                {/* <!-- ///////// FIND FODD DIV ///////////// --> */}
                <div className="findFoooood_div123">

                    <div className="paaaage_heading123">
                        <h1>Your Favorite Food, on the way!</h1>
                    </div>



                    {/* <!-- ///////// RADIO BUTTONS DIV ///////////// --> */}
                    {/* 
                    <div className="raaaadio_btns123">
                        <div className="r_btn123"><input type="radio" name="radio" id="" /> Restaurants</div>
                        <div className="r_btn123"><input type="radio" name="radio" id="" /> Grocery Stores</div>
                        <div className="r_btn123"><input type="radio" name="radio" id="" /> Convenience Stores</div>
                    </div> */}


                    {/* <!-- ///////// SEARCH LOCATION DIV ///////////// --> */}

                    <div className="seaaaarch_loc123">
                        <div className="drp_dwnnnn123">
                            <div><i className="fas fa-caret-down"></i></div>
                            <div>
                                <h4>FIND LOCATION</h4>
                            </div>
                        </div>

                        <div className="srch_innnnp123">
                            <input type="number" name="loc" id="loc" placeholder="Enter your location" onChange={(e) => setZipCode(e.target.value)} value={zipCodeInput} />
                        </div>

                        <div className="src_icnnnn_div123">
                            <div className="spaceeee"></div>
                            <div className="iconnnnn_srch123" ><i className="fas fa-search"></i></div>
                        </div>
                    </div>


                    {/* <!-- ///////// FONT ICON DIV ///////////// --> */}

                    <div className="fontIcon_div123">

                        <div className="_icon123">
                            <button onClick={() => HandleClick("Restaurant")} >
                                <div className="img_div123">
                                    <img src={img1} alt="" srcSet="" />
                                </div>
                                <div>
                                    <p>Restaurants</p>
                                </div>
                            </button>
                        </div>


                        <div className="_icon123">
                            <button onClick={() => HandleClick("Grocery")}>
                                <div className="img_div123">
                                    <img src={img2} alt="" srcSet="" />
                                </div>
                                <div>
                                    <p>Grocery Stores</p>
                                </div>
                            </button>
                        </div>

                        <div className="_icon123">
                            <button onClick={() => HandleClick("convenienceStore")}>
                                <div className="img_div123">
                                    <img src={img3} alt="" srcSet="" />
                                </div>
                                <div>
                                    <p>Convenience Stores</p>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    reduxData: state.reducerZipCode,
    // reduxGraphData: state.reducerGraphqlRecord
})


export default connect(mapStateToProps, null)(MainPage);