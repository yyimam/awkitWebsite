import React, { Component, Fragment } from "react";
import "./App.css";
import Home from "./Components/MainPage/mainpage";
import Footer from "./Components/footer";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ListSideMap from "./Components/ListSideMap/ListSideMap";
import HeaderNav from "./Components/ListSideMap/side map components/HeaderNav";
import ListMasonry from "./Components/ListingMasonry/ListMasonry";
import DetailPage2 from "./Components/DetailPage2/DetailPage2";
import DetailPage3 from "./Components/DetailPage3/DetailPage3";
import OrderTracking from "./Components/OrderTracking/OrderTracking";
import ConfirmOrder from "./Components/ConfirmOrder/ConfirmOrder";
// import Contact from "./Components/Contact/Contact";
import Review from "./Components/DetailPage2/Review";
import Order from "./Components/Order/Order";
import SignUp from "./Components/SignUp/SignUp";
import SubmitRestaurant from "./Components/SubmitRestaurant/SubmitRestaurant";
import SubmitRider from "./Components/SubmitRider/SubmitRider";
import GroceryStores from "./Components/GroceryStores/GroceryStores";
import GStore from "./Components/GroceryStores/gComponent/gstore";
// import Switch from "react-bootstrap/esm/Switch";

interface IProps {
}


interface IState {
  showHeader?: boolean;
  showFooter?: boolean
}


class App extends Component<IState> {

  constructor(props: IState) {
    super(props);
    this.state = {
      showHeader: false,
      showFooter: false
    }
  }

  componentDidMount() {
    if (window.location.pathname !== "/") {
      this.setState({
        showHeader: true
      })
    }
  }

  render() {

    return (
      <Fragment>

        <Router>

          {
            this.state["showHeader"] ? <HeaderNav /> : ""
          }

          {/* <HeaderNav /> */}

          <Switch>

            <Route path="/" exact component={Home} />
            <Route exact path="/ListSideMap" component={ListSideMap} />
            <Route path="/ListMasonry" component={ListMasonry} />
            {/* <Route path="/DetailPage" component={DetailPage2} /> */}
            <Route path={"/DetailPage/:id"} component={DetailPage2} />
            <Route path="/DetailPage3" component={DetailPage3} />
            <Route path="/OrderTracking" component={OrderTracking} />
            {/* <Route path="/Contact" component={Contact} /> */}
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Order" component={Order} />
            <Route path="/SubmitRestaurant" component={SubmitRestaurant} />
            <Route path="/SubmitRider" component={SubmitRider} />
            <Route path="/Review" component={Review} />
            <Route path="/ConfirmOrder" component={ConfirmOrder} />
            <Route path="/GroceryStores" component={GroceryStores} />
            <Route path="/GStore" component={GStore} />

          </Switch>

          {
            window.location.pathname !== '/' ? <Footer /> : null
          }

        </Router>
      </Fragment>
    )
  }
}

export default App;
