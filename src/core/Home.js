import React, { useEffect, useState } from "react";
import Base from "../components/Base";
import Particles from "react-particles-js";
import "../App.css";
import Type from "../components/Type";
import { getAllUpcomingEvents } from "./helper/apicalls";
import Type2 from "../components/Type2";
const Home = () => {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    document.body.style.background = "black";
  }, [filter]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <Base>
      <div className="container-fluid" style={{ height: "750px" }}>
        <Type />
        <br />
        <Type2 stop={true} />
        <Particles
          params={{
            polygon: {
              number: {
                value: 10,
                density: {
                  // enable: true,
                  value_area: 10,
                },
              },
            },
          }}
        />
      </div>
      <div className="container-fluid text-white">
        <div className="row mt-5" style={{ height: "350px" }}>
          <div className="col-12 text-center">
            <h2>About Me</h2>
          </div>
          <br />
          <div className="row">
            <div className=" offset-sm-1 col-sm-10 col-sm-4 text-center">
              <h6 style={{ lineHeight: "2em" }}>
                I am a <b>Full Stack Developer</b>, looking for a challenging
                role so that I can use my skills and capabilities through
                sincere dedication and hard work for self-development and to
                contribute in the team's success. Presently I am serving as the{" "}
                <b>Web And App Development Head </b> for IEEE SRMIST Student
                Chapter.
              </h6>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-12 text-center">
            <h2>Projects</h2>
          </div>
          <br />
        </div>
        <div className="text-right row">
          <div className="col-xl-2 offset-xl-10 col-md-4 offset-md-8 col-sm-12">
            <select
              onChange={handleChange}
              className="form-control bg-dark text-light"
            >
              <option value="">All Projects</option>
              <option value="Full Stack">Full Stack</option>
              <option value="Backend">Backend</option>
              <option value="Frontend">Frontend</option>
            </select>
          </div>
        </div>

        <div className="row mt-3">
          {(filter === "" || filter === "Full Stack") && (
            <div className="col-xl-4 col-sm-12 col-md-6 mt-3">
              <div
                className="card mt-1 h-100 text-white"
                style={{ background: "rgb(40,40,40)" }}
              >
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="3"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="4"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="5"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="6"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (238).png")}
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (239).png")}
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (243).png")}
                        alt="Third slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (244).png")}
                        alt="Fourth slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (245).png")}
                        alt="Fifth slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (246).png")}
                        alt="Sixth slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (247).png")}
                        alt="Seventh slide"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>

                <div className="card-body">
                  <h4 className="card-title mt-1">
                    Complaint Filing And Follow Up Register
                  </h4>
                  <p className="card-text ">Description</p>{" "}
                  <div className="row">
                    <div className="col-6 text-left">
                      <a
                        className="btn pt-2 text-white icon-cog"
                        style={{ background: "black" }}
                      >
                        View Code
                      </a>
                    </div>
                    <div className="col-6 text-right">
                      <a
                        className="btn pt-2 text-white icon-cog"
                        style={{ background: "black" }}
                      >
                        Visit Site
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {(filter === "" || filter === "Full Stack") && (
            <div className="col-xl-4 col-sm-12 col-md-6 mt-3">
              <div
                className="card mt-1 h-100 text-white"
                style={{ background: "rgb(40,40,40)" }}
              >
                <div
                  id="carouselExampleIndicators1"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators1"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators1"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators1"
                      data-slide-to="2"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators1"
                      data-slide-to="3"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators1"
                      data-slide-to="4"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (248).png")}
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (249).png")}
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (250).png")}
                        alt="Third slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (251).png")}
                        alt="Fourth slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (252).png")}
                        alt="Fifth slide"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators1"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators1"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>

                <div className="card-body">
                  <h4 className="card-title mt-1">E-Commerce Site</h4>
                  <p className="card-text ">Description</p>{" "}
                  <div className="row">
                    <div className="col-6 text-left">
                      <a
                        className="btn pt-2 text-white icon-cog"
                        style={{ background: "black" }}
                      >
                        View Code
                      </a>
                    </div>
                    <div className="col-6 text-right">
                      <a
                        className="btn pt-2 text-white icon-cog"
                        style={{ background: "black" }}
                      >
                        Visit Site
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {(filter === "" || filter === "Frontend") && (
            <div className="col-xl-4 col-sm-12 col-md-6 mt-3">
              <div
                className="card mt-1 h-100 text-white"
                style={{ background: "rgb(40,40,40)" }}
              >
                <div
                  id="carouselExampleIndicators3"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators3"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators3"
                      data-slide-to="1"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (258).png")}
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (259).png")}
                        alt="Second slide"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators3"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators3"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>

                <div className="card-body">
                  <h4 className="card-title mt-1">Weather App</h4>
                  <p className="card-text ">Description</p>{" "}
                  <div className="row">
                    <div className="col-6 text-left">
                      <a
                        className="btn pt-2 text-white icon-cog"
                        style={{ background: "black" }}
                      >
                        View Code
                      </a>
                    </div>
                    <div className="col-6 text-right">
                      <a
                        className="btn pt-2 text-white icon-cog"
                        style={{ background: "black" }}
                      >
                        Visit Site
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {(filter === "" || filter === "Full Stack") && (
            <div className="col-xl-4 col-sm-12 col-md-6 mt-3">
              <div
                className="card mt-1 h-100 text-white"
                style={{ background: "rgb(40,40,40)" }}
              >
                <div
                  id="carouselExampleIndicators2"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators2"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators2"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators2"
                      data-slide-to="2"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators2"
                      data-slide-to="3"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators2"
                      data-slide-to="4"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (253).png")}
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (254).png")}
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (255).png")}
                        alt="Third slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (256).png")}
                        alt="Fourth slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (257).png")}
                        alt="Fifth slide"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators2"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators2"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>

                <div className="card-body">
                  <h4 className="card-title mt-1">Local Library Portal</h4>
                  <p className="card-text ">Description</p>{" "}
                  <div className="row">
                    <div className="col-6 text-left">
                      <a
                        className="btn pt-2 text-white icon-cog"
                        style={{ background: "black" }}
                      >
                        View Code
                      </a>
                    </div>
                    <div className="col-6 text-right">
                      <a
                        className="btn pt-2 text-white icon-cog"
                        style={{ background: "black" }}
                      >
                        Visit Site
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <br />
        <div className="row mt-5">
          <div className="col-12 text-center mb-5">
            <h2>Education</h2>
          </div>
          <br />

          <div className="col-sm-5 mt-3 mb-5 text-center">
            <h4>Languages/ Frameworks</h4>
            <div className="row">
              <div className="col-6 text-left">
                <div className="row"></div>
                <h6 style={{ lineHeight: "2em" }}>
                  <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" />{" "}
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "90%" }}
                    >
                      90%
                    </div>
                  </div>{" "}
                  <br />
                  <img src="https://img.icons8.com/color/48/000000/python.png" />{" "}
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "90%" }}
                    >
                      90%
                    </div>
                  </div>{" "}
                  <br />
                  <img src="https://img.icons8.com/color/48/000000/javascript.png" />{" "}
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "80%" }}
                    >
                      80%
                    </div>
                  </div>{" "}
                  <br />
                  <img src="https://img.icons8.com/color/48/000000/kotlin.png" />
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "50%" }}
                    >
                      50%
                    </div>
                  </div>{" "}
                  <br />
                  <img src="https://img.icons8.com/nolan/48/mysql.png" />
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "70%" }}
                    >
                      70%
                    </div>
                  </div>{" "}
                </h6>
              </div>
              <div className="col-6 text-left">
                <div className="row"></div>
                <h6 style={{ lineHeight: "2em" }}>
                  <img src="https://img.icons8.com/color/48/000000/html-5.png" />
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "100%" }}
                    >
                      100%
                    </div>
                  </div>{" "}
                  <br />
                  <img src="https://img.icons8.com/color/48/000000/css3.png" />{" "}
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "80%" }}
                    >
                      80%
                    </div>
                  </div>{" "}
                  <br />
                  <img src="https://img.icons8.com/color/48/000000/nodejs.png" />{" "}
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "100%" }}
                    >
                      100%
                    </div>
                  </div>{" "}
                  <br />
                  <img src="https://img.icons8.com/color/48/000000/react-native.png" />{" "}
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "90%" }}
                    >
                      90%
                    </div>
                  </div>{" "}
                  <br />
                  <img src="https://img.icons8.com/color/48/000000/mongodb.png" />{" "}
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "100%" }}
                    >
                      100%
                    </div>
                  </div>{" "}
                </h6>
              </div>
            </div>
          </div>

          <div className=" offset-sm-1 col-sm-6 mt-3 text-center">
            <h4>Schooling</h4>
            <div className="row">
              <div className="col-12 text-left">
                <h6 style={{ lineHeight: "1.5em" }}>
                  <br />
                  SRM Institute of Science and Technology, Chennai, T.N. <br />{" "}
                  4th Year, B.Tech. Software Engineering, 2021 | Percentage:
                  83.95%
                  <br />
                  <br /> K.V. No.2 AFS, Kanpur, U.P.
                  <br /> CBSE 12th Class, 2015 | Percentage: 79.6%
                  <br />
                  <br />
                  K.V. No.2 AFS, Kanpur, U.P.
                  <br /> CBSE 10th Class, 2017 | CGPA: 10
                </h6>
              </div>
            </div>
            <h4 style={{ marginTop: "50px" }}>Internships</h4>
            <div className="row">
              <div className="col-12 text-left">
                <h6 style={{ lineHeight: "1.5em" }}>
                  <br />
                  Done summer internship under Marketing program from 20th May
                  2018 to 30th June 2018 in Den Networks Limited
                  <br />
                  <br />
                  Done summer internship as QA Engineer from 1st December 2018
                  to 2nd January 2019 in Guavus Network System Pvt. Ltd.
                  <br />
                  <br />
                  Done summer internship under Networking program from 1st June
                  to 30th June 2019 in Den Networks Limited
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;
