import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__header-blockOne">
      <SubHeading />
      <h1 className="app__header-title">
        The key to <br />
        Fine dining
      </h1>

      <p className="app__header-paragraph">
        Sit tellus lobortis sed senectus vivamus molestie.
        <br /> Condimentum volutpat morbi facilisis quam scelerisque
        <br /> sapien. Et, penatibus aliquam amet tellus
      </p>
      <button type="button" className="app__header-button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
