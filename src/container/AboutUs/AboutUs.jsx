import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      {/* <img src={images.G} alt="G_overlay" /> */}
      <img src={images.G} alt="Moverlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Welcome to Mamme's, a place where the heart of home cooking meets the
          warmth of Ethiopian hospitality, right here in Arba Minch. Inspired by
          the cherished traditions and loving hands of "Mamme" (a term of
          endearment for a mother or grandmother), our restaurant is a
          celebration of authentic flavors and the joy of sharing a meal
          together..
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          The story of Mamme's began not in a grand opening, but in the heart of
          a family kitchen right here in Arba Minch. For generations, the
          recipes we now share were lovingly prepared by our own "Mamme" – a
          woman whose passion for food was only matched by her desire to nourish
          and bring people together.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
