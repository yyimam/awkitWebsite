import React, { Fragment } from "react";
import Section from "./gComponent/Section";
import UAParser from "ua-parser-js";
import WithScrollbar from "./gComponent/WithScrollbar";



const GroceryStoreCarousel = ({ deviceType }) => {
    return (
      <Fragment>
        <Section><WithScrollbar /></Section>
      </Fragment>
    );
  };
  GroceryStoreCarousel.getInitialProps = ({ req }) => {
    let userAgent;
    if (req) {
      userAgent = req.headers["user-agent"];
    } else {
      userAgent = navigator.userAgent;
    }
    const parser = new UAParser();
    parser.setUA(userAgent);
    const result = parser.getResult();
    const deviceType = (result.device && result.device.type) || "desktop";
    return { deviceType };
  };
  export default GroceryStoreCarousel;