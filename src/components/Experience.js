import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021.9-Now</h3>
            <p>MSDS @New York University</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019.8-2021.5</h3>
            <p>MSE-BME @Johns Hopkins University</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019.12-2021.5</h3>
            <p>Research Assistant @Johns Hopkins School of Medicine, Garza Lab</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018-2019</h3>
            <p>B.S. in Bioprocess Engineer @SUNY-College of Environmental Science and Forestry</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2015-2018</h3>
            <p>B.Eng. in Bioengineering @Beijing University of Chemical Technology</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
