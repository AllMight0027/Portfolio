import React from "react";
import { withRouter } from "react-router-dom";
import { ReactComponent as TeamIcon } from "./team.svg";
import { ReactComponent as AboutMeIcon } from "./aboutme.svg";
import { ReactComponent as EducationIcon } from "./education.svg";
import { ReactComponent as ContactIcon } from "./contact.svg";

const Base = ({ className = "text-dark p-4", children, history }) => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row" style={{ backgroundColor: "black" }}>
          <div className="col-12">
            <div className="topnav" id="myTopnav">
              <a style={{ marginLeft: "-20px" }}></a>
              <a
                className="pl-4 text-white"
                style={{ paddingTop: "0px", cursor: "pointer" }}
                onClick={() => {
                  window.scrollTo(0, 800);
                }}
              >
                <AboutMeIcon /> About Me
              </a>
              <a
                className="pl-4 text-white"
                style={{ paddingTop: "0px", cursor: "pointer" }}
                onClick={() => {
                  window.scrollTo(0, 1200);
                }}
              >
                <TeamIcon /> Projects
              </a>
              <a
                className="pl-4 text-white"
                style={{ paddingTop: "0px", cursor: "pointer" }}
                onClick={() => {
                  //Scroll to About Us
                }}
              >
                <EducationIcon /> Education
              </a>
              <a
                className="pl-4 text-white"
                style={{ paddingTop: "0px", cursor: "pointer" }}
                onClick={() => {
                  //Scroll to About Us
                }}
              >
                <ContactIcon /> Contact Me
              </a>

              <a
                style={{ fontSize: "20px", color: "white" }}
                className="icon pt-4"
                onClick={() => {
                  myFunction();
                }}
              >
                &#9776;
              </a>
            </div>
          </div>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer
        className="footer mt-5 pt-3"
        style={{ background: "rgb(30,30,30)" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center text-white pb-3">
              {" "}
              CONTACT ME <br />
              <a href="mailto:pratyakshsaxena88@gmail.com">
                <img src="https://img.icons8.com/clouds/70/000000/email.png" />
              </a>
              <a href="tel:+91-8009551506">
                <img src="https://img.icons8.com/clouds/70/000000/phone.png" />
              </a>
              <a
                href="http://github.com/AllMight0027"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://img.icons8.com/clouds/70/000000/github.png" />
              </a>
              <a
                href="http://www.linkedin.com/in/pratyaksh-saxena-83a51a90/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://img.icons8.com/clouds/75/000000/linkedin.png" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default withRouter(Base);
