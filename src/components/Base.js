import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { ReactComponent as TeamIcon } from "./team.svg";
import { ReactComponent as AboutMeIcon } from "./aboutme.svg";
import { ReactComponent as EducationIcon } from "./education.svg";
import { ReactComponent as ContactIcon } from "./contact.svg";
import { ReactComponent as SkillsIcon } from "./skills.svg";
import { ReactComponent as InsternshipIcon } from "./internship.svg";
import $ from "jquery";

const Base = ({ className = "text-dark p-4", children, history }) => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      document.getElementById("name").style.top = "55%";
      document.getElementById("job").style.top = "83%";
      console.log("open");
    } else {
      x.className = "topnav";
      document.getElementById("name").style.top = "40%";
      document.getElementById("job").style.top = "68%";
      console.log("close");
    }
  }

  const [values, setvalues] = useState({
    name: "",
    phone: "",
    message: "",
    success: "",
    error: "",
  });

  const { name, phone, message, success, error } = values;

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    return setvalues({
      ...values,
      [name]: value,
      success: false,
      error: false,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (name.trim() !== "" && phone.toString().length === 10)
      setvalues({
        ...values,
        success: true,
        name: "",
        phone: "",
        message: "",
        error: "",
      });
    else {
      if (name.trim() === "" && phone.toString().length !== 10)
        setvalues({
          ...values,
          error: "Enter your name and phone number.",
          success: false,
        });
      else if (name.trim() === "")
        setvalues({
          ...values,
          error: "Enter your name please.",
          success: false,
        });
      else if (phone.toString().length !== 10)
        setvalues({
          ...values,
          error: "Enter 10 digits phone number.",
          success: false,
        });
    }
  };

  window.onscroll = function () {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("goTop").style.display = "block";
    } else {
      document.getElementById("goTop").style.display = "none";
    }
  };

  return (
    <div>
      <img
        id="goTop"
        src="https://img.icons8.com/fluent/35/000000/up.png"
        style={{
          // position: "absolute",
          bottom: 15,
          right: 15,
          cursor: "pointer",
        }}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />
      <div className="container-fluid">
        <div className="row" style={{ backgroundColor: "black" }}>
          <div className="col-12">
            <div className="topnav" id="myTopnav">
              <a style={{ marginLeft: "-20px" }}></a>
              <a
                className="pl-4 text-white"
                style={{ paddingTop: "2px", cursor: "pointer" }}
                onClick={() => {
                  window.scrollTo(
                    0,
                    document.getElementById("aboutme").getBoundingClientRect()
                      .top - 50
                  );
                }}
              >
                <AboutMeIcon /> {"  "}About Me
              </a>
              <a
                className="pl-4 text-white"
                style={{ paddingTop: "0px", cursor: "pointer" }}
                onClick={() => {
                  window.scrollTo(
                    0,
                    document.getElementById("projects").getBoundingClientRect()
                      .top - 50
                  );
                }}
              >
                <TeamIcon /> Projects
              </a>
              <a
                className="pl-4 text-white"
                style={{ paddingTop: "0px", cursor: "pointer" }}
                onClick={() => {
                  window.scrollTo(
                    0,
                    document.getElementById("skills").getBoundingClientRect()
                      .top - 50
                  );
                }}
              >
                <SkillsIcon /> Skills
              </a>
              <a
                className="pl-4 text-white"
                style={{ paddingTop: "0px", cursor: "pointer" }}
                onClick={() => {
                  window.scrollTo(
                    0,
                    document.getElementById("education").getBoundingClientRect()
                      .top - 50
                  );
                }}
              >
                <InsternshipIcon /> Education{" "}
              </a>
              <a
                className="pl-4 text-white"
                style={{ paddingTop: "4px", cursor: "pointer" }}
                onClick={() => {
                  window.scrollTo(0, document.body.scrollHeight);
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
        <div className="container-fluid text-white">
          <div className="row pb-2">
            <div className="col-12 text-center ">
              <div className="row">
                <div className="col-12 text-center mb-4"> Connect With Me</div>
              </div>
              <div className="row">
                <div className="col-12 text-center text-white pb-3">
                  {" "}
                  <a href="mailto:pratyakshsaxena88@gmail.com">
                    <img
                      src="https://img.icons8.com/ios/150/ffffff/mail.png"
                      style={{ width: 48 }}
                    />
                  </a>
                  <a
                    href="http://github.com/AllMight0027"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://img.icons8.com/ios/150/ffffff/github.png"
                      className="ml-3"
                      style={{ width: 48 }}
                    />
                  </a>
                  <a
                    href="http://www.linkedin.com/in/pratyaksh-saxena-83a51a90/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://img.icons8.com/ios/150/ffffff/linkedin.png"
                      className="ml-3"
                      style={{ width: 48 }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default withRouter(Base);
