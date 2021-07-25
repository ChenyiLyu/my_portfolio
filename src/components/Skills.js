import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs, faAws, faDocker } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode, faPaw, faGamepad, faCameraRetro, faHiking, faCoffee, faBookReader, faSuitcaseRolling, faPuzzlePiece} from "@fortawesome/free-solid-svg-icons";
import { FaJava, FaPython, FaJs, FaRProject, FaHtml5, FaGithub, FaReact, FaCat} from 'react-icons/fa';
import { FaDna } from 'react-icons/fa';
import { SiMathworks } from "react-icons/si";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1 className="py-5">my skills and interests</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
              <h3>Languages</h3>
                <div className="d-flex justify-content-center">
                    <div className="circle"><FaJava size="1x" /></div>
                    <div className="circle"><FaPython size="1x" /></div>
                    <div className="circle"><FaJs size="1x" /></div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="circle"><FaRProject size="1x" /></div>
                    <div className="circle"><SiMathworks size="1x" /></div>
                    <div className="circle"><FaHtml5 size="1x" /></div>
                </div>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
              <h3>Tools and Techs</h3>
              <div className="d-flex justify-content-center">
                    <div className="circle"><FontAwesomeIcon icon={faNodeJs} size="3x"/></div>
                    <div className="circle"><FaGithub size="1x" /></div>
                    <div className="circle"><FaReact size="1x" /></div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="circle"><FontAwesomeIcon icon={faAws} size="3x"/></div>
                    <div className="circle"><FontAwesomeIcon icon={faDocker} size="3x"/></div>
                    <div className="circle"><FaDna size="1x" /></div>
                </div>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faGamepad} size="2x" /></div>
              <h3>Interests</h3>
              <div className="d-flex justify-content-center">
                    <div className="circle"><FontAwesomeIcon icon={faCameraRetro} size="3x"/></div>
                    <div className="circle"><FontAwesomeIcon icon={faCoffee} size="3x" /></div>
                    <div className="circle"><FontAwesomeIcon icon={faSuitcaseRolling} size="3x" /></div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="circle"><FontAwesomeIcon icon={faHiking} size="3x" /></div>
                    <div className="circle"><FontAwesomeIcon icon={faBookReader} size="3x" /></div>
                    <div className="circle"><FontAwesomeIcon icon={faPuzzlePiece} size="3x" /></div>
                </div>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faPaw} size="2x" /></div>
              <h3>Utimate Cat Person</h3>
              <div className="circle"><FaCat size="1x" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Skills;
