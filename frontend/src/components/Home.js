import React from "react";

import amazonBanner from "../images/amazon-prime-banner.jpeg";

import Product from "./Product";

import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src={amazonBanner} 
                    alt="amazon_banner" />
            </div>

            <div className="home__row">
                <Product />
                <Product />
            </div>

            <div className="home__row">
                <Product />
                <Product />
                <Product />
            </div>

            <div className="home__row">
                <Product />
            </div>
        </div>
    )
}

export default Home
