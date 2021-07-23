import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Hello! I am Eva. I am currently a first year Master student at New York University. I study Data Science.

            Meanwhile, I am interested in software developing (I am seeking a Full-Stack internship position for 2022 summer!). 

            I have a interdisciplinary engineer background. 
            My aspiration of developing products that could improve every day life has always motivated me during my journey.
            I love travelling and hiking, and I have a long long to-go list. My favorite pastime is watching Conan Manga again and again on a cozy sofa.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe