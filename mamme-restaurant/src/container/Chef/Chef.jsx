import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.cheff} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            Where every dish is made with Mama's special touch.
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          We believe in the power of fresh, quality ingredients. Every recipe is
          a testament to Mama's passion for delicious food. From the first bite
          to the last, savor the authentic flavors. Discover a meal made with
          love at Mamme's restaurant.{" "}
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Abdure Shemsu</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.Abd} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
