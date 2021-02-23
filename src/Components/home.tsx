import React, { Component } from "react";
import Header from "./Header";
import Slider from "./slider";
import TopRatedResturaunt from "./TopRatedResturaunt";
import HomeStartOrder from "./HomeStartOrder/HomeStartOrder";
import { store } from "./store";
import HomeOnlineBanner from "./homeOnlineBanner";



class Home extends Component{
    
    
    render(){
        
        store.dispatch({type: "notFixedClass", data: "header black_nav clearfix element_to_stick"})
        
        // console.log("data", store.getState());
        return(
            <div>
                <Header />
                <Slider />
                <TopRatedResturaunt />
                <HomeOnlineBanner />
                <HomeStartOrder />
            </div>
        )
    }
}
export default Home;