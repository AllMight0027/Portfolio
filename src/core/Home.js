import React, { useEffect, useState } from "react";
import Base from "../components/Base";
import Particles from "react-particles-js";
import "../App.css";
import Type from "../components/Type";
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
        <div className="row mt-5 mb-5" id="aboutme">
          <div className="col-12 text-center">
            <h2>ABOUT ME</h2>
          </div>
          <br />
          <div className="row mt-3 mb-3">
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
        <div className="row mb-3 mt-5">
          <div className="col-12 text-center">
            <h2>PROJECTS</h2>
          </div>
          <br />
        </div>
        <div className="text-right row">
          <div className="col-xl-2 offset-xl-10 col-md-4 offset-md-8 col-sm-12">
            <select
              onChange={handleChange}
              className="form-control bg-dark text-light mb-3"
            >
              <option value="">All Projects</option>
              <option value="Full Stack">Full Stack</option>
              <option value="Backend">Backend</option>
              <option value="Frontend">Frontend</option>
            </select>
          </div>
        </div>

        <div className="row mt-3" id="projects">
          {(filter === "" || filter === "Full Stack") && (
            <div className="col-xl-4 col-sm-12 col-md-6 mt-3 mb-3">
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
                  <h4 className="card-title mt-1">Complaint Filing Register</h4>
                  <p className="card-text ">
                    This is a site for customer complaint filling and then
                    follow-up the complaint. The site has three portals:
                    Customer, Service Porvider and Technician Portal
                  </p>{" "}
                  <div className="row pb-2">
                    <img
                      src="https://img.icons8.com/color/40/000000/html-5.png"
                      className="ml-2"
                    />{" "}
                    <img src="https://img.icons8.com/color/40/000000/css3.png" />{" "}
                    <img src="https://img.icons8.com/color/40/000000/nodejs.png" />
                    {"  "}
                    <img
                      src="https://img.icons8.com/color/40/000000/react-native.png"
                      className="ml-1"
                    />{" "}
                    <img src="https://img.icons8.com/color/40/000000/mongodb.png" />{" "}
                  </div>
                  <div className="row">
                    <div className="col-6 text-left">
                      <a
                        href="https://github.com/AllMight0027/Complaint-Register"
                        target="_blank"
                        className="btn pt-2 text-white icon-cog"
                        style={{ background: "black" }}
                      >
                        View Code
                      </a>
                    </div>
                    <div className="col-6 text-right">
                      <a
                        href="https://den-complaint-register.netlify.app/home"
                        target="_blank"
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
            <div className="col-xl-4 col-sm-12 col-md-6 mt-3 mb-3">
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
                  <p className="card-text ">
                    A multi category E-Commerce website with the payment gateway
                    powered by Braintree. The site consists on two portals:
                    Admin Portal and Customer Portal.
                  </p>{" "}
                  <div className="row pb-2">
                    <img
                      src="https://img.icons8.com/color/40/000000/html-5.png"
                      className="ml-2"
                    />{" "}
                    <img src="https://img.icons8.com/color/40/000000/css3.png" />{" "}
                    <img src="https://img.icons8.com/color/40/000000/nodejs.png" />
                    {"  "}
                    <img
                      src="https://img.icons8.com/color/40/000000/react-native.png"
                      className="ml-1"
                    />{" "}
                    <img src="https://img.icons8.com/color/40/000000/mongodb.png" />{" "}
                  </div>
                  <div className="row">
                    <div className="col-6 text-left">
                      <a
                        href="https://github.com/AllMight0027/E-Commerce"
                        target="_blank"
                        className="btn pt-2 text-white icon-cog"
                        style={{ background: "black" }}
                      >
                        View Code
                      </a>
                    </div>
                    <div className="col-6 text-right">
                      <a
                        href="https://determined-shirley-5a6823.netlify.app/"
                        target="_blank"
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
            <div className="col-xl-4 col-sm-12 col-md-6 mt-3 mb-3">
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
                  <p className="card-text ">
                    A weather forecast app, which is a simple implementation of
                    the fetch api. The response is fetched on the basis of the
                    city/district name entered.
                  </p>{" "}
                  <div className="row pb-2">
                    <img
                      src="https://img.icons8.com/color/40/000000/html-5.png"
                      className="ml-2"
                    />{" "}
                    <img src="https://img.icons8.com/color/40/000000/css3.png" />{" "}
                    <img src="https://img.icons8.com/color/40/000000/javascript.png" />{" "}
                  </div>
                  <div className="row">
                    <div className="col-6 text-left">
                      <a
                        href="https://github.com/AllMight0027/Weather"
                        target="_blank"
                        className="btn pt-2 text-white icon-cog"
                        style={{ background: "black" }}
                      >
                        View Code
                      </a>
                    </div>
                    <div className="col-6 text-right">
                      <a
                        href="https://allmight0027.github.io/Weather/weather.html"
                        target="_blank"
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
            <div className="col-xl-4 col-sm-12 col-md-6 mt-3 mb-3">
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
                  <p className="card-text ">
                    A book management site for a library. In this the librarian
                    can add book, issue books to different users and keep track
                    of book issue history.
                  </p>{" "}
                  <div className="row pb-2">
                    <img
                      src="https://img.icons8.com/color/40/000000/html-5.png"
                      className="ml-2"
                    />{" "}
                    <img src="https://img.icons8.com/color/40/000000/css3.png" />{" "}
                    <img src="https://img.icons8.com/color/40/000000/nodejs.png" />
                    {"  "}
                    <img
                      src="https://img.icons8.com/color/40/000000/react-native.png"
                      className="ml-1"
                    />{" "}
                    <img src="https://img.icons8.com/color/40/000000/mongodb.png" />{" "}
                  </div>
                  <div className="row">
                    <div className="col-6 text-left">
                      <a
                        href="https://github.com/AllMight0027/library-portal"
                        target="_blank"
                        className="btn pt-2 text-white icon-cog"
                        style={{ background: "black" }}
                      >
                        View Code
                      </a>
                    </div>
                    <div className="col-6 text-right">
                      <a
                        href="https://library-portal-allmight0027.netlify.app/"
                        target="_blank"
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
          {(filter === "" || filter === "Backend") && (
            <div className="col-xl-4 col-sm-12 col-md-6 mt-3 mb-3">
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
                      data-target="#carouselExampleIndicators5"
                      data-slide-to="0"
                      className="active"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (260).png")}
                        alt="First slide"
                      />
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <h4 className="card-title mt-1">RestAPI for Q/A Site</h4>
                  <p className="card-text ">
                    RestAPI for a StackOverflow like Q/A site, where the
                    registered users can ask questions, post awnsers and upvote
                    the awnsers.
                  </p>{" "}
                  <div className="row pb-2">
                    <img
                      src="https://img.icons8.com/color/40/000000/javascript.png"
                      className="ml-3"
                    />{" "}
                    <img src="https://img.icons8.com/color/40/000000/nodejs.png" />
                    {"  "}
                    <img src="https://img.icons8.com/color/40/000000/mongodb.png" />{" "}
                  </div>
                  <div className="row">
                    <div className="col-6 text-left">
                      <a
                        href="https://github.com/AllMight0027/RestAPI-for-QandA-Site"
                        target="_blank"
                        className="btn pt-2 text-white icon-cog"
                        style={{ background: "black" }}
                      >
                        View Code
                      </a>
                    </div>
                    <div className="col-6 text-right">
                      <a
                        href="https://documenter.getpostman.com/view/11407843/T1LTfQj2?version=latest#cf622866-6afd-42c1-bfce-c58f74067115"
                        target="_blank"
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
            <div className="col-xl-4 col-sm-12 col-md-6 mt-3 mb-3">
              <div
                className="card mt-1 h-100 text-white"
                style={{ background: "rgb(40,40,40)" }}
              >
                <div
                  id="carouselExampleIndicators6"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators6"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators6"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators6"
                      data-slide-to="2"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators6"
                      data-slide-to="3"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators6"
                      data-slide-to="4"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (261).png")}
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (262).png")}
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (263).png")}
                        alt="Third slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (264).png")}
                        alt="Fourth slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={require("./Screenshot (265).png")}
                        alt="Fifth slide"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators6"
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
                    href="#carouselExampleIndicators6"
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
                  <h4 className="card-title mt-1">Notes Management</h4>
                  <p className="card-text ">
                    A notes management site for maintaining notes folder wise.
                    In this the user can sign-up and CURD folders, CURD notes
                    inside them.
                  </p>{" "}
                  <div className="row pb-2">
                    <img
                      src="https://img.icons8.com/color/40/000000/html-5.png"
                      className="ml-2"
                    />{" "}
                    <img src="https://img.icons8.com/color/40/000000/css3.png" />{" "}
                    <img src="https://img.icons8.com/color/40/000000/nodejs.png" />
                    {"  "}
                    <img
                      src="https://img.icons8.com/color/40/000000/react-native.png"
                      className="ml-1"
                    />{" "}
                    <img src="https://img.icons8.com/color/40/000000/mongodb.png" />{" "}
                  </div>
                  <div className="row">
                    <div className="col-6 text-left">
                      <a
                        href="https://github.com/AllMight0027/Notes"
                        target="_blank"
                        className="btn pt-2 text-white icon-cog"
                        style={{ background: "black" }}
                      >
                        View Code
                      </a>
                    </div>
                    <div className="col-6 text-right">
                      <a
                        href="https://notes-allmight0027.netlify.app/folder/Java/5f3fb82b332dd200175afa78"
                        target="_blank"
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
        <div className="row mt-5" id="myDiv">
          <div className="col-12 text-center mb-4">
            <h2>EDUCATION</h2>
          </div>
          <br />

          <div className="col-sm-5 mt-3 mb-5 text-center">
            <h4>Languages/Frameworks</h4>
            <div className="row">
              <div className="col-6 text-left">
                <div className="row"></div>
                <h6 style={{ lineHeight: "2em" }}>
                  <img
                    src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
                    title="C++"
                  />{" "}
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
                  <img
                    src="https://img.icons8.com/color/48/000000/python.png"
                    title="Python"
                  />{" "}
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
                  <img
                    src="https://img.icons8.com/color/48/000000/javascript.png"
                    title="JavaScript"
                  />{" "}
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
                  <img
                    src="https://img.icons8.com/color/48/000000/kotlin.png"
                    title="Kotlin"
                  />
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
                  <img
                    src="https://img.icons8.com/nolan/48/mysql.png"
                    title="MySql"
                  />
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
                  <img
                    src="https://img.icons8.com/color/48/000000/html-5.png"
                    title="HTML"
                  />
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
                  <img
                    src="https://img.icons8.com/color/48/000000/css3.png"
                    title="CSS"
                  />{" "}
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
                  <img
                    src="https://img.icons8.com/color/48/000000/nodejs.png"
                    title="NodeJS"
                  />{" "}
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
                  <img
                    src="https://img.icons8.com/color/48/000000/react-native.png"
                    title="ReactJS"
                  />{" "}
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
                  <img
                    src="https://img.icons8.com/color/48/000000/mongodb.png"
                    title="MongoDB"
                  />{" "}
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
