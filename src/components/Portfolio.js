/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import course from "../images/course.jpg";
import covidmap from "../images/covidmap.jpg";
import scrnaseq from "../images/scrnaseq.jpg";
import noteApp from "../images/noteapp.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Portfolio = () => {

  // Course
  const openPopupboxCourse = () => {
    const content = (
      <div>
        <img className="portfolio-image-popupbox" src={course} alt="Course Enrollment Project..." />
        <p>A front-end web app that renders course information, supporting essential features such as user registration, authentication, and course enrollment/withdraw.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ChenyiLyu/", "_blank")}>Coming soon. Please come back later!</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ChenyiLyu/course_enrollment_system")}>https://github.com/ChenyiLyu/course_enrollment_system</a>
      </div>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Course Enrollment System Project | A React.js/Python/Django/AWS Project",
        },
      },
    });  }

  const popupboxConfigCourse = {
    titleBar: {
      enable: true,
      text: "Course Enrollment System Project | A React.js/Python/Django Project",
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Covid Map App
  const openPopupboxCOVID = () => {
    const content = (
      <div>
        <img className="portfolio-image-popupbox" src={covidmap} alt="COVID Tracker Project..." />
        <p>A map that renders up-to-date COVID cases in USA.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ChenyiLyu/", "_blank")}>Coming soon. Please come back later!</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ChenyiLyu/covid_tracker", "_blank")}>https://github.com/ChenyiLyu/covid_tracker</a>
      </div>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "COVID Tracker | A React.js/Google API project",
        },
      },
    });
  }

  const popupboxConfigCOVID = {
    titleBar: {
      enable: true,
      text: "COVID Tracker | A React.js/Google API project",
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // scRNAseq Project
  const openPopupboxSeq = () => {
    const content = (
      <div>
        <img className="portfolio-image-popupbox" src={scrnaseq} alt="scrnaseq Project..." />
        <p>Evaluated and applied multiple computational biology tools. The customized scRNAseq analysis pipeline identified the contribution of one stem cell population to skin regeneration during expansion.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ChenyiLyu/expansion_project", "_blank")}>https://github.com/ChenyiLyu/expansion_project</a>
      </div>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Mechanical Strech Induced Skin Regeneration Project | A computataional biology project in R",
        },
      },
    });
  }

  const popupboxConfigSeq = {
    titleBar: {
      enable: true,
      text: "Mechanical Strech Induced Skin Regeneration Project | A computataional biology project in R",
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Note app project
  const openPopupboxNote = () => {
    const content = (
      <div>
        <img className="portfolio-image-popupbox" src={noteApp} alt="Note React/Spring Project..." />
        <p>A note web app that support note taking.</p>
        <br />
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ChenyiLyu/", "_blank")}>Coming soon. Please come back later!</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ChenyiLyu/note_app", "_blank")}>https://github.com/ChenyiLyu/note_app</a>
      </div>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Node App | A React/Java/Spring project",
        },
      },
    });
  }

  const popupboxConfigNote = {
    titleBar: {
      enable: true,
      text: "EI?"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row row-cols-auto justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxCourse}>
            <img className="portfolio-image" src={course} alt="Course Enrollment Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxCOVID}>
            <img className="portfolio-image" src={covidmap} alt="COVID Tracker Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxSeq}>
            <img className="portfolio-image" src={scrnaseq} alt="scRNAseq Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxNote}>
            <img className="portfolio-image" src={noteApp} alt="Note React/Spring Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigCourse} />
      <PopupboxContainer {...popupboxConfigCOVID} />
      <PopupboxContainer {...popupboxConfigSeq} />
      <PopupboxContainer {...popupboxConfigNote} />
    </div>
  )
}

export default Portfolio;
