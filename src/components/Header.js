/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1 className="h1-main-offer">Hi! I'm Chenyi (Eva) Lyu 👀</h1>
        <Typed
          className="typed-text"
          strings={["learner", "day dreamer", "coder", "hiker", "cooker", "dwell in possibility", "would like to become a craftsman someday"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer" href="#">contact me</Link>
      </div>
    </div>
  )
}

export default Header;


