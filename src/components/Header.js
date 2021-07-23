/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>Chenyi (Eva) Lyu</h1>
        <Typed
          className="typed-text"
          strings={["learner", "day dreamer", "coder", "traveller"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="# " className="btn-main-offer">contact me</a>
      </div>
    </div>
  )
}

export default Header;


