import { Wrap } from "../wrap";
import { FaDownload } from "react-icons/fa";
import aboutPic from "../../assets/about.jpg";
import "./about.style.scss";

import resume from "./resume.pdf";
import Skills from "../skills/skills.component";
const About = () => {
  const handleDownloadResume = () => {
    window.open(resume, "_blank");
  };

  return (
    <div className="about">
      <div className="about-page">
        {/* <div className="about-image">
          <img className="about-pic" src={aboutPic} alt="my-pic" />
        </div> */}
        <div className="about-section">
          <div className="section">
            <div>
              <h1>About Me</h1>
            </div>
            <div className="me-section">
              <p>
                I am passionate about crafting immersive and captivating digital
                experiences by creating dynamic and interactive websites and
                applications. I am always motivated to improve my skills and
                stay up-to-date with the latest industry trends and
                technologies. Seeing my work come to life on the internet brings
                me great satisfaction and a sense of fulfillment.
              </p>
            </div>
            <button className="download-button" onClick={handleDownloadResume}>
              View Resume
              <FaDownload className="download-icon" />
            </button>
          </div>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Wrap(About, "about");
