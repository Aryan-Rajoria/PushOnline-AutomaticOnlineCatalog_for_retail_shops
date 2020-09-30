import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src=""
                    alt="home_page_main_image"
                />

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Sony SRS-XB12 Wireless Extra Bass Bluetooth Speaker"
                        price={98.99}
                        rating={5}
                        image="data:image/webp;base64,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"
                        // image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
