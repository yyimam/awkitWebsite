import React, { useCallback, useEffect } from "react";
import CartModal from "./CartModal";
import DetailPageTable, { mainData } from "./DetailPageTable";
import OrderSum from "./OrderSum";
import Review from "./Review";
import { useParams } from "react-router-dom";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import ReactLoading from "react-loading";
import context from "react-bootstrap/esm/AccordionContext";

const query = gql`
  query($limit: Int, $page: Int, $id: String) {
    getStore(limit: $limit, page: $page, _id: $id) {
      store {
        _id
        storeType
        storeName
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
        searchCategory
        rating
        zipCode
        productID {
          _id
          productMainCategorySlug
          productCategoryLevel1
          productDescriptionLong
          productImgSmall
          productImgLarge
          caseSoldOut
          productName
          StoreID
          storeName
          productAdditionalID {
            _id
            categoryName
            selectUpto
            selectionType
            confirmSelection
            categoryItems {
              itemName
              price
            }
            saved
          }
        }
      }
      totalItem
      limit
      offset
    }
  }
`;

const DetailPage2 = (props) => {
  const { id } = useParams<any>();

  const [modalShow, setModalShow] = React.useState(false);
  const [modelData, setModalData] = React.useState({});
  let rec = mainData;

  const { data, loading, error, refetch } = useQuery(query, {
    // graphql data
    variables: { limit: 10, page: 1, id: id },
  });
  const [reca, setRec] = React.useState({
    _id: "",
    imgSmall: "",
    imgBig: "",
    storeName: "",
    searchCategory: "",
    address: "",
    rating: "",
    productID: [{ productCategoryLevel1: "" }],
    uniqueCategory: [],
  });

  const handlefuction = (e) => {
    const json = { ...e };
    console.log("e", e);
    let dataq = json.productAdditionalID.map((t) => {
      const jsonAdd = { ...t };
      let tjson = jsonAdd.categoryItems.map((s) => {
        const jsoncate = { ...s };
        jsoncate.add = false;
        jsoncate.dis = false;
        return jsoncate;
      });
      jsonAdd.categoryItems = tjson;
      return jsonAdd;
    });
    json.productAdditionalID = dataq;
    setModalShow(true);
    setModalData(json);
  };

  useEffect(() => {
    let rec = data?.getStore.store[0];

    const uniqueCategory = [
      ...new Set(rec?.productID.map((item: any) => item.productCategoryLevel1)),
    ];

    let record = { ...rec, uniqueCategory: uniqueCategory };

    setRec(record);

    return () => {};
  }, []);

  return loading ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20%",
      }}
    >
      <ReactLoading type={"spin"} color={"tomato"} className="spin-123" />
    </div>
  ) : (
    <div>
      {/* {data?.getStore.store.map((rec: any) => { */}
      {/* const uniqueCategory = [
		...new Set(productID.map((item: any) => item.productCategoryLevel1)),
	]; */}
      return (
      <div data-spy="scroll" data-target="#secondary_nav" data-offset="75">
        <main>
          <div
            id="aqib"
            className="hero_in detail_page background-image"
            style={{ backgroundImage: `url(${reca.imgBig})` }}
            key={reca._id}
          >
            <div
              className="wrapper opacity-mask"
              data-opacity-mask="rgba(0, 0, 0, 0.5)"
            >
              <div className="container">
                <div className="main_info">
                  <div className="row">
                    <div className="col-xl-4 col-lg-5 col-md-6">
                      <div className="head">
                        <div className="score">
                          <span>
                            Superb<em>350 Reviews</em>
                          </span>
                          <strong>{reca.rating}</strong>
                        </div>
                      </div>
                      <h1>{reca.storeName}</h1>
                      {reca.address} -{" "}
                      <a
                        href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                        target="blank"
                      >
                        Get directions
                      </a>
                    </div>
                    <div className="col-xl-8 col-lg-7 col-md-6">
                      <div className="buttons clearfix">
                        <span className="magnific-gallery">
                          <a
                            href="img/detail_1.jpg"
                            className="btn_hero"
                            title="Photo title"
                            data-effect="mfp-zoom-in"
                          >
                            <i className="icon_image"></i>View photos
                          </a>
                          <a
                            href="img/detail_2.jpg"
                            title="Photo title"
                            data-effect="mfp-zoom-in"
                          ></a>
                          <a
                            href="img/detail_3.jpg"
                            title="Photo title"
                            data-effect="mfp-zoom-in"
                          ></a>
                        </span>
                        <a href="#0" className="btn_hero wishlist">
                          <i className="icon_heart"></i>Wishlist
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /row --> */}
                </div>
                {/* <!-- /main_info --> */}
              </div>
            </div>
          </div>

          {/* <!--/hero_in--> */}

          <nav className="secondary_nav sticky_horizontal">
            <div className="container">
              <ul id="secondary_nav" className="heronavbtn">
                <li>
                  <a
                    className="list-group-item list-group-item-action blue"
                    href="#section-1"
                  >
                    Starters
                  </a>
                </li>
                <li>
                  <a
                    className="list-group-item list-group-item-action"
                    href="#section-2"
                  >
                    Main Courses
                  </a>
                </li>
                <li>
                  <a
                    className="list-group-item list-group-item-action"
                    href="#section-3"
                  >
                    Desserts
                  </a>
                </li>
                <li>
                  <a
                    className="list-group-item list-group-item-action"
                    href="#section-4"
                  >
                    Drinks
                  </a>
                </li>
                <li>
                  <a
                    className="list-group-item list-group-item-action"
                    href="#section-5"
                  >
                    <i className="icon_chat_alt"></i>Reviews
                  </a>
                </li>
              </ul>
            </div>
            <span></span>
          </nav>
          <div className="bg_gray" style={{ transform: "none" }}>
            <div
              className="container margin_detail"
              style={{ transform: "none" }}
            >
              <div className="row" style={{ transform: "none" }}>
                <div className="col-lg-8 list_menu scrolly">
                  {/* <!-- /secondary_nav --> */}

                  {reca.uniqueCategory.map((rec: any) => {
                    // console.log("check reco", rec)
                    let t: any = reca.productID.filter(
                      (ele) => ele.productCategoryLevel1 === rec
                    );
                    return (
                      <DetailPageTable
                        data={t}
                        catagoryName={rec}
                        callFunction={handlefuction}
                      />
                    );
                  })}
                </div>

                <OrderSum
                // ModelData={modelData}
                />
                <CartModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  ModelData={modelData}
                  // parentFunc={parentHandleClick(event)}
                />
              </div>
            </div>
          </div>
          <Review />
        </main>
      </div>
      );
      {/* })} */}
    </div>
  );
};

