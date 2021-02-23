import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import { createFalse } from "typescript";
import "./mode.css";
let json = require("./json.json");

function CartModal(props, index) {
  let items = props.ModelData;
  const rec = props.ModelData.productAdditionalID;
  const [addItems, setaddItems] = useState<any>([]);
  const [condition, setcondition] = useState<any>([]);
  const [colr, setcolr] = useState<any>([]);
  const [ref, setref] = useState<any>([]);
  const [selected, setselected] = useState<any>([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setaddItems(rec);
    console.log("rec", rec);
    var lkj = rec?.reduce((acc, value) => {
      acc[value.id] = React.createRef();
      return acc;
    }, {});

    setref(lkj);

    var asd = rec?.map((resa) => {
      return resa.selectUpto;
    });
    setcondition(asd);
    var s = rec?.map((resa) => {
      if (resa.confirmSelection === "true") {
        return false;
      } else {
        return null;
      }
    });
    setselected(s);
    var co = rec?.map((resa) => {
      if (resa.confirmSelection === "true") {
        return "Crimson";
      } else {
        return "Black";
      }
    });
    setcolr(co);
  }, [rec]);

  const handleClick = (i, cdata, index, type) => {
    const json = [...addItems];
    if (json[i].categoryItems[index].add === true) {
      json[i].categoryItems[index].add = false;
      if (type === "radio") {
        json[i].categoryItems[index].add = true;
      }
    } else {
      json[i].categoryItems[index].add = true;
      if (type === "radio") {
        json[i].categoryItems.map((t, ind) => {
          if (ind === index) {
            var asd = colr;
            asd[i] = "SeaGreen";
            setcolr(asd);
            var asd2 = selected;
            asd2[i] = true;
            setselected(asd2);
            t.add = true;
          } else {
            t.add = false;
          }
        });
      }
    }

    if (!(type === "radio")) {
      var a = json[i].categoryItems.filter((t) => t.add === true).length;
      if (Number(condition[i]) === a) {
        var as = json[i].categoryItems.map((t) => {
          if (t.add === false) {
            var asd = colr;
            if (!(colr[i] === "black")) {
              asd[i] = "SeaGreen";
              setcolr(asd);
              var asd2 = selected;
              asd2[i] = true;
              setselected(asd2);
              t.dis = true;
            }
          }
        });
      } else {
        var as = json[i].categoryItems.map((t, index) => {
          var asd = colr;
          if (!(colr[i] === "Black")) {
            asd[i] = "Crimson";
            setcolr(asd);
            var asd2 = selected;
            asd2[i] = false;
            setselected(asd2);
            t.dis = false;
          }
        });
      }
    }
    console.log("asdsdasd2", ref);
    setaddItems(json);
  };

  const addtoCart = () => {
    console.log(
      "cart",
      "addItems",
      addItems,
      "condition",
      condition,
      "colr",
      colr,
      "ref",
      ref,
      "selected",
      selected,
      "count",
      count
    );
    // addItems.map((dat, index) =>{
    //     var c = dat.categoryItems.filter((t) => t.add === true).length
    //     // if(Number(condition[index] === c)){

    //     // }else{

    //     // }
    // });
  };

  const ItemsDetails = () => {
    if (addItems) {
      return addItems.map((res, index) => {
        return (
          <div key={index} style={{ marginTop: "50px" }}>
            <div style={{ marginBottom: "1%" }}>
              <div>
                <h6 style={{ display: "inline" }}>{res.categoryName}</h6>
                <h6
                  id={index}
                  className="float-right"
                  style={{
                    color: colr[index],
                  }}
                >
                  {res.confirmSelection === "true" ? "Required" : "Optional"}
                  {/* {res.confirmSelection} */}
                </h6>
              </div>
              <small>{"Select " + res.selectUpto}</small>
            </div>
            {/* <ul className="clearfix"> */}

            {res.categoryItems.map((cat, index1) => {
              return (
                <ul className="clearfix" style={{ display: "inline" }}>
                  <li
                    style={{
                      listStyle: "none",
                      width: "100%",
                      marginBottom: " -2%",
                    }}
                    key={index1}
                  >
                    <label
                      className={
                        res.selectionType == "radio"
                          ? "container_radio"
                          : "container_check"
                      }
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {cat.itemName}
                      <small>${cat.price}</small>
                      {/*handleClic(cat, res)  */}
                      {/* onChange={() => { handleChange() }} className={res.cCLass} value={"option" + res.option} */}
                      <input
                        type={res.selectionType}
                        disabled={cat.dis}
                        checked={cat.add}
                        name={res.selectionType}
                        ref={ref[index]}
                        id={index1}
                        defaultChecked={false}
                        onChange={(e) =>
                          handleClick(index, cat, index1, res.selectionType)
                        }
                      />{" "}
                      {/*"inputclass" + res.option */}
                      <span className="checkmark"></span>
                      {/* checked={check[cat.itemName] === cat.itemName?check[cat.itemName]:false} */}
                    </label>
                  </li>
                </ul>
              );
            })}

            {/* </ul> */}
          </div>
        );
      });
    } else {
      return null;
    }
  };

  function Counter() {
    return (
      <div className="Counter">
        <button
          className="counterBtn decrement"
          disabled={count == 0}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <small className="counterBox"> {count}</small>
        <button
          className="counterBtn increment"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    );
  }

  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ width: "100%" }}
        className="modelTag"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3 className="h3" style={{ fontWeight: "bold" }}>
              {items.productName}
            </h3>
            <h6 className="h6" style={{ fontWeight: "lighter", color: "grey" }}>
              {items.productDescriptionLong}
            </h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ overflowY: "scroll", maxHeight: "600px", width: "100%" }}
          className="modelMainTag"
        >
          <div
            className="imgContainer"
            style={{ width: "100%", maxInlineSize: "100%" }}
          >
            <img
              src={items.productImgSmall}
              width="460"
              height="310"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <ItemsDetails />
          <textarea
            name="description"
            placeholder=" Ask your special requirements."
            style={{
              width: "100%",
              marginTop: "50px",
              border: "1.5px solid rgb(180, 175, 175)",
              borderRadius: "5px",
            }}
            cols={59}
            rows={5}
          />
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "flex-start", width: "100%" }}>
          <div className="mFooter">
            <Counter />
            <Button
              className="btn_1 ml-4"
              style={{ marginLeft: "10px" }}
              onClick={(e) => {
                addtoCart();
              }}
            >
              Add to cart
            </Button>
            <Button className=" btn_1 ml-4" onClick={props.onHide}>
              Close
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CartModal;
