import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
// import { pizza2 } from '../../constants/images';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Welcome to <b style={{fontSize: "40px"}}>Mamme's,</b> where every dish is made with love and
        tradition, just like home. The aroma of our kitchen is an invitation to
        relax and enjoy. Come, take a seat at our table and let us take care of
        you.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;