export default DetailPage2;
// const object2 = Object.create(e);
// object2.bar = "bar";
// console.log(object2);
// e.productAdditionalID[0].categoryItems[1].checked = false;
// d.productAdditionalID[0].categoryItems[2].checked = false;

// 	{
// 		"0": {
// categoryItems:
// 0: {__typename: "CatItems", itemName: "Breadtzel", price: 1}
// 1: {__typename: "CatItems", itemName: "English Muffin", price: 1}
// 2: {__typename: "CatItems", itemName: "Multi Grain", price: 2}
// 3: {__typename: "CatItems", itemName: "Butter Roll", price: 1}
// categoryName: "Choose your bread"
// confirmSelection: "Required"
// saved: null
// selectUpto: "1"
// selectionType: "radio"
// __typename: "ProductAdditional"
// _id: "602bd25bd88be10028c6b5d9"
// 		}
// 1:{
// categoryItems:
// 0: {__typename: "CatItems", itemName: "Arugula", price: 3}
// 1: {__typename: "CatItems", itemName: "Egg", price: 1}
// 2: {__typename: "CatItems", itemName: "Ham", price: 2}
// 3: {__typename: "CatItems", itemName: "Onion", price: 1}
// categoryName: "Add Ons."
// confirmSelection: "Optional"
// saved: null
// selectUpto: "4"
// selectionType: "checkbox"
// __typename: "ProductAdditional"
// _id: "602bd3aed88be10028c6b5de"
// }
// 2:{
// categoryItems:
// 0: {__typename: "CatItems", itemName: "Blueberry", price: null}
// 1: {__typename: "CatItems", itemName: "Raspberry", price: null}
// 2: {__typename: "CatItems", itemName: "Peanut Butter", price: null}
// 3: {__typename: "CatItems", itemName: "Banana", price: null}
// categoryName: "Flavor Choice"
// confirmSelection: "Require"
// saved: null
// selectUpto: "3"
// selectionType: "checkbox"
// __typename: "ProductAdditional"
// _id: "602bd8fad88be10028c6b5e4"
// }
// 	}
