import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Ikigai: The Japanese secret to a long and happy life"
            price={11.99}
            image="https://m.media-amazon.com/images/I/51T8OXMiB5L.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood KM283 Prospero Stand Mixer 220-240 Volt/ 50-60 Hz, FOR OVERSEAS USE ONLY, (INTERNATIONAL VOLT & PLUG) WILL NOT WORK IN THE US, OUR PRODUCT ARE BRAND NEW, WE DO NOT SELL USED OR REFURBISHED."
            price={499.0}
            image="https://images-na.ssl-images-amazon.com/images/I/712jyo5CEML._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={3}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd Generation) Smart Speaker with Alexa, Charcoal Fabric"
            price={98.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={3}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-fi, 128GB) - Silver (4TH Generation)"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 X 1440"
            price={1094.98}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
