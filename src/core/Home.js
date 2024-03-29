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
      <div className="container-fluid" style={{ height: "100vh" }} id="type">
        <Type />
        <br />
        <Type2 stop={true} />
        <Particles
          height="98vh"
          params={{
            polygon: {
              number: {
                value: 10,
                density: {
                  enable: true,
                  value_area: 10,
                },
              },
            },
          }}
        />
      </div>
      <div className="container-fluid text-white">
        <div className="row mb-5" id="aboutme">
          <div className="col-12 text-center">
            <h1>ABOUT ME</h1>
          </div>
          <br />
          <div className="row mt-3 mb-3">
            <div className=" offset-sm-1 col-sm-10 col-sm-4 text-center">
              <h6 style={{ lineHeight: "2em" }}>
                I am a <b>Front-end Heavy Full Stack Developer</b>, with keen
                interest in{" "}
                <b>
                  <i>ReactJS</i>
                </b>
                . I am looking for a challenging role to utilise my skills and
                capabilities through sincere dedication and smart work for
                symbiotic development of both myself, and my team. Currently
                employed fulltime at Advergame Technologies as a Software
                Development Engineer.
              </h6>
            </div>
          </div>
        </div>
        <div className="row mb-3 mt-5" id="projects">
          <div className="col-12 text-center">
            <h1>PROJECTS</h1>
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

        <div className="row mt-3" style={{ justifyContent: "center" }}>
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
                  data-interval="30000"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={require("./lounge luxurio.PNG")}
                        alt="Lounge Luxurio"
                      />
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <h4 className="card-title mt-1">Lounge Luxurio</h4>
                  <p className="card-text ">
                    This is a site made for a young enthusiastic customer who
                    wanted to bring his business online to showcase his work and
                    grow his business.
                  </p>{" "}
                  <div className="row pb-2">
                    <img
                      src="https://img.icons8.com/color/40/000000/react-native.png"
                      className="ml-3"
                    />{" "}
                    <img src="https://img.icons8.com/color/40/000000/css3.png" />{" "}
                    <img
                      alt="svgImg"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAiIGhlaWdodD0iNDAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTYxLjY0NzY3LDY4LjUyMDVsLTE3LjU4MzQyLDkuNzI4NzVjLTAuNjU5MzMsMC4zNjE5MiAtMS4wNjQyNSwxLjAzNTU4IC0xLjA2NDI1LDEuNzYzdjE5LjQ2ODI1YzAsMC43Mjc0MiAwLjQwNDkyLDEuMzk3NSAxLjA2NDI1LDEuNzYzbDE3LjU4Nyw5LjczNTkyYzAuNjU1NzUsMC4zNjE5MiAxLjQ2OTE3LDAuMzYxOTIgMi4xMjQ5MiwwbDE3LjU4MzQyLC05LjczNTkyYzAuNjUyMTcsLTAuMzY1NSAxLjA1NzA4LC0xLjAzNTU4IDEuMDU3MDgsLTEuNzYzdi0xOS40NjgyNWMwLC0wLjcyNzQyIC0wLjQwNDkyLC0xLjM5NzUgLTEuMDY0MjUsLTEuNzYzbC0xNy41Nzk4MywtOS43Mjg3NWMtMC4zMjk2NywtMC4xODI3NSAtMC42OTg3NSwtMC4yNzIzMyAtMS4wNjQyNSwtMC4yNzIzM2MtMC4zNjkwOCwwIC0wLjczNDU4LDAuMDg5NTggLTEuMDY0MjUsMC4yNzIzM00xNTIuMTE2MDgsODYuMDQ2NThsLTIuOTMxMTcsMS42MTk2N2MtMC4xMTEwOCwwLjA2MDkyIC0wLjE3NTU4LDAuMTcyIC0wLjE3NTU4LDAuMjkzODN2My4yNDY1YzAsMC4xMjE4MyAwLjA2ODA4LDAuMjMyOTIgMC4xNzU1OCwwLjI5MzgzbDIuOTMxMTcsMS42MjMyNWMwLjExMTA4LDAuMDYwOTIgMC4yNDM2NywwLjA2MDkyIDAuMzU0NzUsMGwyLjkzMTE3LC0xLjYyMzI1YzAuMTA3NSwtMC4wNjA5MiAwLjE3NTU4LC0wLjE3MiAwLjE3NTU4LC0wLjI5Mzgzdi0zLjI0NjVjMCwtMC4xMjE4MyAtMC4wNjgwOCwtMC4yMzI5MiAtMC4xNzkxNywtMC4yOTM4M2wtMi45MzExNywtMS42MTk2N2MtMC4wNTM3NSwtMC4wMzIyNSAtMC4xMTQ2NywtMC4wNDY1OCAtMC4xNzU1OCwtMC4wNDY1OGMtMC4wNjA5MiwwIC0wLjEyMTgzLDAuMDE0MzMgLTAuMTc1NTgsMC4wNDY1OCIgZmlsbD0iIzM4OGUzYyI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjguMTA3NzUsNDcuODg3NjdsLTguNTYwNTgsLTQuNzc2NThjLTAuMjY4NzUsLTAuMTUwNSAtMC41OTg0MiwtMC4xNDY5MiAtMC44NjM1OCwwLjAxMDc1Yy0wLjI2NTE3LDAuMTU3NjcgLTAuNDMsMC40NDA3NSAtMC40MywwLjc0ODkybC0wLjAwMzU4LDI4Ljg1M2wtNy44OTQwOCwtNC4zNjgwOGMtMC4zMjk2NywtMC4xODI3NSAtMC42OTg3NSwtMC4yNzIzMyAtMS4wNjQyNSwtMC4yNzIzM2MtMC4zNjU1LDAgLTAuNzM0NTgsMC4wODk1OCAtMS4wNjQyNSwwLjI3MjMzaDAuMDAzNThsLTE3LjU4MzQyLDkuNzI4NzVjLTAuNjU5MzMsMC4zNjE5MiAtMS4wNjQyNSwxLjAzNTU4IC0xLjA2NDI1LDEuNzU5NDJ2MTkuNDY4MjVjMCwwLjcyNzQyIDAuNDA0OTIsMS4zOTc1IDEuMDY0MjUsMS43NjNsMTcuNTg3LDkuNzM1OTJjMC42NTU3NSwwLjM2MTkyIDEuNDY5MTcsMC4zNjE5MiAyLjEyNDkyLDBsMTcuNTgzNDIsLTkuNzM1OTJjMC42NTIxNywtMC4zNjE5MiAxLjA1NzA4LC0xLjAzNTU4IDEuMDU3MDgsLTEuNzYzdi00OS45MDUwOGMwLC0wLjYzMDY3IC0wLjM0NCwtMS4yMTExNyAtMC44OTIyNSwtMS41MTkzM3pNMTE3Ljc2OTgzLDk0LjgwNzgzbC03Ljk5MDgzLDQuNDI1NDJjLTAuMjk3NDIsMC4xNjQ4MyAtMC42NjY1LDAuMTY0ODMgLTAuOTYzOTIsMGwtNy45OTQ0MiwtNC40MjU0MmMtMC4zMDQ1OCwtMC4xNjQ4MyAtMC40ODczMywtMC40NzMgLTAuNDg3MzMsLTAuODAyNjd2LTguODUwODNjMCwtMC4zMjk2NyAwLjE4Mjc1LC0wLjYzNDI1IDAuNDgzNzUsLTAuODAyNjdsNy45OTQ0MiwtNC40MjE4M2gtMC4wMDM1OGMwLjE1MDUsLTAuMDgyNDIgMC4zMTUzMywtMC4xMjE4MyAwLjQ4Mzc1LC0wLjEyMTgzYzAuMTY4NDIsMCAwLjMzMzI1LDAuMDQzIDAuNDgzNzUsMC4xMjE4M2w3Ljk5MDgzLDQuNDIxODNjMC4zMDEsMC4xNjg0MiAwLjQ4Mzc1LDAuNDc2NTggMC40ODM3NSwwLjgwNjI1djguODUwODNjMCwwLjMyNjA4IC0wLjE4Mjc1LDAuNjM0MjUgLTAuNDgwMTcsMC43OTkwOHoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNjEuNjQ3NjcsNjguNTIwNWwtMTguNjQ3NjcsMzAuOTZjMCwwLjcyNzQyIDAuNDA0OTIsMS4zOTc1IDEuMDY0MjUsMS43NjNsMTcuNTg3LDkuNzM1OTJjMC42NTU3NSwwLjM2MTkyIDEuNDY5MTcsMC4zNjE5MiAyLjEyNDkyLDBsMTguNjQwNSwtMzAuOTY3MTdjMCwtMC43Mjc0MiAtMC40MDQ5MiwtMS4zOTc1IC0xLjA2NDI1LC0xLjc2M2wtMTcuNTc5ODMsLTkuNzI4NzVjLTAuMzI5NjcsLTAuMTgyNzUgLTAuNjk4NzUsLTAuMjcyMzMgLTEuMDY0MjUsLTAuMjcyMzNjLTAuMzY5MDgsMCAtMC43MzQ1OCwwLjA4OTU4IC0xLjA2NDI1LDAuMjcyMzMiIGZpbGw9IiMyZTdkMzIiPjwvcGF0aD48cGF0aCBkPSJNNjEuNjQ3NjcsNjguNTIwNWwtMTcuNTgzNDIsOS43Mjg3NWMtMC42NTkzMywwLjM2MTkyIC0xLjA2NDI1LDEuMDM1NTggLTEuMDY0MjUsMS43NjNsMTguNjQ3NjcsMzAuOTY3MTdjMC42NTU3NSwwLjM2MTkyIDEuNDY5MTcsMC4zNjE5MiAyLjEyNDkyLDBsMTcuNTgzNDIsLTkuNzM1OTJjMC42NTU3NSwtMC4zNjU1IDEuMDYwNjcsLTEuMDM1NTggMS4wNjA2NywtMS43NjNsLTE4LjY0NDA4LC0zMC45NmMtMC4zMjk2NywtMC4xODI3NSAtMC42OTg3NSwtMC4yNzIzMyAtMS4wNjQyNSwtMC4yNzIzM2MtMC4zNjkwOCwwIC0wLjczNDU4LDAuMDg5NTggLTEuMDY0MjUsMC4yNzIzMyIgZmlsbD0iIzRjYWY1MCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNzAuOTM1NzUsNzguMDg0NDJsLTE3LjU3OTgzLC05LjcyODc1Yy0wLjMyOTY3LC0wLjE4Mjc1IC0wLjY5ODc1LC0wLjI3MjMzIC0xLjA2NDI1LC0wLjI3MjMzYy0wLjM2NTUsMCAtMC43MzQ1OCwwLjA4OTU4IC0xLjA2NDI1LDAuMjcyMzNoMC4wMDM1OGwtMTcuNTgzNDIsOS43Mjg3NWMtMC42NTU3NSwwLjM2MTkyIC0xLjA2NDI1LDEuMDQ5OTIgLTEuMDY0MjUsMS44MDI0MnYxOS4zODk0MmMwLDAuNzQ4OTIgMC40MDg1LDEuNDQwNSAxLjA2NDI1LDEuODAyNDJsMTcuNTg3LDkuNzM1OTJjMC42NTkzMywwLjM2NTUgMS40NjU1OCwwLjM2NTUgMi4xMjQ5MiwwbDguMTA5MDgsLTQuNDg5OTJjMC43NDE3NSwtMC40MTIwOCAwLjczODE3LC0xLjQ3NjMzIC0wLjAwNzE3LC0xLjg4NDgzbC0xNy42NDQzMywtOS42Mjg0MmMtMC4yOTc0MiwtMC4xNjg0MiAtMC40ODM3NSwtMC40ODAxNyAtMC40ODM3NSwtMC44MTd2LTguODM2NWMwLC0wLjMyOTY3IDAuMTc5MTcsLTAuNjM0MjUgMC40NjU4MywtMC43OTE5Mmw4LjAwODc1LC00LjQyOWgtMC4wMDM1OGMwLjE1MDUsLTAuMDgyNDIgMC4zMTUzMywtMC4xMjE4MyAwLjQ4Mzc1LC0wLjEyMTgzYzAuMTY4NDIsMCAwLjMzMzI1LDAuMDQzIDAuNDgzNzUsMC4xMjE4M2w4LjAwODc1LDQuNDMyNThjMC4yODY2NywwLjE1NzY3IDAuNDY1ODMsMC40NjIyNSAwLjQ2NTgzLDAuNzkxOTJ2Ny4yMDk2N2MwLDAuMzA4MTcgMC4xNjQ4MywwLjU5NDgzIDAuNDMzNTgsMC43NDg5MmMwLjI2ODc1LDAuMTUwNSAwLjU5ODQyLDAuMTUwNSAwLjg2NzE3LC0wLjAwMzU4bDguNTkyODMsLTQuOTkxNThjMC41MzAzMywtMC4zMDgxNyAwLjg2LC0wLjg3NzkyIDAuODYsLTEuNDk0MjV2LTYuNzM2NjdjMCwtMC43NTYwOCAtMC40MDg1LC0xLjQ0NzY3IC0xLjA2NDI1LC0xLjgwOTU4ek0zOC4zNTI0Miw3OC4wODQ0MmwtMTcuNTc5ODMsLTkuNzI4NzVjLTAuMzI5NjcsLTAuMTgyNzUgLTAuNjk4NzUsLTAuMjcyMzMgLTEuMDY0MjUsLTAuMjcyMzNjLTAuMzY1NSwwIC0wLjczNDU4LDAuMDg5NTggLTEuMDY0MjUsMC4yNzIzM2gwLjAwMzU4bC0xNy41ODM0Miw5LjcyODc1Yy0wLjY1NTc1LDAuMzYxOTIgLTEuMDY0MjUsMS4wNDk5MiAtMS4wNjQyNSwxLjgwMjQydjI2Ljc0OTU4YzAsMC4zMDgxNyAwLjE2NDgzLDAuNTk0ODMgMC40MzM1OCwwLjc0ODkyYzAuMjY4NzUsMC4xNTA1IDAuNTk4NDIsMC4xNTA1IDAuODY3MTcsLTAuMDAzNThsOC41OTI4MywtNC45OTE1OGMwLjUzMDMzLC0wLjMwODE3IDAuODU2NDIsLTAuODc3OTIgMC44NTY0MiwtMS40OTQyNXYtMTUuNzQxNThjMCwtMC4zMjk2NyAwLjE3OTE3LC0wLjYzNDI1IDAuNDY1ODMsLTAuNzkxOTJsOC4wMDg3NSwtNC40Mjl2MGMwLjE1MDUsLTAuMDgyNDIgMC4zMTUzMywtMC4xMjE4MyAwLjQ4Mzc1LC0wLjEyMTgzYzAuMTY4NDIsMCAwLjMzMzI1LDAuMDQzIDAuNDgzNzUsMC4xMjE4M2w4LjAwODc1LDQuNDMyNThjMC4yODY2NywwLjE1NzY3IDAuNDY1ODMsMC40NjIyNSAwLjQ2NTgzLDAuNzkxOTJ2MTUuNzQxNThjMCwwLjYxNjMzIDAuMzI2MDgsMS4xODYwOCAwLjg2LDEuNDk0MjVsOC41OTI4Myw0Ljk5MTU4YzAuMjY4NzUsMC4xNTQwOCAwLjU5ODQyLDAuMTU0MDggMC44NjcxNywwLjAwMzU4YzAuMjY1MTcsLTAuMTU3NjcgMC40MywtMC40NDQzMyAwLjQzLC0wLjc1MjV2LTI2Ljc0NmMwLC0wLjc1MjUgLTAuNDA4NSwtMS40NDQwOCAtMS4wNjQyNSwtMS44MDZ6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                    />
                    {"  "}
                    <img src="https://img.icons8.com/color/40/000000/mongodb.png" />{" "}
                  </div>
                  <div className="row">
                    <div className="col-6 text-left"></div>
                    <div className="col-6 text-right">
                      <a
                        href="https://loungeluxurio.com"
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
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="30000"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={require("./hacktrix.PNG")}
                        alt="First slide"
                      />
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <h4 className="card-title mt-1">Hacktrix</h4>
                  <p className="card-text ">
                    This is a site made for IEEE SRM for their hackathon which
                    mangaged the traffic of all the ambitious hackers who came
                    here to get all the details of the event.
                  </p>{" "}
                  <div className="row pb-2">
                    <img
                      alt="svgImg"
                      className="ml-3"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAiIGhlaWdodD0iNDAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTYxLjY0NzY3LDY4LjUyMDVsLTE3LjU4MzQyLDkuNzI4NzVjLTAuNjU5MzMsMC4zNjE5MiAtMS4wNjQyNSwxLjAzNTU4IC0xLjA2NDI1LDEuNzYzdjE5LjQ2ODI1YzAsMC43Mjc0MiAwLjQwNDkyLDEuMzk3NSAxLjA2NDI1LDEuNzYzbDE3LjU4Nyw5LjczNTkyYzAuNjU1NzUsMC4zNjE5MiAxLjQ2OTE3LDAuMzYxOTIgMi4xMjQ5MiwwbDE3LjU4MzQyLC05LjczNTkyYzAuNjUyMTcsLTAuMzY1NSAxLjA1NzA4LC0xLjAzNTU4IDEuMDU3MDgsLTEuNzYzdi0xOS40NjgyNWMwLC0wLjcyNzQyIC0wLjQwNDkyLC0xLjM5NzUgLTEuMDY0MjUsLTEuNzYzbC0xNy41Nzk4MywtOS43Mjg3NWMtMC4zMjk2NywtMC4xODI3NSAtMC42OTg3NSwtMC4yNzIzMyAtMS4wNjQyNSwtMC4yNzIzM2MtMC4zNjkwOCwwIC0wLjczNDU4LDAuMDg5NTggLTEuMDY0MjUsMC4yNzIzM00xNTIuMTE2MDgsODYuMDQ2NThsLTIuOTMxMTcsMS42MTk2N2MtMC4xMTEwOCwwLjA2MDkyIC0wLjE3NTU4LDAuMTcyIC0wLjE3NTU4LDAuMjkzODN2My4yNDY1YzAsMC4xMjE4MyAwLjA2ODA4LDAuMjMyOTIgMC4xNzU1OCwwLjI5MzgzbDIuOTMxMTcsMS42MjMyNWMwLjExMTA4LDAuMDYwOTIgMC4yNDM2NywwLjA2MDkyIDAuMzU0NzUsMGwyLjkzMTE3LC0xLjYyMzI1YzAuMTA3NSwtMC4wNjA5MiAwLjE3NTU4LC0wLjE3MiAwLjE3NTU4LC0wLjI5Mzgzdi0zLjI0NjVjMCwtMC4xMjE4MyAtMC4wNjgwOCwtMC4yMzI5MiAtMC4xNzkxNywtMC4yOTM4M2wtMi45MzExNywtMS42MTk2N2MtMC4wNTM3NSwtMC4wMzIyNSAtMC4xMTQ2NywtMC4wNDY1OCAtMC4xNzU1OCwtMC4wNDY1OGMtMC4wNjA5MiwwIC0wLjEyMTgzLDAuMDE0MzMgLTAuMTc1NTgsMC4wNDY1OCIgZmlsbD0iIzM4OGUzYyI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjguMTA3NzUsNDcuODg3NjdsLTguNTYwNTgsLTQuNzc2NThjLTAuMjY4NzUsLTAuMTUwNSAtMC41OTg0MiwtMC4xNDY5MiAtMC44NjM1OCwwLjAxMDc1Yy0wLjI2NTE3LDAuMTU3NjcgLTAuNDMsMC40NDA3NSAtMC40MywwLjc0ODkybC0wLjAwMzU4LDI4Ljg1M2wtNy44OTQwOCwtNC4zNjgwOGMtMC4zMjk2NywtMC4xODI3NSAtMC42OTg3NSwtMC4yNzIzMyAtMS4wNjQyNSwtMC4yNzIzM2MtMC4zNjU1LDAgLTAuNzM0NTgsMC4wODk1OCAtMS4wNjQyNSwwLjI3MjMzaDAuMDAzNThsLTE3LjU4MzQyLDkuNzI4NzVjLTAuNjU5MzMsMC4zNjE5MiAtMS4wNjQyNSwxLjAzNTU4IC0xLjA2NDI1LDEuNzU5NDJ2MTkuNDY4MjVjMCwwLjcyNzQyIDAuNDA0OTIsMS4zOTc1IDEuMDY0MjUsMS43NjNsMTcuNTg3LDkuNzM1OTJjMC42NTU3NSwwLjM2MTkyIDEuNDY5MTcsMC4zNjE5MiAyLjEyNDkyLDBsMTcuNTgzNDIsLTkuNzM1OTJjMC42NTIxNywtMC4zNjE5MiAxLjA1NzA4LC0xLjAzNTU4IDEuMDU3MDgsLTEuNzYzdi00OS45MDUwOGMwLC0wLjYzMDY3IC0wLjM0NCwtMS4yMTExNyAtMC44OTIyNSwtMS41MTkzM3pNMTE3Ljc2OTgzLDk0LjgwNzgzbC03Ljk5MDgzLDQuNDI1NDJjLTAuMjk3NDIsMC4xNjQ4MyAtMC42NjY1LDAuMTY0ODMgLTAuOTYzOTIsMGwtNy45OTQ0MiwtNC40MjU0MmMtMC4zMDQ1OCwtMC4xNjQ4MyAtMC40ODczMywtMC40NzMgLTAuNDg3MzMsLTAuODAyNjd2LTguODUwODNjMCwtMC4zMjk2NyAwLjE4Mjc1LC0wLjYzNDI1IDAuNDgzNzUsLTAuODAyNjdsNy45OTQ0MiwtNC40MjE4M2gtMC4wMDM1OGMwLjE1MDUsLTAuMDgyNDIgMC4zMTUzMywtMC4xMjE4MyAwLjQ4Mzc1LC0wLjEyMTgzYzAuMTY4NDIsMCAwLjMzMzI1LDAuMDQzIDAuNDgzNzUsMC4xMjE4M2w3Ljk5MDgzLDQuNDIxODNjMC4zMDEsMC4xNjg0MiAwLjQ4Mzc1LDAuNDc2NTggMC40ODM3NSwwLjgwNjI1djguODUwODNjMCwwLjMyNjA4IC0wLjE4Mjc1LDAuNjM0MjUgLTAuNDgwMTcsMC43OTkwOHoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNjEuNjQ3NjcsNjguNTIwNWwtMTguNjQ3NjcsMzAuOTZjMCwwLjcyNzQyIDAuNDA0OTIsMS4zOTc1IDEuMDY0MjUsMS43NjNsMTcuNTg3LDkuNzM1OTJjMC42NTU3NSwwLjM2MTkyIDEuNDY5MTcsMC4zNjE5MiAyLjEyNDkyLDBsMTguNjQwNSwtMzAuOTY3MTdjMCwtMC43Mjc0MiAtMC40MDQ5MiwtMS4zOTc1IC0xLjA2NDI1LC0xLjc2M2wtMTcuNTc5ODMsLTkuNzI4NzVjLTAuMzI5NjcsLTAuMTgyNzUgLTAuNjk4NzUsLTAuMjcyMzMgLTEuMDY0MjUsLTAuMjcyMzNjLTAuMzY5MDgsMCAtMC43MzQ1OCwwLjA4OTU4IC0xLjA2NDI1LDAuMjcyMzMiIGZpbGw9IiMyZTdkMzIiPjwvcGF0aD48cGF0aCBkPSJNNjEuNjQ3NjcsNjguNTIwNWwtMTcuNTgzNDIsOS43Mjg3NWMtMC42NTkzMywwLjM2MTkyIC0xLjA2NDI1LDEuMDM1NTggLTEuMDY0MjUsMS43NjNsMTguNjQ3NjcsMzAuOTY3MTdjMC42NTU3NSwwLjM2MTkyIDEuNDY5MTcsMC4zNjE5MiAyLjEyNDkyLDBsMTcuNTgzNDIsLTkuNzM1OTJjMC42NTU3NSwtMC4zNjU1IDEuMDYwNjcsLTEuMDM1NTggMS4wNjA2NywtMS43NjNsLTE4LjY0NDA4LC0zMC45NmMtMC4zMjk2NywtMC4xODI3NSAtMC42OTg3NSwtMC4yNzIzMyAtMS4wNjQyNSwtMC4yNzIzM2MtMC4zNjkwOCwwIC0wLjczNDU4LDAuMDg5NTggLTEuMDY0MjUsMC4yNzIzMyIgZmlsbD0iIzRjYWY1MCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNzAuOTM1NzUsNzguMDg0NDJsLTE3LjU3OTgzLC05LjcyODc1Yy0wLjMyOTY3LC0wLjE4Mjc1IC0wLjY5ODc1LC0wLjI3MjMzIC0xLjA2NDI1LC0wLjI3MjMzYy0wLjM2NTUsMCAtMC43MzQ1OCwwLjA4OTU4IC0xLjA2NDI1LDAuMjcyMzNoMC4wMDM1OGwtMTcuNTgzNDIsOS43Mjg3NWMtMC42NTU3NSwwLjM2MTkyIC0xLjA2NDI1LDEuMDQ5OTIgLTEuMDY0MjUsMS44MDI0MnYxOS4zODk0MmMwLDAuNzQ4OTIgMC40MDg1LDEuNDQwNSAxLjA2NDI1LDEuODAyNDJsMTcuNTg3LDkuNzM1OTJjMC42NTkzMywwLjM2NTUgMS40NjU1OCwwLjM2NTUgMi4xMjQ5MiwwbDguMTA5MDgsLTQuNDg5OTJjMC43NDE3NSwtMC40MTIwOCAwLjczODE3LC0xLjQ3NjMzIC0wLjAwNzE3LC0xLjg4NDgzbC0xNy42NDQzMywtOS42Mjg0MmMtMC4yOTc0MiwtMC4xNjg0MiAtMC40ODM3NSwtMC40ODAxNyAtMC40ODM3NSwtMC44MTd2LTguODM2NWMwLC0wLjMyOTY3IDAuMTc5MTcsLTAuNjM0MjUgMC40NjU4MywtMC43OTE5Mmw4LjAwODc1LC00LjQyOWgtMC4wMDM1OGMwLjE1MDUsLTAuMDgyNDIgMC4zMTUzMywtMC4xMjE4MyAwLjQ4Mzc1LC0wLjEyMTgzYzAuMTY4NDIsMCAwLjMzMzI1LDAuMDQzIDAuNDgzNzUsMC4xMjE4M2w4LjAwODc1LDQuNDMyNThjMC4yODY2NywwLjE1NzY3IDAuNDY1ODMsMC40NjIyNSAwLjQ2NTgzLDAuNzkxOTJ2Ny4yMDk2N2MwLDAuMzA4MTcgMC4xNjQ4MywwLjU5NDgzIDAuNDMzNTgsMC43NDg5MmMwLjI2ODc1LDAuMTUwNSAwLjU5ODQyLDAuMTUwNSAwLjg2NzE3LC0wLjAwMzU4bDguNTkyODMsLTQuOTkxNThjMC41MzAzMywtMC4zMDgxNyAwLjg2LC0wLjg3NzkyIDAuODYsLTEuNDk0MjV2LTYuNzM2NjdjMCwtMC43NTYwOCAtMC40MDg1LC0xLjQ0NzY3IC0xLjA2NDI1LC0xLjgwOTU4ek0zOC4zNTI0Miw3OC4wODQ0MmwtMTcuNTc5ODMsLTkuNzI4NzVjLTAuMzI5NjcsLTAuMTgyNzUgLTAuNjk4NzUsLTAuMjcyMzMgLTEuMDY0MjUsLTAuMjcyMzNjLTAuMzY1NSwwIC0wLjczNDU4LDAuMDg5NTggLTEuMDY0MjUsMC4yNzIzM2gwLjAwMzU4bC0xNy41ODM0Miw5LjcyODc1Yy0wLjY1NTc1LDAuMzYxOTIgLTEuMDY0MjUsMS4wNDk5MiAtMS4wNjQyNSwxLjgwMjQydjI2Ljc0OTU4YzAsMC4zMDgxNyAwLjE2NDgzLDAuNTk0ODMgMC40MzM1OCwwLjc0ODkyYzAuMjY4NzUsMC4xNTA1IDAuNTk4NDIsMC4xNTA1IDAuODY3MTcsLTAuMDAzNThsOC41OTI4MywtNC45OTE1OGMwLjUzMDMzLC0wLjMwODE3IDAuODU2NDIsLTAuODc3OTIgMC44NTY0MiwtMS40OTQyNXYtMTUuNzQxNThjMCwtMC4zMjk2NyAwLjE3OTE3LC0wLjYzNDI1IDAuNDY1ODMsLTAuNzkxOTJsOC4wMDg3NSwtNC40Mjl2MGMwLjE1MDUsLTAuMDgyNDIgMC4zMTUzMywtMC4xMjE4MyAwLjQ4Mzc1LC0wLjEyMTgzYzAuMTY4NDIsMCAwLjMzMzI1LDAuMDQzIDAuNDgzNzUsMC4xMjE4M2w4LjAwODc1LDQuNDMyNThjMC4yODY2NywwLjE1NzY3IDAuNDY1ODMsMC40NjIyNSAwLjQ2NTgzLDAuNzkxOTJ2MTUuNzQxNThjMCwwLjYxNjMzIDAuMzI2MDgsMS4xODYwOCAwLjg2LDEuNDk0MjVsOC41OTI4Myw0Ljk5MTU4YzAuMjY4NzUsMC4xNTQwOCAwLjU5ODQyLDAuMTU0MDggMC44NjcxNywwLjAwMzU4YzAuMjY1MTcsLTAuMTU3NjcgMC40MywtMC40NDQzMyAwLjQzLC0wLjc1MjV2LTI2Ljc0NmMwLC0wLjc1MjUgLTAuNDA4NSwtMS40NDQwOCAtMS4wNjQyNSwtMS44MDZ6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                    />
                    {"  "}
                    <img src="https://img.icons8.com/color/40/000000/css3.png" />{" "}
                    <img
                      src="https://img.icons8.com/color/40/000000/react-native.png"
                      className="ml-1"
                    />{" "}
                    <img src="https://img.icons8.com/color/40/000000/mongodb.png" />{" "}
                  </div>
                  <div className="row">
                    <div className="col-6 text-left"></div>
                    <div className="col-6 text-right">
                      <a
                        href="https://hacktrix.ieeesrmist.in"
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
                  data-interval="30000"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={require("./concepto.PNG")}
                        alt="First slide"
                      />
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <h4 className="card-title mt-1">CONCEPTO</h4>
                  <p className="card-text ">
                    This site was made for IEEE SRM for thier flagship event
                    called Concepto which allowed users to get the entire
                    details of the event easily.
                  </p>{" "}
                  <div className="row pb-2">
                    <img
                      src="https://img.icons8.com/color/40/000000/html-5.png"
                      className="ml-2"
                    />{" "}
                    <img src="https://img.icons8.com/color/40/000000/javascript.png" />{" "}
                    <img src="https://img.icons8.com/color/40/000000/sass.png" />
                  </div>
                  <div className="row">
                    <div className="col-12 text-right">
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
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="30000"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={require("./41ur2e96PnL.jpg")}
                        alt="First slide"
                      />
                    </div>
                  </div>
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
                    <img
                      alt="svgImg"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAiIGhlaWdodD0iNDAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTYxLjY0NzY3LDY4LjUyMDVsLTE3LjU4MzQyLDkuNzI4NzVjLTAuNjU5MzMsMC4zNjE5MiAtMS4wNjQyNSwxLjAzNTU4IC0xLjA2NDI1LDEuNzYzdjE5LjQ2ODI1YzAsMC43Mjc0MiAwLjQwNDkyLDEuMzk3NSAxLjA2NDI1LDEuNzYzbDE3LjU4Nyw5LjczNTkyYzAuNjU1NzUsMC4zNjE5MiAxLjQ2OTE3LDAuMzYxOTIgMi4xMjQ5MiwwbDE3LjU4MzQyLC05LjczNTkyYzAuNjUyMTcsLTAuMzY1NSAxLjA1NzA4LC0xLjAzNTU4IDEuMDU3MDgsLTEuNzYzdi0xOS40NjgyNWMwLC0wLjcyNzQyIC0wLjQwNDkyLC0xLjM5NzUgLTEuMDY0MjUsLTEuNzYzbC0xNy41Nzk4MywtOS43Mjg3NWMtMC4zMjk2NywtMC4xODI3NSAtMC42OTg3NSwtMC4yNzIzMyAtMS4wNjQyNSwtMC4yNzIzM2MtMC4zNjkwOCwwIC0wLjczNDU4LDAuMDg5NTggLTEuMDY0MjUsMC4yNzIzM00xNTIuMTE2MDgsODYuMDQ2NThsLTIuOTMxMTcsMS42MTk2N2MtMC4xMTEwOCwwLjA2MDkyIC0wLjE3NTU4LDAuMTcyIC0wLjE3NTU4LDAuMjkzODN2My4yNDY1YzAsMC4xMjE4MyAwLjA2ODA4LDAuMjMyOTIgMC4xNzU1OCwwLjI5MzgzbDIuOTMxMTcsMS42MjMyNWMwLjExMTA4LDAuMDYwOTIgMC4yNDM2NywwLjA2MDkyIDAuMzU0NzUsMGwyLjkzMTE3LC0xLjYyMzI1YzAuMTA3NSwtMC4wNjA5MiAwLjE3NTU4LC0wLjE3MiAwLjE3NTU4LC0wLjI5Mzgzdi0zLjI0NjVjMCwtMC4xMjE4MyAtMC4wNjgwOCwtMC4yMzI5MiAtMC4xNzkxNywtMC4yOTM4M2wtMi45MzExNywtMS42MTk2N2MtMC4wNTM3NSwtMC4wMzIyNSAtMC4xMTQ2NywtMC4wNDY1OCAtMC4xNzU1OCwtMC4wNDY1OGMtMC4wNjA5MiwwIC0wLjEyMTgzLDAuMDE0MzMgLTAuMTc1NTgsMC4wNDY1OCIgZmlsbD0iIzM4OGUzYyI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjguMTA3NzUsNDcuODg3NjdsLTguNTYwNTgsLTQuNzc2NThjLTAuMjY4NzUsLTAuMTUwNSAtMC41OTg0MiwtMC4xNDY5MiAtMC44NjM1OCwwLjAxMDc1Yy0wLjI2NTE3LDAuMTU3NjcgLTAuNDMsMC40NDA3NSAtMC40MywwLjc0ODkybC0wLjAwMzU4LDI4Ljg1M2wtNy44OTQwOCwtNC4zNjgwOGMtMC4zMjk2NywtMC4xODI3NSAtMC42OTg3NSwtMC4yNzIzMyAtMS4wNjQyNSwtMC4yNzIzM2MtMC4zNjU1LDAgLTAuNzM0NTgsMC4wODk1OCAtMS4wNjQyNSwwLjI3MjMzaDAuMDAzNThsLTE3LjU4MzQyLDkuNzI4NzVjLTAuNjU5MzMsMC4zNjE5MiAtMS4wNjQyNSwxLjAzNTU4IC0xLjA2NDI1LDEuNzU5NDJ2MTkuNDY4MjVjMCwwLjcyNzQyIDAuNDA0OTIsMS4zOTc1IDEuMDY0MjUsMS43NjNsMTcuNTg3LDkuNzM1OTJjMC42NTU3NSwwLjM2MTkyIDEuNDY5MTcsMC4zNjE5MiAyLjEyNDkyLDBsMTcuNTgzNDIsLTkuNzM1OTJjMC42NTIxNywtMC4zNjE5MiAxLjA1NzA4LC0xLjAzNTU4IDEuMDU3MDgsLTEuNzYzdi00OS45MDUwOGMwLC0wLjYzMDY3IC0wLjM0NCwtMS4yMTExNyAtMC44OTIyNSwtMS41MTkzM3pNMTE3Ljc2OTgzLDk0LjgwNzgzbC03Ljk5MDgzLDQuNDI1NDJjLTAuMjk3NDIsMC4xNjQ4MyAtMC42NjY1LDAuMTY0ODMgLTAuOTYzOTIsMGwtNy45OTQ0MiwtNC40MjU0MmMtMC4zMDQ1OCwtMC4xNjQ4MyAtMC40ODczMywtMC40NzMgLTAuNDg3MzMsLTAuODAyNjd2LTguODUwODNjMCwtMC4zMjk2NyAwLjE4Mjc1LC0wLjYzNDI1IDAuNDgzNzUsLTAuODAyNjdsNy45OTQ0MiwtNC40MjE4M2gtMC4wMDM1OGMwLjE1MDUsLTAuMDgyNDIgMC4zMTUzMywtMC4xMjE4MyAwLjQ4Mzc1LC0wLjEyMTgzYzAuMTY4NDIsMCAwLjMzMzI1LDAuMDQzIDAuNDgzNzUsMC4xMjE4M2w3Ljk5MDgzLDQuNDIxODNjMC4zMDEsMC4xNjg0MiAwLjQ4Mzc1LDAuNDc2NTggMC40ODM3NSwwLjgwNjI1djguODUwODNjMCwwLjMyNjA4IC0wLjE4Mjc1LDAuNjM0MjUgLTAuNDgwMTcsMC43OTkwOHoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNjEuNjQ3NjcsNjguNTIwNWwtMTguNjQ3NjcsMzAuOTZjMCwwLjcyNzQyIDAuNDA0OTIsMS4zOTc1IDEuMDY0MjUsMS43NjNsMTcuNTg3LDkuNzM1OTJjMC42NTU3NSwwLjM2MTkyIDEuNDY5MTcsMC4zNjE5MiAyLjEyNDkyLDBsMTguNjQwNSwtMzAuOTY3MTdjMCwtMC43Mjc0MiAtMC40MDQ5MiwtMS4zOTc1IC0xLjA2NDI1LC0xLjc2M2wtMTcuNTc5ODMsLTkuNzI4NzVjLTAuMzI5NjcsLTAuMTgyNzUgLTAuNjk4NzUsLTAuMjcyMzMgLTEuMDY0MjUsLTAuMjcyMzNjLTAuMzY5MDgsMCAtMC43MzQ1OCwwLjA4OTU4IC0xLjA2NDI1LDAuMjcyMzMiIGZpbGw9IiMyZTdkMzIiPjwvcGF0aD48cGF0aCBkPSJNNjEuNjQ3NjcsNjguNTIwNWwtMTcuNTgzNDIsOS43Mjg3NWMtMC42NTkzMywwLjM2MTkyIC0xLjA2NDI1LDEuMDM1NTggLTEuMDY0MjUsMS43NjNsMTguNjQ3NjcsMzAuOTY3MTdjMC42NTU3NSwwLjM2MTkyIDEuNDY5MTcsMC4zNjE5MiAyLjEyNDkyLDBsMTcuNTgzNDIsLTkuNzM1OTJjMC42NTU3NSwtMC4zNjU1IDEuMDYwNjcsLTEuMDM1NTggMS4wNjA2NywtMS43NjNsLTE4LjY0NDA4LC0zMC45NmMtMC4zMjk2NywtMC4xODI3NSAtMC42OTg3NSwtMC4yNzIzMyAtMS4wNjQyNSwtMC4yNzIzM2MtMC4zNjkwOCwwIC0wLjczNDU4LDAuMDg5NTggLTEuMDY0MjUsMC4yNzIzMyIgZmlsbD0iIzRjYWY1MCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNzAuOTM1NzUsNzguMDg0NDJsLTE3LjU3OTgzLC05LjcyODc1Yy0wLjMyOTY3LC0wLjE4Mjc1IC0wLjY5ODc1LC0wLjI3MjMzIC0xLjA2NDI1LC0wLjI3MjMzYy0wLjM2NTUsMCAtMC43MzQ1OCwwLjA4OTU4IC0xLjA2NDI1LDAuMjcyMzNoMC4wMDM1OGwtMTcuNTgzNDIsOS43Mjg3NWMtMC42NTU3NSwwLjM2MTkyIC0xLjA2NDI1LDEuMDQ5OTIgLTEuMDY0MjUsMS44MDI0MnYxOS4zODk0MmMwLDAuNzQ4OTIgMC40MDg1LDEuNDQwNSAxLjA2NDI1LDEuODAyNDJsMTcuNTg3LDkuNzM1OTJjMC42NTkzMywwLjM2NTUgMS40NjU1OCwwLjM2NTUgMi4xMjQ5MiwwbDguMTA5MDgsLTQuNDg5OTJjMC43NDE3NSwtMC40MTIwOCAwLjczODE3LC0xLjQ3NjMzIC0wLjAwNzE3LC0xLjg4NDgzbC0xNy42NDQzMywtOS42Mjg0MmMtMC4yOTc0MiwtMC4xNjg0MiAtMC40ODM3NSwtMC40ODAxNyAtMC40ODM3NSwtMC44MTd2LTguODM2NWMwLC0wLjMyOTY3IDAuMTc5MTcsLTAuNjM0MjUgMC40NjU4MywtMC43OTE5Mmw4LjAwODc1LC00LjQyOWgtMC4wMDM1OGMwLjE1MDUsLTAuMDgyNDIgMC4zMTUzMywtMC4xMjE4MyAwLjQ4Mzc1LC0wLjEyMTgzYzAuMTY4NDIsMCAwLjMzMzI1LDAuMDQzIDAuNDgzNzUsMC4xMjE4M2w4LjAwODc1LDQuNDMyNThjMC4yODY2NywwLjE1NzY3IDAuNDY1ODMsMC40NjIyNSAwLjQ2NTgzLDAuNzkxOTJ2Ny4yMDk2N2MwLDAuMzA4MTcgMC4xNjQ4MywwLjU5NDgzIDAuNDMzNTgsMC43NDg5MmMwLjI2ODc1LDAuMTUwNSAwLjU5ODQyLDAuMTUwNSAwLjg2NzE3LC0wLjAwMzU4bDguNTkyODMsLTQuOTkxNThjMC41MzAzMywtMC4zMDgxNyAwLjg2LC0wLjg3NzkyIDAuODYsLTEuNDk0MjV2LTYuNzM2NjdjMCwtMC43NTYwOCAtMC40MDg1LC0xLjQ0NzY3IC0xLjA2NDI1LC0xLjgwOTU4ek0zOC4zNTI0Miw3OC4wODQ0MmwtMTcuNTc5ODMsLTkuNzI4NzVjLTAuMzI5NjcsLTAuMTgyNzUgLTAuNjk4NzUsLTAuMjcyMzMgLTEuMDY0MjUsLTAuMjcyMzNjLTAuMzY1NSwwIC0wLjczNDU4LDAuMDg5NTggLTEuMDY0MjUsMC4yNzIzM2gwLjAwMzU4bC0xNy41ODM0Miw5LjcyODc1Yy0wLjY1NTc1LDAuMzYxOTIgLTEuMDY0MjUsMS4wNDk5MiAtMS4wNjQyNSwxLjgwMjQydjI2Ljc0OTU4YzAsMC4zMDgxNyAwLjE2NDgzLDAuNTk0ODMgMC40MzM1OCwwLjc0ODkyYzAuMjY4NzUsMC4xNTA1IDAuNTk4NDIsMC4xNTA1IDAuODY3MTcsLTAuMDAzNThsOC41OTI4MywtNC45OTE1OGMwLjUzMDMzLC0wLjMwODE3IDAuODU2NDIsLTAuODc3OTIgMC44NTY0MiwtMS40OTQyNXYtMTUuNzQxNThjMCwtMC4zMjk2NyAwLjE3OTE3LC0wLjYzNDI1IDAuNDY1ODMsLTAuNzkxOTJsOC4wMDg3NSwtNC40Mjl2MGMwLjE1MDUsLTAuMDgyNDIgMC4zMTUzMywtMC4xMjE4MyAwLjQ4Mzc1LC0wLjEyMTgzYzAuMTY4NDIsMCAwLjMzMzI1LDAuMDQzIDAuNDgzNzUsMC4xMjE4M2w4LjAwODc1LDQuNDMyNThjMC4yODY2NywwLjE1NzY3IDAuNDY1ODMsMC40NjIyNSAwLjQ2NTgzLDAuNzkxOTJ2MTUuNzQxNThjMCwwLjYxNjMzIDAuMzI2MDgsMS4xODYwOCAwLjg2LDEuNDk0MjVsOC41OTI4Myw0Ljk5MTU4YzAuMjY4NzUsMC4xNTQwOCAwLjU5ODQyLDAuMTU0MDggMC44NjcxNywwLjAwMzU4YzAuMjY1MTcsLTAuMTU3NjcgMC40MywtMC40NDQzMyAwLjQzLC0wLjc1MjV2LTI2Ljc0NmMwLC0wLjc1MjUgLTAuNDA4NSwtMS40NDQwOCAtMS4wNjQyNSwtMS44MDZ6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                    />
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
                  data-interval="30000"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={require("./1_U9rNa6Tj11q_98LkcGRP2w.png")}
                        alt="First slide"
                      />
                    </div>
                  </div>
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
                    <img
                      alt="svgImg"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAiIGhlaWdodD0iNDAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTYxLjY0NzY3LDY4LjUyMDVsLTE3LjU4MzQyLDkuNzI4NzVjLTAuNjU5MzMsMC4zNjE5MiAtMS4wNjQyNSwxLjAzNTU4IC0xLjA2NDI1LDEuNzYzdjE5LjQ2ODI1YzAsMC43Mjc0MiAwLjQwNDkyLDEuMzk3NSAxLjA2NDI1LDEuNzYzbDE3LjU4Nyw5LjczNTkyYzAuNjU1NzUsMC4zNjE5MiAxLjQ2OTE3LDAuMzYxOTIgMi4xMjQ5MiwwbDE3LjU4MzQyLC05LjczNTkyYzAuNjUyMTcsLTAuMzY1NSAxLjA1NzA4LC0xLjAzNTU4IDEuMDU3MDgsLTEuNzYzdi0xOS40NjgyNWMwLC0wLjcyNzQyIC0wLjQwNDkyLC0xLjM5NzUgLTEuMDY0MjUsLTEuNzYzbC0xNy41Nzk4MywtOS43Mjg3NWMtMC4zMjk2NywtMC4xODI3NSAtMC42OTg3NSwtMC4yNzIzMyAtMS4wNjQyNSwtMC4yNzIzM2MtMC4zNjkwOCwwIC0wLjczNDU4LDAuMDg5NTggLTEuMDY0MjUsMC4yNzIzM00xNTIuMTE2MDgsODYuMDQ2NThsLTIuOTMxMTcsMS42MTk2N2MtMC4xMTEwOCwwLjA2MDkyIC0wLjE3NTU4LDAuMTcyIC0wLjE3NTU4LDAuMjkzODN2My4yNDY1YzAsMC4xMjE4MyAwLjA2ODA4LDAuMjMyOTIgMC4xNzU1OCwwLjI5MzgzbDIuOTMxMTcsMS42MjMyNWMwLjExMTA4LDAuMDYwOTIgMC4yNDM2NywwLjA2MDkyIDAuMzU0NzUsMGwyLjkzMTE3LC0xLjYyMzI1YzAuMTA3NSwtMC4wNjA5MiAwLjE3NTU4LC0wLjE3MiAwLjE3NTU4LC0wLjI5Mzgzdi0zLjI0NjVjMCwtMC4xMjE4MyAtMC4wNjgwOCwtMC4yMzI5MiAtMC4xNzkxNywtMC4yOTM4M2wtMi45MzExNywtMS42MTk2N2MtMC4wNTM3NSwtMC4wMzIyNSAtMC4xMTQ2NywtMC4wNDY1OCAtMC4xNzU1OCwtMC4wNDY1OGMtMC4wNjA5MiwwIC0wLjEyMTgzLDAuMDE0MzMgLTAuMTc1NTgsMC4wNDY1OCIgZmlsbD0iIzM4OGUzYyI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjguMTA3NzUsNDcuODg3NjdsLTguNTYwNTgsLTQuNzc2NThjLTAuMjY4NzUsLTAuMTUwNSAtMC41OTg0MiwtMC4xNDY5MiAtMC44NjM1OCwwLjAxMDc1Yy0wLjI2NTE3LDAuMTU3NjcgLTAuNDMsMC40NDA3NSAtMC40MywwLjc0ODkybC0wLjAwMzU4LDI4Ljg1M2wtNy44OTQwOCwtNC4zNjgwOGMtMC4zMjk2NywtMC4xODI3NSAtMC42OTg3NSwtMC4yNzIzMyAtMS4wNjQyNSwtMC4yNzIzM2MtMC4zNjU1LDAgLTAuNzM0NTgsMC4wODk1OCAtMS4wNjQyNSwwLjI3MjMzaDAuMDAzNThsLTE3LjU4MzQyLDkuNzI4NzVjLTAuNjU5MzMsMC4zNjE5MiAtMS4wNjQyNSwxLjAzNTU4IC0xLjA2NDI1LDEuNzU5NDJ2MTkuNDY4MjVjMCwwLjcyNzQyIDAuNDA0OTIsMS4zOTc1IDEuMDY0MjUsMS43NjNsMTcuNTg3LDkuNzM1OTJjMC42NTU3NSwwLjM2MTkyIDEuNDY5MTcsMC4zNjE5MiAyLjEyNDkyLDBsMTcuNTgzNDIsLTkuNzM1OTJjMC42NTIxNywtMC4zNjE5MiAxLjA1NzA4LC0xLjAzNTU4IDEuMDU3MDgsLTEuNzYzdi00OS45MDUwOGMwLC0wLjYzMDY3IC0wLjM0NCwtMS4yMTExNyAtMC44OTIyNSwtMS41MTkzM3pNMTE3Ljc2OTgzLDk0LjgwNzgzbC03Ljk5MDgzLDQuNDI1NDJjLTAuMjk3NDIsMC4xNjQ4MyAtMC42NjY1LDAuMTY0ODMgLTAuOTYzOTIsMGwtNy45OTQ0MiwtNC40MjU0MmMtMC4zMDQ1OCwtMC4xNjQ4MyAtMC40ODczMywtMC40NzMgLTAuNDg3MzMsLTAuODAyNjd2LTguODUwODNjMCwtMC4zMjk2NyAwLjE4Mjc1LC0wLjYzNDI1IDAuNDgzNzUsLTAuODAyNjdsNy45OTQ0MiwtNC40MjE4M2gtMC4wMDM1OGMwLjE1MDUsLTAuMDgyNDIgMC4zMTUzMywtMC4xMjE4MyAwLjQ4Mzc1LC0wLjEyMTgzYzAuMTY4NDIsMCAwLjMzMzI1LDAuMDQzIDAuNDgzNzUsMC4xMjE4M2w3Ljk5MDgzLDQuNDIxODNjMC4zMDEsMC4xNjg0MiAwLjQ4Mzc1LDAuNDc2NTggMC40ODM3NSwwLjgwNjI1djguODUwODNjMCwwLjMyNjA4IC0wLjE4Mjc1LDAuNjM0MjUgLTAuNDgwMTcsMC43OTkwOHoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNjEuNjQ3NjcsNjguNTIwNWwtMTguNjQ3NjcsMzAuOTZjMCwwLjcyNzQyIDAuNDA0OTIsMS4zOTc1IDEuMDY0MjUsMS43NjNsMTcuNTg3LDkuNzM1OTJjMC42NTU3NSwwLjM2MTkyIDEuNDY5MTcsMC4zNjE5MiAyLjEyNDkyLDBsMTguNjQwNSwtMzAuOTY3MTdjMCwtMC43Mjc0MiAtMC40MDQ5MiwtMS4zOTc1IC0xLjA2NDI1LC0xLjc2M2wtMTcuNTc5ODMsLTkuNzI4NzVjLTAuMzI5NjcsLTAuMTgyNzUgLTAuNjk4NzUsLTAuMjcyMzMgLTEuMDY0MjUsLTAuMjcyMzNjLTAuMzY5MDgsMCAtMC43MzQ1OCwwLjA4OTU4IC0xLjA2NDI1LDAuMjcyMzMiIGZpbGw9IiMyZTdkMzIiPjwvcGF0aD48cGF0aCBkPSJNNjEuNjQ3NjcsNjguNTIwNWwtMTcuNTgzNDIsOS43Mjg3NWMtMC42NTkzMywwLjM2MTkyIC0xLjA2NDI1LDEuMDM1NTggLTEuMDY0MjUsMS43NjNsMTguNjQ3NjcsMzAuOTY3MTdjMC42NTU3NSwwLjM2MTkyIDEuNDY5MTcsMC4zNjE5MiAyLjEyNDkyLDBsMTcuNTgzNDIsLTkuNzM1OTJjMC42NTU3NSwtMC4zNjU1IDEuMDYwNjcsLTEuMDM1NTggMS4wNjA2NywtMS43NjNsLTE4LjY0NDA4LC0zMC45NmMtMC4zMjk2NywtMC4xODI3NSAtMC42OTg3NSwtMC4yNzIzMyAtMS4wNjQyNSwtMC4yNzIzM2MtMC4zNjkwOCwwIC0wLjczNDU4LDAuMDg5NTggLTEuMDY0MjUsMC4yNzIzMyIgZmlsbD0iIzRjYWY1MCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNzAuOTM1NzUsNzguMDg0NDJsLTE3LjU3OTgzLC05LjcyODc1Yy0wLjMyOTY3LC0wLjE4Mjc1IC0wLjY5ODc1LC0wLjI3MjMzIC0xLjA2NDI1LC0wLjI3MjMzYy0wLjM2NTUsMCAtMC43MzQ1OCwwLjA4OTU4IC0xLjA2NDI1LDAuMjcyMzNoMC4wMDM1OGwtMTcuNTgzNDIsOS43Mjg3NWMtMC42NTU3NSwwLjM2MTkyIC0xLjA2NDI1LDEuMDQ5OTIgLTEuMDY0MjUsMS44MDI0MnYxOS4zODk0MmMwLDAuNzQ4OTIgMC40MDg1LDEuNDQwNSAxLjA2NDI1LDEuODAyNDJsMTcuNTg3LDkuNzM1OTJjMC42NTkzMywwLjM2NTUgMS40NjU1OCwwLjM2NTUgMi4xMjQ5MiwwbDguMTA5MDgsLTQuNDg5OTJjMC43NDE3NSwtMC40MTIwOCAwLjczODE3LC0xLjQ3NjMzIC0wLjAwNzE3LC0xLjg4NDgzbC0xNy42NDQzMywtOS42Mjg0MmMtMC4yOTc0MiwtMC4xNjg0MiAtMC40ODM3NSwtMC40ODAxNyAtMC40ODM3NSwtMC44MTd2LTguODM2NWMwLC0wLjMyOTY3IDAuMTc5MTcsLTAuNjM0MjUgMC40NjU4MywtMC43OTE5Mmw4LjAwODc1LC00LjQyOWgtMC4wMDM1OGMwLjE1MDUsLTAuMDgyNDIgMC4zMTUzMywtMC4xMjE4MyAwLjQ4Mzc1LC0wLjEyMTgzYzAuMTY4NDIsMCAwLjMzMzI1LDAuMDQzIDAuNDgzNzUsMC4xMjE4M2w4LjAwODc1LDQuNDMyNThjMC4yODY2NywwLjE1NzY3IDAuNDY1ODMsMC40NjIyNSAwLjQ2NTgzLDAuNzkxOTJ2Ny4yMDk2N2MwLDAuMzA4MTcgMC4xNjQ4MywwLjU5NDgzIDAuNDMzNTgsMC43NDg5MmMwLjI2ODc1LDAuMTUwNSAwLjU5ODQyLDAuMTUwNSAwLjg2NzE3LC0wLjAwMzU4bDguNTkyODMsLTQuOTkxNThjMC41MzAzMywtMC4zMDgxNyAwLjg2LC0wLjg3NzkyIDAuODYsLTEuNDk0MjV2LTYuNzM2NjdjMCwtMC43NTYwOCAtMC40MDg1LC0xLjQ0NzY3IC0xLjA2NDI1LC0xLjgwOTU4ek0zOC4zNTI0Miw3OC4wODQ0MmwtMTcuNTc5ODMsLTkuNzI4NzVjLTAuMzI5NjcsLTAuMTgyNzUgLTAuNjk4NzUsLTAuMjcyMzMgLTEuMDY0MjUsLTAuMjcyMzNjLTAuMzY1NSwwIC0wLjczNDU4LDAuMDg5NTggLTEuMDY0MjUsMC4yNzIzM2gwLjAwMzU4bC0xNy41ODM0Miw5LjcyODc1Yy0wLjY1NTc1LDAuMzYxOTIgLTEuMDY0MjUsMS4wNDk5MiAtMS4wNjQyNSwxLjgwMjQydjI2Ljc0OTU4YzAsMC4zMDgxNyAwLjE2NDgzLDAuNTk0ODMgMC40MzM1OCwwLjc0ODkyYzAuMjY4NzUsMC4xNTA1IDAuNTk4NDIsMC4xNTA1IDAuODY3MTcsLTAuMDAzNThsOC41OTI4MywtNC45OTE1OGMwLjUzMDMzLC0wLjMwODE3IDAuODU2NDIsLTAuODc3OTIgMC44NTY0MiwtMS40OTQyNXYtMTUuNzQxNThjMCwtMC4zMjk2NyAwLjE3OTE3LC0wLjYzNDI1IDAuNDY1ODMsLTAuNzkxOTJsOC4wMDg3NSwtNC40Mjl2MGMwLjE1MDUsLTAuMDgyNDIgMC4zMTUzMywtMC4xMjE4MyAwLjQ4Mzc1LC0wLjEyMTgzYzAuMTY4NDIsMCAwLjMzMzI1LDAuMDQzIDAuNDgzNzUsMC4xMjE4M2w4LjAwODc1LDQuNDMyNThjMC4yODY2NywwLjE1NzY3IDAuNDY1ODMsMC40NjIyNSAwLjQ2NTgzLDAuNzkxOTJ2MTUuNzQxNThjMCwwLjYxNjMzIDAuMzI2MDgsMS4xODYwOCAwLjg2LDEuNDk0MjVsOC41OTI4Myw0Ljk5MTU4YzAuMjY4NzUsMC4xNTQwOCAwLjU5ODQyLDAuMTU0MDggMC44NjcxNywwLjAwMzU4YzAuMjY1MTcsLTAuMTU3NjcgMC40MywtMC40NDQzMyAwLjQzLC0wLjc1MjV2LTI2Ljc0NmMwLC0wLjc1MjUgLTAuNDA4NSwtMS40NDQwOCAtMS4wNjQyNSwtMS44MDZ6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                    />
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
                  data-interval="30000"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={require("./LMS.jpg")}
                        alt="First slide"
                      />
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <h4 className="card-title mt-1">Library Management System</h4>
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
                    <img
                      alt="svgImg"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAiIGhlaWdodD0iNDAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTYxLjY0NzY3LDY4LjUyMDVsLTE3LjU4MzQyLDkuNzI4NzVjLTAuNjU5MzMsMC4zNjE5MiAtMS4wNjQyNSwxLjAzNTU4IC0xLjA2NDI1LDEuNzYzdjE5LjQ2ODI1YzAsMC43Mjc0MiAwLjQwNDkyLDEuMzk3NSAxLjA2NDI1LDEuNzYzbDE3LjU4Nyw5LjczNTkyYzAuNjU1NzUsMC4zNjE5MiAxLjQ2OTE3LDAuMzYxOTIgMi4xMjQ5MiwwbDE3LjU4MzQyLC05LjczNTkyYzAuNjUyMTcsLTAuMzY1NSAxLjA1NzA4LC0xLjAzNTU4IDEuMDU3MDgsLTEuNzYzdi0xOS40NjgyNWMwLC0wLjcyNzQyIC0wLjQwNDkyLC0xLjM5NzUgLTEuMDY0MjUsLTEuNzYzbC0xNy41Nzk4MywtOS43Mjg3NWMtMC4zMjk2NywtMC4xODI3NSAtMC42OTg3NSwtMC4yNzIzMyAtMS4wNjQyNSwtMC4yNzIzM2MtMC4zNjkwOCwwIC0wLjczNDU4LDAuMDg5NTggLTEuMDY0MjUsMC4yNzIzM00xNTIuMTE2MDgsODYuMDQ2NThsLTIuOTMxMTcsMS42MTk2N2MtMC4xMTEwOCwwLjA2MDkyIC0wLjE3NTU4LDAuMTcyIC0wLjE3NTU4LDAuMjkzODN2My4yNDY1YzAsMC4xMjE4MyAwLjA2ODA4LDAuMjMyOTIgMC4xNzU1OCwwLjI5MzgzbDIuOTMxMTcsMS42MjMyNWMwLjExMTA4LDAuMDYwOTIgMC4yNDM2NywwLjA2MDkyIDAuMzU0NzUsMGwyLjkzMTE3LC0xLjYyMzI1YzAuMTA3NSwtMC4wNjA5MiAwLjE3NTU4LC0wLjE3MiAwLjE3NTU4LC0wLjI5Mzgzdi0zLjI0NjVjMCwtMC4xMjE4MyAtMC4wNjgwOCwtMC4yMzI5MiAtMC4xNzkxNywtMC4yOTM4M2wtMi45MzExNywtMS42MTk2N2MtMC4wNTM3NSwtMC4wMzIyNSAtMC4xMTQ2NywtMC4wNDY1OCAtMC4xNzU1OCwtMC4wNDY1OGMtMC4wNjA5MiwwIC0wLjEyMTgzLDAuMDE0MzMgLTAuMTc1NTgsMC4wNDY1OCIgZmlsbD0iIzM4OGUzYyI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjguMTA3NzUsNDcuODg3NjdsLTguNTYwNTgsLTQuNzc2NThjLTAuMjY4NzUsLTAuMTUwNSAtMC41OTg0MiwtMC4xNDY5MiAtMC44NjM1OCwwLjAxMDc1Yy0wLjI2NTE3LDAuMTU3NjcgLTAuNDMsMC40NDA3NSAtMC40MywwLjc0ODkybC0wLjAwMzU4LDI4Ljg1M2wtNy44OTQwOCwtNC4zNjgwOGMtMC4zMjk2NywtMC4xODI3NSAtMC42OTg3NSwtMC4yNzIzMyAtMS4wNjQyNSwtMC4yNzIzM2MtMC4zNjU1LDAgLTAuNzM0NTgsMC4wODk1OCAtMS4wNjQyNSwwLjI3MjMzaDAuMDAzNThsLTE3LjU4MzQyLDkuNzI4NzVjLTAuNjU5MzMsMC4zNjE5MiAtMS4wNjQyNSwxLjAzNTU4IC0xLjA2NDI1LDEuNzU5NDJ2MTkuNDY4MjVjMCwwLjcyNzQyIDAuNDA0OTIsMS4zOTc1IDEuMDY0MjUsMS43NjNsMTcuNTg3LDkuNzM1OTJjMC42NTU3NSwwLjM2MTkyIDEuNDY5MTcsMC4zNjE5MiAyLjEyNDkyLDBsMTcuNTgzNDIsLTkuNzM1OTJjMC42NTIxNywtMC4zNjE5MiAxLjA1NzA4LC0xLjAzNTU4IDEuMDU3MDgsLTEuNzYzdi00OS45MDUwOGMwLC0wLjYzMDY3IC0wLjM0NCwtMS4yMTExNyAtMC44OTIyNSwtMS41MTkzM3pNMTE3Ljc2OTgzLDk0LjgwNzgzbC03Ljk5MDgzLDQuNDI1NDJjLTAuMjk3NDIsMC4xNjQ4MyAtMC42NjY1LDAuMTY0ODMgLTAuOTYzOTIsMGwtNy45OTQ0MiwtNC40MjU0MmMtMC4zMDQ1OCwtMC4xNjQ4MyAtMC40ODczMywtMC40NzMgLTAuNDg3MzMsLTAuODAyNjd2LTguODUwODNjMCwtMC4zMjk2NyAwLjE4Mjc1LC0wLjYzNDI1IDAuNDgzNzUsLTAuODAyNjdsNy45OTQ0MiwtNC40MjE4M2gtMC4wMDM1OGMwLjE1MDUsLTAuMDgyNDIgMC4zMTUzMywtMC4xMjE4MyAwLjQ4Mzc1LC0wLjEyMTgzYzAuMTY4NDIsMCAwLjMzMzI1LDAuMDQzIDAuNDgzNzUsMC4xMjE4M2w3Ljk5MDgzLDQuNDIxODNjMC4zMDEsMC4xNjg0MiAwLjQ4Mzc1LDAuNDc2NTggMC40ODM3NSwwLjgwNjI1djguODUwODNjMCwwLjMyNjA4IC0wLjE4Mjc1LDAuNjM0MjUgLTAuNDgwMTcsMC43OTkwOHoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNjEuNjQ3NjcsNjguNTIwNWwtMTguNjQ3NjcsMzAuOTZjMCwwLjcyNzQyIDAuNDA0OTIsMS4zOTc1IDEuMDY0MjUsMS43NjNsMTcuNTg3LDkuNzM1OTJjMC42NTU3NSwwLjM2MTkyIDEuNDY5MTcsMC4zNjE5MiAyLjEyNDkyLDBsMTguNjQwNSwtMzAuOTY3MTdjMCwtMC43Mjc0MiAtMC40MDQ5MiwtMS4zOTc1IC0xLjA2NDI1LC0xLjc2M2wtMTcuNTc5ODMsLTkuNzI4NzVjLTAuMzI5NjcsLTAuMTgyNzUgLTAuNjk4NzUsLTAuMjcyMzMgLTEuMDY0MjUsLTAuMjcyMzNjLTAuMzY5MDgsMCAtMC43MzQ1OCwwLjA4OTU4IC0xLjA2NDI1LDAuMjcyMzMiIGZpbGw9IiMyZTdkMzIiPjwvcGF0aD48cGF0aCBkPSJNNjEuNjQ3NjcsNjguNTIwNWwtMTcuNTgzNDIsOS43Mjg3NWMtMC42NTkzMywwLjM2MTkyIC0xLjA2NDI1LDEuMDM1NTggLTEuMDY0MjUsMS43NjNsMTguNjQ3NjcsMzAuOTY3MTdjMC42NTU3NSwwLjM2MTkyIDEuNDY5MTcsMC4zNjE5MiAyLjEyNDkyLDBsMTcuNTgzNDIsLTkuNzM1OTJjMC42NTU3NSwtMC4zNjU1IDEuMDYwNjcsLTEuMDM1NTggMS4wNjA2NywtMS43NjNsLTE4LjY0NDA4LC0zMC45NmMtMC4zMjk2NywtMC4xODI3NSAtMC42OTg3NSwtMC4yNzIzMyAtMS4wNjQyNSwtMC4yNzIzM2MtMC4zNjkwOCwwIC0wLjczNDU4LDAuMDg5NTggLTEuMDY0MjUsMC4yNzIzMyIgZmlsbD0iIzRjYWY1MCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNzAuOTM1NzUsNzguMDg0NDJsLTE3LjU3OTgzLC05LjcyODc1Yy0wLjMyOTY3LC0wLjE4Mjc1IC0wLjY5ODc1LC0wLjI3MjMzIC0xLjA2NDI1LC0wLjI3MjMzYy0wLjM2NTUsMCAtMC43MzQ1OCwwLjA4OTU4IC0xLjA2NDI1LDAuMjcyMzNoMC4wMDM1OGwtMTcuNTgzNDIsOS43Mjg3NWMtMC42NTU3NSwwLjM2MTkyIC0xLjA2NDI1LDEuMDQ5OTIgLTEuMDY0MjUsMS44MDI0MnYxOS4zODk0MmMwLDAuNzQ4OTIgMC40MDg1LDEuNDQwNSAxLjA2NDI1LDEuODAyNDJsMTcuNTg3LDkuNzM1OTJjMC42NTkzMywwLjM2NTUgMS40NjU1OCwwLjM2NTUgMi4xMjQ5MiwwbDguMTA5MDgsLTQuNDg5OTJjMC43NDE3NSwtMC40MTIwOCAwLjczODE3LC0xLjQ3NjMzIC0wLjAwNzE3LC0xLjg4NDgzbC0xNy42NDQzMywtOS42Mjg0MmMtMC4yOTc0MiwtMC4xNjg0MiAtMC40ODM3NSwtMC40ODAxNyAtMC40ODM3NSwtMC44MTd2LTguODM2NWMwLC0wLjMyOTY3IDAuMTc5MTcsLTAuNjM0MjUgMC40NjU4MywtMC43OTE5Mmw4LjAwODc1LC00LjQyOWgtMC4wMDM1OGMwLjE1MDUsLTAuMDgyNDIgMC4zMTUzMywtMC4xMjE4MyAwLjQ4Mzc1LC0wLjEyMTgzYzAuMTY4NDIsMCAwLjMzMzI1LDAuMDQzIDAuNDgzNzUsMC4xMjE4M2w4LjAwODc1LDQuNDMyNThjMC4yODY2NywwLjE1NzY3IDAuNDY1ODMsMC40NjIyNSAwLjQ2NTgzLDAuNzkxOTJ2Ny4yMDk2N2MwLDAuMzA4MTcgMC4xNjQ4MywwLjU5NDgzIDAuNDMzNTgsMC43NDg5MmMwLjI2ODc1LDAuMTUwNSAwLjU5ODQyLDAuMTUwNSAwLjg2NzE3LC0wLjAwMzU4bDguNTkyODMsLTQuOTkxNThjMC41MzAzMywtMC4zMDgxNyAwLjg2LC0wLjg3NzkyIDAuODYsLTEuNDk0MjV2LTYuNzM2NjdjMCwtMC43NTYwOCAtMC40MDg1LC0xLjQ0NzY3IC0xLjA2NDI1LC0xLjgwOTU4ek0zOC4zNTI0Miw3OC4wODQ0MmwtMTcuNTc5ODMsLTkuNzI4NzVjLTAuMzI5NjcsLTAuMTgyNzUgLTAuNjk4NzUsLTAuMjcyMzMgLTEuMDY0MjUsLTAuMjcyMzNjLTAuMzY1NSwwIC0wLjczNDU4LDAuMDg5NTggLTEuMDY0MjUsMC4yNzIzM2gwLjAwMzU4bC0xNy41ODM0Miw5LjcyODc1Yy0wLjY1NTc1LDAuMzYxOTIgLTEuMDY0MjUsMS4wNDk5MiAtMS4wNjQyNSwxLjgwMjQydjI2Ljc0OTU4YzAsMC4zMDgxNyAwLjE2NDgzLDAuNTk0ODMgMC40MzM1OCwwLjc0ODkyYzAuMjY4NzUsMC4xNTA1IDAuNTk4NDIsMC4xNTA1IDAuODY3MTcsLTAuMDAzNThsOC41OTI4MywtNC45OTE1OGMwLjUzMDMzLC0wLjMwODE3IDAuODU2NDIsLTAuODc3OTIgMC44NTY0MiwtMS40OTQyNXYtMTUuNzQxNThjMCwtMC4zMjk2NyAwLjE3OTE3LC0wLjYzNDI1IDAuNDY1ODMsLTAuNzkxOTJsOC4wMDg3NSwtNC40Mjl2MGMwLjE1MDUsLTAuMDgyNDIgMC4zMTUzMywtMC4xMjE4MyAwLjQ4Mzc1LC0wLjEyMTgzYzAuMTY4NDIsMCAwLjMzMzI1LDAuMDQzIDAuNDgzNzUsMC4xMjE4M2w4LjAwODc1LDQuNDMyNThjMC4yODY2NywwLjE1NzY3IDAuNDY1ODMsMC40NjIyNSAwLjQ2NTgzLDAuNzkxOTJ2MTUuNzQxNThjMCwwLjYxNjMzIDAuMzI2MDgsMS4xODYwOCAwLjg2LDEuNDk0MjVsOC41OTI4Myw0Ljk5MTU4YzAuMjY4NzUsMC4xNTQwOCAwLjU5ODQyLDAuMTU0MDggMC44NjcxNywwLjAwMzU4YzAuMjY1MTcsLTAuMTU3NjcgMC40MywtMC40NDQzMyAwLjQzLC0wLjc1MjV2LTI2Ljc0NmMwLC0wLjc1MjUgLTAuNDA4NSwtMS40NDQwOCAtMS4wNjQyNSwtMS44MDZ6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                    />
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
                  id="carouselExampleIndicators5"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="30000"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={require("./rest.jpeg")}
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
                    <img
                      alt="svgImg"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAiIGhlaWdodD0iNDAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTYxLjY0NzY3LDY4LjUyMDVsLTE3LjU4MzQyLDkuNzI4NzVjLTAuNjU5MzMsMC4zNjE5MiAtMS4wNjQyNSwxLjAzNTU4IC0xLjA2NDI1LDEuNzYzdjE5LjQ2ODI1YzAsMC43Mjc0MiAwLjQwNDkyLDEuMzk3NSAxLjA2NDI1LDEuNzYzbDE3LjU4Nyw5LjczNTkyYzAuNjU1NzUsMC4zNjE5MiAxLjQ2OTE3LDAuMzYxOTIgMi4xMjQ5MiwwbDE3LjU4MzQyLC05LjczNTkyYzAuNjUyMTcsLTAuMzY1NSAxLjA1NzA4LC0xLjAzNTU4IDEuMDU3MDgsLTEuNzYzdi0xOS40NjgyNWMwLC0wLjcyNzQyIC0wLjQwNDkyLC0xLjM5NzUgLTEuMDY0MjUsLTEuNzYzbC0xNy41Nzk4MywtOS43Mjg3NWMtMC4zMjk2NywtMC4xODI3NSAtMC42OTg3NSwtMC4yNzIzMyAtMS4wNjQyNSwtMC4yNzIzM2MtMC4zNjkwOCwwIC0wLjczNDU4LDAuMDg5NTggLTEuMDY0MjUsMC4yNzIzM00xNTIuMTE2MDgsODYuMDQ2NThsLTIuOTMxMTcsMS42MTk2N2MtMC4xMTEwOCwwLjA2MDkyIC0wLjE3NTU4LDAuMTcyIC0wLjE3NTU4LDAuMjkzODN2My4yNDY1YzAsMC4xMjE4MyAwLjA2ODA4LDAuMjMyOTIgMC4xNzU1OCwwLjI5MzgzbDIuOTMxMTcsMS42MjMyNWMwLjExMTA4LDAuMDYwOTIgMC4yNDM2NywwLjA2MDkyIDAuMzU0NzUsMGwyLjkzMTE3LC0xLjYyMzI1YzAuMTA3NSwtMC4wNjA5MiAwLjE3NTU4LC0wLjE3MiAwLjE3NTU4LC0wLjI5Mzgzdi0zLjI0NjVjMCwtMC4xMjE4MyAtMC4wNjgwOCwtMC4yMzI5MiAtMC4xNzkxNywtMC4yOTM4M2wtMi45MzExNywtMS42MTk2N2MtMC4wNTM3NSwtMC4wMzIyNSAtMC4xMTQ2NywtMC4wNDY1OCAtMC4xNzU1OCwtMC4wNDY1OGMtMC4wNjA5MiwwIC0wLjEyMTgzLDAuMDE0MzMgLTAuMTc1NTgsMC4wNDY1OCIgZmlsbD0iIzM4OGUzYyI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjguMTA3NzUsNDcuODg3NjdsLTguNTYwNTgsLTQuNzc2NThjLTAuMjY4NzUsLTAuMTUwNSAtMC41OTg0MiwtMC4xNDY5MiAtMC44NjM1OCwwLjAxMDc1Yy0wLjI2NTE3LDAuMTU3NjcgLTAuNDMsMC40NDA3NSAtMC40MywwLjc0ODkybC0wLjAwMzU4LDI4Ljg1M2wtNy44OTQwOCwtNC4zNjgwOGMtMC4zMjk2NywtMC4xODI3NSAtMC42OTg3NSwtMC4yNzIzMyAtMS4wNjQyNSwtMC4yNzIzM2MtMC4zNjU1LDAgLTAuNzM0NTgsMC4wODk1OCAtMS4wNjQyNSwwLjI3MjMzaDAuMDAzNThsLTE3LjU4MzQyLDkuNzI4NzVjLTAuNjU5MzMsMC4zNjE5MiAtMS4wNjQyNSwxLjAzNTU4IC0xLjA2NDI1LDEuNzU5NDJ2MTkuNDY4MjVjMCwwLjcyNzQyIDAuNDA0OTIsMS4zOTc1IDEuMDY0MjUsMS43NjNsMTcuNTg3LDkuNzM1OTJjMC42NTU3NSwwLjM2MTkyIDEuNDY5MTcsMC4zNjE5MiAyLjEyNDkyLDBsMTcuNTgzNDIsLTkuNzM1OTJjMC42NTIxNywtMC4zNjE5MiAxLjA1NzA4LC0xLjAzNTU4IDEuMDU3MDgsLTEuNzYzdi00OS45MDUwOGMwLC0wLjYzMDY3IC0wLjM0NCwtMS4yMTExNyAtMC44OTIyNSwtMS41MTkzM3pNMTE3Ljc2OTgzLDk0LjgwNzgzbC03Ljk5MDgzLDQuNDI1NDJjLTAuMjk3NDIsMC4xNjQ4MyAtMC42NjY1LDAuMTY0ODMgLTAuOTYzOTIsMGwtNy45OTQ0MiwtNC40MjU0MmMtMC4zMDQ1OCwtMC4xNjQ4MyAtMC40ODczMywtMC40NzMgLTAuNDg3MzMsLTAuODAyNjd2LTguODUwODNjMCwtMC4zMjk2NyAwLjE4Mjc1LC0wLjYzNDI1IDAuNDgzNzUsLTAuODAyNjdsNy45OTQ0MiwtNC40MjE4M2gtMC4wMDM1OGMwLjE1MDUsLTAuMDgyNDIgMC4zMTUzMywtMC4xMjE4MyAwLjQ4Mzc1LC0wLjEyMTgzYzAuMTY4NDIsMCAwLjMzMzI1LDAuMDQzIDAuNDgzNzUsMC4xMjE4M2w3Ljk5MDgzLDQuNDIxODNjMC4zMDEsMC4xNjg0MiAwLjQ4Mzc1LDAuNDc2NTggMC40ODM3NSwwLjgwNjI1djguODUwODNjMCwwLjMyNjA4IC0wLjE4Mjc1LDAuNjM0MjUgLTAuNDgwMTcsMC43OTkwOHoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNjEuNjQ3NjcsNjguNTIwNWwtMTguNjQ3NjcsMzAuOTZjMCwwLjcyNzQyIDAuNDA0OTIsMS4zOTc1IDEuMDY0MjUsMS43NjNsMTcuNTg3LDkuNzM1OTJjMC42NTU3NSwwLjM2MTkyIDEuNDY5MTcsMC4zNjE5MiAyLjEyNDkyLDBsMTguNjQwNSwtMzAuOTY3MTdjMCwtMC43Mjc0MiAtMC40MDQ5MiwtMS4zOTc1IC0xLjA2NDI1LC0xLjc2M2wtMTcuNTc5ODMsLTkuNzI4NzVjLTAuMzI5NjcsLTAuMTgyNzUgLTAuNjk4NzUsLTAuMjcyMzMgLTEuMDY0MjUsLTAuMjcyMzNjLTAuMzY5MDgsMCAtMC43MzQ1OCwwLjA4OTU4IC0xLjA2NDI1LDAuMjcyMzMiIGZpbGw9IiMyZTdkMzIiPjwvcGF0aD48cGF0aCBkPSJNNjEuNjQ3NjcsNjguNTIwNWwtMTcuNTgzNDIsOS43Mjg3NWMtMC42NTkzMywwLjM2MTkyIC0xLjA2NDI1LDEuMDM1NTggLTEuMDY0MjUsMS43NjNsMTguNjQ3NjcsMzAuOTY3MTdjMC42NTU3NSwwLjM2MTkyIDEuNDY5MTcsMC4zNjE5MiAyLjEyNDkyLDBsMTcuNTgzNDIsLTkuNzM1OTJjMC42NTU3NSwtMC4zNjU1IDEuMDYwNjcsLTEuMDM1NTggMS4wNjA2NywtMS43NjNsLTE4LjY0NDA4LC0zMC45NmMtMC4zMjk2NywtMC4xODI3NSAtMC42OTg3NSwtMC4yNzIzMyAtMS4wNjQyNSwtMC4yNzIzM2MtMC4zNjkwOCwwIC0wLjczNDU4LDAuMDg5NTggLTEuMDY0MjUsMC4yNzIzMyIgZmlsbD0iIzRjYWY1MCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNzAuOTM1NzUsNzguMDg0NDJsLTE3LjU3OTgzLC05LjcyODc1Yy0wLjMyOTY3LC0wLjE4Mjc1IC0wLjY5ODc1LC0wLjI3MjMzIC0xLjA2NDI1LC0wLjI3MjMzYy0wLjM2NTUsMCAtMC43MzQ1OCwwLjA4OTU4IC0xLjA2NDI1LDAuMjcyMzNoMC4wMDM1OGwtMTcuNTgzNDIsOS43Mjg3NWMtMC42NTU3NSwwLjM2MTkyIC0xLjA2NDI1LDEuMDQ5OTIgLTEuMDY0MjUsMS44MDI0MnYxOS4zODk0MmMwLDAuNzQ4OTIgMC40MDg1LDEuNDQwNSAxLjA2NDI1LDEuODAyNDJsMTcuNTg3LDkuNzM1OTJjMC42NTkzMywwLjM2NTUgMS40NjU1OCwwLjM2NTUgMi4xMjQ5MiwwbDguMTA5MDgsLTQuNDg5OTJjMC43NDE3NSwtMC40MTIwOCAwLjczODE3LC0xLjQ3NjMzIC0wLjAwNzE3LC0xLjg4NDgzbC0xNy42NDQzMywtOS42Mjg0MmMtMC4yOTc0MiwtMC4xNjg0MiAtMC40ODM3NSwtMC40ODAxNyAtMC40ODM3NSwtMC44MTd2LTguODM2NWMwLC0wLjMyOTY3IDAuMTc5MTcsLTAuNjM0MjUgMC40NjU4MywtMC43OTE5Mmw4LjAwODc1LC00LjQyOWgtMC4wMDM1OGMwLjE1MDUsLTAuMDgyNDIgMC4zMTUzMywtMC4xMjE4MyAwLjQ4Mzc1LC0wLjEyMTgzYzAuMTY4NDIsMCAwLjMzMzI1LDAuMDQzIDAuNDgzNzUsMC4xMjE4M2w4LjAwODc1LDQuNDMyNThjMC4yODY2NywwLjE1NzY3IDAuNDY1ODMsMC40NjIyNSAwLjQ2NTgzLDAuNzkxOTJ2Ny4yMDk2N2MwLDAuMzA4MTcgMC4xNjQ4MywwLjU5NDgzIDAuNDMzNTgsMC43NDg5MmMwLjI2ODc1LDAuMTUwNSAwLjU5ODQyLDAuMTUwNSAwLjg2NzE3LC0wLjAwMzU4bDguNTkyODMsLTQuOTkxNThjMC41MzAzMywtMC4zMDgxNyAwLjg2LC0wLjg3NzkyIDAuODYsLTEuNDk0MjV2LTYuNzM2NjdjMCwtMC43NTYwOCAtMC40MDg1LC0xLjQ0NzY3IC0xLjA2NDI1LC0xLjgwOTU4ek0zOC4zNTI0Miw3OC4wODQ0MmwtMTcuNTc5ODMsLTkuNzI4NzVjLTAuMzI5NjcsLTAuMTgyNzUgLTAuNjk4NzUsLTAuMjcyMzMgLTEuMDY0MjUsLTAuMjcyMzNjLTAuMzY1NSwwIC0wLjczNDU4LDAuMDg5NTggLTEuMDY0MjUsMC4yNzIzM2gwLjAwMzU4bC0xNy41ODM0Miw5LjcyODc1Yy0wLjY1NTc1LDAuMzYxOTIgLTEuMDY0MjUsMS4wNDk5MiAtMS4wNjQyNSwxLjgwMjQydjI2Ljc0OTU4YzAsMC4zMDgxNyAwLjE2NDgzLDAuNTk0ODMgMC40MzM1OCwwLjc0ODkyYzAuMjY4NzUsMC4xNTA1IDAuNTk4NDIsMC4xNTA1IDAuODY3MTcsLTAuMDAzNThsOC41OTI4MywtNC45OTE1OGMwLjUzMDMzLC0wLjMwODE3IDAuODU2NDIsLTAuODc3OTIgMC44NTY0MiwtMS40OTQyNXYtMTUuNzQxNThjMCwtMC4zMjk2NyAwLjE3OTE3LC0wLjYzNDI1IDAuNDY1ODMsLTAuNzkxOTJsOC4wMDg3NSwtNC40Mjl2MGMwLjE1MDUsLTAuMDgyNDIgMC4zMTUzMywtMC4xMjE4MyAwLjQ4Mzc1LC0wLjEyMTgzYzAuMTY4NDIsMCAwLjMzMzI1LDAuMDQzIDAuNDgzNzUsMC4xMjE4M2w4LjAwODc1LDQuNDMyNThjMC4yODY2NywwLjE1NzY3IDAuNDY1ODMsMC40NjIyNSAwLjQ2NTgzLDAuNzkxOTJ2MTUuNzQxNThjMCwwLjYxNjMzIDAuMzI2MDgsMS4xODYwOCAwLjg2LDEuNDk0MjVsOC41OTI4Myw0Ljk5MTU4YzAuMjY4NzUsMC4xNTQwOCAwLjU5ODQyLDAuMTU0MDggMC44NjcxNywwLjAwMzU4YzAuMjY1MTcsLTAuMTU3NjcgMC40MywtMC40NDQzMyAwLjQzLC0wLjc1MjV2LTI2Ljc0NmMwLC0wLjc1MjUgLTAuNDA4NSwtMS40NDQwOCAtMS4wNjQyNSwtMS44MDZ6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                    />
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
                  data-interval="30000"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={require("./note-taking.png")}
                        alt="Zero slide"
                      />
                    </div>
                  </div>
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
                    <img
                      alt="svgImg"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAiIGhlaWdodD0iNDAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTYxLjY0NzY3LDY4LjUyMDVsLTE3LjU4MzQyLDkuNzI4NzVjLTAuNjU5MzMsMC4zNjE5MiAtMS4wNjQyNSwxLjAzNTU4IC0xLjA2NDI1LDEuNzYzdjE5LjQ2ODI1YzAsMC43Mjc0MiAwLjQwNDkyLDEuMzk3NSAxLjA2NDI1LDEuNzYzbDE3LjU4Nyw5LjczNTkyYzAuNjU1NzUsMC4zNjE5MiAxLjQ2OTE3LDAuMzYxOTIgMi4xMjQ5MiwwbDE3LjU4MzQyLC05LjczNTkyYzAuNjUyMTcsLTAuMzY1NSAxLjA1NzA4LC0xLjAzNTU4IDEuMDU3MDgsLTEuNzYzdi0xOS40NjgyNWMwLC0wLjcyNzQyIC0wLjQwNDkyLC0xLjM5NzUgLTEuMDY0MjUsLTEuNzYzbC0xNy41Nzk4MywtOS43Mjg3NWMtMC4zMjk2NywtMC4xODI3NSAtMC42OTg3NSwtMC4yNzIzMyAtMS4wNjQyNSwtMC4yNzIzM2MtMC4zNjkwOCwwIC0wLjczNDU4LDAuMDg5NTggLTEuMDY0MjUsMC4yNzIzM00xNTIuMTE2MDgsODYuMDQ2NThsLTIuOTMxMTcsMS42MTk2N2MtMC4xMTEwOCwwLjA2MDkyIC0wLjE3NTU4LDAuMTcyIC0wLjE3NTU4LDAuMjkzODN2My4yNDY1YzAsMC4xMjE4MyAwLjA2ODA4LDAuMjMyOTIgMC4xNzU1OCwwLjI5MzgzbDIuOTMxMTcsMS42MjMyNWMwLjExMTA4LDAuMDYwOTIgMC4yNDM2NywwLjA2MDkyIDAuMzU0NzUsMGwyLjkzMTE3LC0xLjYyMzI1YzAuMTA3NSwtMC4wNjA5MiAwLjE3NTU4LC0wLjE3MiAwLjE3NTU4LC0wLjI5Mzgzdi0zLjI0NjVjMCwtMC4xMjE4MyAtMC4wNjgwOCwtMC4yMzI5MiAtMC4xNzkxNywtMC4yOTM4M2wtMi45MzExNywtMS42MTk2N2MtMC4wNTM3NSwtMC4wMzIyNSAtMC4xMTQ2NywtMC4wNDY1OCAtMC4xNzU1OCwtMC4wNDY1OGMtMC4wNjA5MiwwIC0wLjEyMTgzLDAuMDE0MzMgLTAuMTc1NTgsMC4wNDY1OCIgZmlsbD0iIzM4OGUzYyI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjguMTA3NzUsNDcuODg3NjdsLTguNTYwNTgsLTQuNzc2NThjLTAuMjY4NzUsLTAuMTUwNSAtMC41OTg0MiwtMC4xNDY5MiAtMC44NjM1OCwwLjAxMDc1Yy0wLjI2NTE3LDAuMTU3NjcgLTAuNDMsMC40NDA3NSAtMC40MywwLjc0ODkybC0wLjAwMzU4LDI4Ljg1M2wtNy44OTQwOCwtNC4zNjgwOGMtMC4zMjk2NywtMC4xODI3NSAtMC42OTg3NSwtMC4yNzIzMyAtMS4wNjQyNSwtMC4yNzIzM2MtMC4zNjU1LDAgLTAuNzM0NTgsMC4wODk1OCAtMS4wNjQyNSwwLjI3MjMzaDAuMDAzNThsLTE3LjU4MzQyLDkuNzI4NzVjLTAuNjU5MzMsMC4zNjE5MiAtMS4wNjQyNSwxLjAzNTU4IC0xLjA2NDI1LDEuNzU5NDJ2MTkuNDY4MjVjMCwwLjcyNzQyIDAuNDA0OTIsMS4zOTc1IDEuMDY0MjUsMS43NjNsMTcuNTg3LDkuNzM1OTJjMC42NTU3NSwwLjM2MTkyIDEuNDY5MTcsMC4zNjE5MiAyLjEyNDkyLDBsMTcuNTgzNDIsLTkuNzM1OTJjMC42NTIxNywtMC4zNjE5MiAxLjA1NzA4LC0xLjAzNTU4IDEuMDU3MDgsLTEuNzYzdi00OS45MDUwOGMwLC0wLjYzMDY3IC0wLjM0NCwtMS4yMTExNyAtMC44OTIyNSwtMS41MTkzM3pNMTE3Ljc2OTgzLDk0LjgwNzgzbC03Ljk5MDgzLDQuNDI1NDJjLTAuMjk3NDIsMC4xNjQ4MyAtMC42NjY1LDAuMTY0ODMgLTAuOTYzOTIsMGwtNy45OTQ0MiwtNC40MjU0MmMtMC4zMDQ1OCwtMC4xNjQ4MyAtMC40ODczMywtMC40NzMgLTAuNDg3MzMsLTAuODAyNjd2LTguODUwODNjMCwtMC4zMjk2NyAwLjE4Mjc1LC0wLjYzNDI1IDAuNDgzNzUsLTAuODAyNjdsNy45OTQ0MiwtNC40MjE4M2gtMC4wMDM1OGMwLjE1MDUsLTAuMDgyNDIgMC4zMTUzMywtMC4xMjE4MyAwLjQ4Mzc1LC0wLjEyMTgzYzAuMTY4NDIsMCAwLjMzMzI1LDAuMDQzIDAuNDgzNzUsMC4xMjE4M2w3Ljk5MDgzLDQuNDIxODNjMC4zMDEsMC4xNjg0MiAwLjQ4Mzc1LDAuNDc2NTggMC40ODM3NSwwLjgwNjI1djguODUwODNjMCwwLjMyNjA4IC0wLjE4Mjc1LDAuNjM0MjUgLTAuNDgwMTcsMC43OTkwOHoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNjEuNjQ3NjcsNjguNTIwNWwtMTguNjQ3NjcsMzAuOTZjMCwwLjcyNzQyIDAuNDA0OTIsMS4zOTc1IDEuMDY0MjUsMS43NjNsMTcuNTg3LDkuNzM1OTJjMC42NTU3NSwwLjM2MTkyIDEuNDY5MTcsMC4zNjE5MiAyLjEyNDkyLDBsMTguNjQwNSwtMzAuOTY3MTdjMCwtMC43Mjc0MiAtMC40MDQ5MiwtMS4zOTc1IC0xLjA2NDI1LC0xLjc2M2wtMTcuNTc5ODMsLTkuNzI4NzVjLTAuMzI5NjcsLTAuMTgyNzUgLTAuNjk4NzUsLTAuMjcyMzMgLTEuMDY0MjUsLTAuMjcyMzNjLTAuMzY5MDgsMCAtMC43MzQ1OCwwLjA4OTU4IC0xLjA2NDI1LDAuMjcyMzMiIGZpbGw9IiMyZTdkMzIiPjwvcGF0aD48cGF0aCBkPSJNNjEuNjQ3NjcsNjguNTIwNWwtMTcuNTgzNDIsOS43Mjg3NWMtMC42NTkzMywwLjM2MTkyIC0xLjA2NDI1LDEuMDM1NTggLTEuMDY0MjUsMS43NjNsMTguNjQ3NjcsMzAuOTY3MTdjMC42NTU3NSwwLjM2MTkyIDEuNDY5MTcsMC4zNjE5MiAyLjEyNDkyLDBsMTcuNTgzNDIsLTkuNzM1OTJjMC42NTU3NSwtMC4zNjU1IDEuMDYwNjcsLTEuMDM1NTggMS4wNjA2NywtMS43NjNsLTE4LjY0NDA4LC0zMC45NmMtMC4zMjk2NywtMC4xODI3NSAtMC42OTg3NSwtMC4yNzIzMyAtMS4wNjQyNSwtMC4yNzIzM2MtMC4zNjkwOCwwIC0wLjczNDU4LDAuMDg5NTggLTEuMDY0MjUsMC4yNzIzMyIgZmlsbD0iIzRjYWY1MCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNzAuOTM1NzUsNzguMDg0NDJsLTE3LjU3OTgzLC05LjcyODc1Yy0wLjMyOTY3LC0wLjE4Mjc1IC0wLjY5ODc1LC0wLjI3MjMzIC0xLjA2NDI1LC0wLjI3MjMzYy0wLjM2NTUsMCAtMC43MzQ1OCwwLjA4OTU4IC0xLjA2NDI1LDAuMjcyMzNoMC4wMDM1OGwtMTcuNTgzNDIsOS43Mjg3NWMtMC42NTU3NSwwLjM2MTkyIC0xLjA2NDI1LDEuMDQ5OTIgLTEuMDY0MjUsMS44MDI0MnYxOS4zODk0MmMwLDAuNzQ4OTIgMC40MDg1LDEuNDQwNSAxLjA2NDI1LDEuODAyNDJsMTcuNTg3LDkuNzM1OTJjMC42NTkzMywwLjM2NTUgMS40NjU1OCwwLjM2NTUgMi4xMjQ5MiwwbDguMTA5MDgsLTQuNDg5OTJjMC43NDE3NSwtMC40MTIwOCAwLjczODE3LC0xLjQ3NjMzIC0wLjAwNzE3LC0xLjg4NDgzbC0xNy42NDQzMywtOS42Mjg0MmMtMC4yOTc0MiwtMC4xNjg0MiAtMC40ODM3NSwtMC40ODAxNyAtMC40ODM3NSwtMC44MTd2LTguODM2NWMwLC0wLjMyOTY3IDAuMTc5MTcsLTAuNjM0MjUgMC40NjU4MywtMC43OTE5Mmw4LjAwODc1LC00LjQyOWgtMC4wMDM1OGMwLjE1MDUsLTAuMDgyNDIgMC4zMTUzMywtMC4xMjE4MyAwLjQ4Mzc1LC0wLjEyMTgzYzAuMTY4NDIsMCAwLjMzMzI1LDAuMDQzIDAuNDgzNzUsMC4xMjE4M2w4LjAwODc1LDQuNDMyNThjMC4yODY2NywwLjE1NzY3IDAuNDY1ODMsMC40NjIyNSAwLjQ2NTgzLDAuNzkxOTJ2Ny4yMDk2N2MwLDAuMzA4MTcgMC4xNjQ4MywwLjU5NDgzIDAuNDMzNTgsMC43NDg5MmMwLjI2ODc1LDAuMTUwNSAwLjU5ODQyLDAuMTUwNSAwLjg2NzE3LC0wLjAwMzU4bDguNTkyODMsLTQuOTkxNThjMC41MzAzMywtMC4zMDgxNyAwLjg2LC0wLjg3NzkyIDAuODYsLTEuNDk0MjV2LTYuNzM2NjdjMCwtMC43NTYwOCAtMC40MDg1LC0xLjQ0NzY3IC0xLjA2NDI1LC0xLjgwOTU4ek0zOC4zNTI0Miw3OC4wODQ0MmwtMTcuNTc5ODMsLTkuNzI4NzVjLTAuMzI5NjcsLTAuMTgyNzUgLTAuNjk4NzUsLTAuMjcyMzMgLTEuMDY0MjUsLTAuMjcyMzNjLTAuMzY1NSwwIC0wLjczNDU4LDAuMDg5NTggLTEuMDY0MjUsMC4yNzIzM2gwLjAwMzU4bC0xNy41ODM0Miw5LjcyODc1Yy0wLjY1NTc1LDAuMzYxOTIgLTEuMDY0MjUsMS4wNDk5MiAtMS4wNjQyNSwxLjgwMjQydjI2Ljc0OTU4YzAsMC4zMDgxNyAwLjE2NDgzLDAuNTk0ODMgMC40MzM1OCwwLjc0ODkyYzAuMjY4NzUsMC4xNTA1IDAuNTk4NDIsMC4xNTA1IDAuODY3MTcsLTAuMDAzNThsOC41OTI4MywtNC45OTE1OGMwLjUzMDMzLC0wLjMwODE3IDAuODU2NDIsLTAuODc3OTIgMC44NTY0MiwtMS40OTQyNXYtMTUuNzQxNThjMCwtMC4zMjk2NyAwLjE3OTE3LC0wLjYzNDI1IDAuNDY1ODMsLTAuNzkxOTJsOC4wMDg3NSwtNC40Mjl2MGMwLjE1MDUsLTAuMDgyNDIgMC4zMTUzMywtMC4xMjE4MyAwLjQ4Mzc1LC0wLjEyMTgzYzAuMTY4NDIsMCAwLjMzMzI1LDAuMDQzIDAuNDgzNzUsMC4xMjE4M2w4LjAwODc1LDQuNDMyNThjMC4yODY2NywwLjE1NzY3IDAuNDY1ODMsMC40NjIyNSAwLjQ2NTgzLDAuNzkxOTJ2MTUuNzQxNThjMCwwLjYxNjMzIDAuMzI2MDgsMS4xODYwOCAwLjg2LDEuNDk0MjVsOC41OTI4Myw0Ljk5MTU4YzAuMjY4NzUsMC4xNTQwOCAwLjU5ODQyLDAuMTU0MDggMC44NjcxNywwLjAwMzU4YzAuMjY1MTcsLTAuMTU3NjcgMC40MywtMC40NDQzMyAwLjQzLC0wLjc1MjV2LTI2Ljc0NmMwLC0wLjc1MjUgLTAuNDA4NSwtMS40NDQwOCAtMS4wNjQyNSwtMS44MDZ6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                    />
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
        <div className="row pt-5" id="skills">
          <div className="col-12 text-center" style={{ marginBottom: "35px" }}>
            <h1>SKILLS</h1>
          </div>
          <br />

          <div className="col-sm-6 text-center">
            <div className="row">
              <div className="col-6 text-left">
                <div className="row"></div>
                <h6
                  style={{
                    lineHeight: "2em",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://img.icons8.com/color/100/000000/c-plus-plus-logo.png"
                    title="C++"
                    style={{ width: 60 }}
                  />{" "}
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
                  <br />
                  <img
                    src="https://img.icons8.com/color/100/000000/python.png"
                    title="Python"
                    style={{ width: 60 }}
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
                    src="https://img.icons8.com/color/100/000000/javascript.png"
                    title="JavaScript"
                    style={{ width: 60 }}
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
                </h6>
              </div>
              <div className="col-6 text-left">
                <div className="row"></div>
                <h6
                  style={{
                    lineHeight: "2em",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://img.icons8.com/color/100/000000/html-5.png"
                    title="HTML"
                    style={{ width: 60 }}
                  />
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="90"
                      style={{ width: "90%" }}
                    >
                      90%
                    </div>
                  </div>{" "}
                  <br />
                  <img
                    src="https://img.icons8.com/color/100/000000/css3.png"
                    title="CSS"
                    style={{ width: 60 }}
                  />{" "}
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "75%" }}
                    >
                      75%
                    </div>
                  </div>{" "}
                  <br />
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAEqElEQVRoge2Ye4hUdRTHP+feO7vr7rruI1jFUCuSyKDQ0C0NxnwVkVFGlBQVGBEVPVTUsNjSxIgoqSB7IJhYGUQUFILuWiSKr6Iiy9AlFRMfu1O7s7M7M3dOf9yZ4Xbn7t1d10fG7/PXnfM739/vfJkf554ZMBgMBoPBYDAYDAaD4eJAVTep6kpVHX6hazkvqGqrehxX1YcvdD3nHJ9hVVV3KHtZZ6uo88iQar4YDQ8JY/j/jjFcQFXHqWrdmWw6/c3pU+PvxS8906JUtU5Vx50LbYlhVb1EVdcAvwOHVbVZVSsGctjcjXMbZ2249Zuq0TXfYTmHJ740+bN4c3xA2vzZZar6FHAIOKiq61V11NnUik9QCTwJPAfUBPKOAiuA90UkF9xk0trbK2srM2vLh5XPt2yxABTlxG8nSKfSadux3973/K5nI4oV4D5gFTA2sNwF9AINxaJFJKC9G1gNXB7QJoG3gJdFpBNAVNUC5gGvhhwWZC+wSES2FQIz19+yIlZRtsSOWbFgcjqV5vivx0HBcqTDLi97Yu/SHRsDZpuA14Ab+zm7SMHwILTHgBeBD0RVdwBNIUmdQAVQYgRYLSLL5nx82+lYeaw+6qT2I+10newqfrbL7a3fL989M1/wamBJiCwD9AChs7OISIQ2C6T60O60KDWbAd4FrgCuAT4NETYB5DK5SLMAtaNqsRy7+NmyLX8zmxIi2QJMxLttr+AZD+NMtE3BpvUHcJWIPCoiJ0XkgIjcA8wIOzHZnkRz2kc9HpZjUTt6RPE5Vh77MyJ9hojMEpGfRaRDRJYCV+fr6o+C9iefdkJQ6wREbSJyKLiTiLSolhrLuTm6E0mq6qsjK6muryZ5KolYEpknIi0hsTZVbaOf/iIiLTRj3VAz7RMVLrPc3DwRORTQ/jDkwaM7kSKTSkcnCTSMbcCKnds5J07cUrgTZZIr4u/YCWApMCX4DQ+adDJD+5EOGq9s9L3kSnEqHCqGD6Pn71SfOapqi0jYz79+68xrs1PeuGmi5eqYnQu3t+aX1gDbReTkgDaKws3mcDNZ3EyWZEeSqvqqyPyqukrS3emyiJQtqrpQRPblTYzCe50M5JW1RVUXi8ge4MdCUEQ+9ycN6Y5lunuLz4mjCdQtmUn+hVhCdX3lGF8oG0iJA7vzU9Iq4ADwSKDOTIR2l6p+pKrBAaRI0PCeiHpL1mzHfkfEcgHcrEvi2F8Rcsim3e5sNveCL/QM0BpIs4AHgGVAsBsexJuqCtptgXUB7gX2q+rrqtoQWC8a/gWYLSKLI+ptAh4HThcCe5fvesyp0ZF2zP4a0M5TnaENLOfm3FRXz4ae/Z0jWh7avK5Ynff6uRmYhe8ahtCO13QmiMgXPu10YC6wP5BfBjyNN1PP9i+Iqs4HNolI8IqEoqr1wFQR+dIfn7xq2vhMtneTU+Zc2zjea2A5Vc0k099avbm7Ni/Y3N7PvhZwP97AMDIfzgDrgOWFptOH1gEWAM1AYz7cizdHrxSRRNHwQEwOhutWXn9HbWPth3bMPo3Yc7Y++NWBwejzf8UuAkbjDf1t50NrMBgMBoPBYDAYDAaDwWAwGP4j/AOmbutheeXRuQAAAABJRU5ErkJggg==" />{" "}
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="90"
                      style={{ width: "90%" }}
                    >
                      90%
                    </div>
                  </div>{" "}
                  <br />
                </h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 text-center">
            <div className="row">
              <div className="col-6 text-left">
                <div className="row"></div>
                <h6
                  style={{
                    lineHeight: "2em",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://img.icons8.com/color/100/000000/kotlin.png"
                    title="Kotlin"
                    style={{ width: 60 }}
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
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAHaUlEQVRoge2ZbXBU1RnHf8/ZTcKLYJHX0cpbsgELrcLuAr5W6kvbKWPFEcYZrA5FsgtUZqy0dsZK80FnWhxopJDsppQWisyIM6h9mU4tFipFSzYbXjRAchehSBEYpKAQIJt7nn7IBkLYDSEwdT/c36dz7/Oc53n+9+w5Z8+94OHh4eHh4eHxf0K+6AI6Eq5sHInI7a7Vurp5pbuvdXxzrQNeLWpkrRVKjV/+EIo5b06q2j38WsbPvxGOpd41zTql5/GDTacG3zQLZKEYPsHSALzV+8jB9ZvKJ7d0N37eCQ7GnQdFmVEbDTzZdi+8fN8QfO5tikZEuBnRpxJlpdu/yDqvKcFYqiIUc74LMHGp0zcYT01us4VjjfeE4o4TijvzuhM77+YwQLrX6edRfgywdX7gM1Gmt9kS0dJ3Wwr9Yaw8HIylKq40dl4K3vnEracRGoLxvXcB1B4uvmg0t88cceJEWqcINhCqcsqvJHZeCgZQsYtEdS4A5WI72lPzA+eKCuxjKkxr+/l3hbwVnIyM2gPqBuONE3P5bJk1+nPEPIZSOW6lM7ArcfNWMIC4/h+JlSWd+SQjxR9geM2XlgVdiZnXggt7nDuN6InL+RVYuxirM8csr7/ucr55LfhMsz+swl8v5/f+nFH/EfhbT1M4+3K+eS1YjB1rhF1d8hW7COGHY9bVF3bml9eCwRRYNS5AKJ76xe0r6m/I5VkTHbUD+LDXp0VP5vKBPBdsrH4sVkdMWLa7P6rPpt3CaKcdVF5U0ReC8YYBOWNe8yqvIdakN6vwTfUXhIEtKA9MXOr0zeVfO6dki0IF6kuE4s6S8PJ9Qzr65LXgZOQrnxiVw4pdANSJ0ZdaCvlJp32igSV9Dn8cwGWT+tJrgvHG77S3591pqSPBeG0B9J0G+nYyMupYKObMQqmrnRPYdrm+Y9bVF/b6tOinivpG9C9Z+Pp0cfNecDZCVc44NeajZKT4ZC6fkqVO0fVFcoeBgKo+isi22kjJc36Ar1b+u1+hr+XLZ/udbaifPqa5s2TBeMMAv5pBLXLSSUZC6W5VrCqTYnuGNWtB/2xm8fXanYzc2AQwbtlHw8TYixYhq+BXAveWb9ze9jLgvJ/aprp5pbu/VCg7UD2mqr8X4cWmluY6AAnFnJXATABF9vt9evfW2YGD2QoJVTnfR4gBBcBngnkkES1+50q0BmPOcwILgJwrqbUS0h56wHeONxHuyOUn8F8r+oNkpHRtKNYYBykTIZmIBELh6sb71cpvVTSajJT+ua2PH3gi024RdLjr6gtA5JJC43uvR21FRixAX4t9BOiy4HCs8R6FnwOI6sxENLAKEc3mG4o7P8uIPWPgvppo4P02252/2dPnbNqsApkqKisnLnX+5HJxmERZ6YYJsb1Trdpfh6uch5v6N8+rnz6m2QC+zNN6I/PcHs+2wRvV2UAfgaNAfWsf9XdVLABqRp0v6EhgdS6xGYa29tEP24uF1lOSqFmcuSxqKTLDsgWoiRbX1kZKxiP6lx7HC8spV3OhYJENqN4CjE2nC54CFrWZ7i3f6D+FPp25XC7CQ5opNRjfO1TUfR5AxfdSMlJ8oH3S1p8aWKtrVPT8ufa2Yfv7bofLHgxExM12X41tEW1dc9UVkVwbrIgmYH0wvved8YP2je04QhXACozMnbZOF78+vTXZqcE3Pwo6FDhjxVYazEPnE7s6UIyUZdrVwIGLQ7bafD6TNCobXexpoHfBuZbqcDy1oc3LwjkjsitxaGQy24H/Eh1WFen6JpNZ0Xde9FyuK/K/KnAUZdj+4+3eIog+k2msSkZGHetylg5sjRY71tUwwjJVbgItAy2zqnNFNa7W1oQGpza37r2dIz5/Z9MhJxeN8KaZI84GY05MYKGqzAfWh6pSd4JOAKwx8svuJGlP5mvC0x3vT6hKTbWi61sXqn6jofNBFot2R/Elv/y0ynLgLMLXJ8QablWxzwIo+lZNWXFjN3J0iRa9MBXU1U6PeFfDJYJ3zik5KqqvAVjMy4K0zlfxZX3VYoRzbW2fsb27XYiRwW1tv18+FyunMpcjv7Z6R2+AUHXq26GYkwjFnITFzrjgr2fBnARQZeC0derLlSf7tuKTl7HMAB4AQPlHMlr8z2yutUeKd4WHpP6u8A1FfheKOxtRzfopZHxlw93GyOOXWqQA9FuZizU1ZcWN4ytTq40wU2FQ4Zme7wVjzlasVcUMEHQ4EAIQ+FfNoZGp8I3OWrUyDxi673iqJhRztoFessIb0GrQatd1z3+pS5QF6sVwvyKvqOhCt4hp7TuplTdAqwXZTLnY4TeUPKiiU0RlTXuxou02C0vuKSfSjGgclbtqo4HvAdTNLUm6aXc0wjOobJbMlBXs26KsAJoAVPgj5WITZaXb3bQbEJiH8F42sZkHdHUE44d6qdt0S8f7fiPiYu+TzD8rlMm1cwKbrjZfG+MrnUnGUCGCH6UiEQ2s6Uq/qxY8vjIVNEZrc5ibgA9E+VViTuDVq83l4eHh4eHh4eHh4eHh4eHh4ZGN/wH7UwfgShhAPQAAAABJRU5ErkJggg==" />
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
                  <br />
                  <img
                    src="https://img.icons8.com/color/100/000000/sass.png"
                    title="SASS"
                    style={{ width: 60 }}
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
                </h6>
              </div>
              <div className="col-6 text-left">
                <div className="row"></div>
                <h6
                  style={{
                    lineHeight: "2em",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://img.icons8.com/color/100/000000/react-native.png"
                    title="ReactJS"
                    style={{ width: 60 }}
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
                    src="https://img.icons8.com/color/100/000000/mongodb.png"
                    title="MongoDB"
                    style={{ width: 60 }}
                  />{" "}
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="90"
                      style={{ width: "90%" }}
                    >
                      90%
                    </div>
                  </div>{" "}
                  <br />
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      background: "white",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
                      title="Next.js"
                      style={{ width: "100%" }}
                    />{" "}
                  </div>
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="90"
                      style={{ width: "90%" }}
                    >
                      90%
                    </div>
                  </div>{" "}
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 " id="education">
          <div className="col-12 text-center">
            <h1>WORK EXPERIENCE</h1>
          </div>
        </div>

        <div className="row ">
          <div className="col-12 mt-4 text-center">
            <div className="row">
              <div className="col-12 text-left">
                <h6 style={{ lineHeight: "1.5em" }}>
                  <br />
                  &#8226; &ensp; SDE from 1st June 2021 to present in Advergame
                  Technologies (Gamezop)
                  <br />
                  <br />
                  &#8226; &ensp; SDE Consultant from 1st January 2021 to present
                  in Clevup Technologies (Shoopy)
                  <br />
                  <br />
                  &#8226; &ensp; ASDE from 1st April 2021 to 31st May 2021 in
                  Juspay Technologies
                  <br />
                  <br />
                  &#8226; &ensp; SDE Intern from 3rd January 2021 to 31st March
                  2021 in Juspay Technologies
                  <br />
                  <br />
                  &#8226; &ensp; SDE Intern from 1st October 2020 to 31st
                  December 2020 in Clevup Technologies
                  <br />
                  <br />
                  &#8226; &ensp; Summer internship under Networking program from
                  1st June 2019 to 30th June 2019 in Den Networks Limited
                  <br />
                  <br />
                  &#8226; &ensp; Summer internship as QA Engineer from 1st
                  December 2018 to 2nd January 2019 in Guavus Network System
                  Pvt. Ltd.
                  <br />
                  <br />
                  &#8226; &ensp; Summer internship under Marketing program from
                  20th May 2018 to 30th June 2018 in Den Networks Limited
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 " id="education">
          <div className="col-12 text-center">
            <h1>CERTIFICATIONS</h1>
          </div>
        </div>
        <div className="col-12 mt-4 text-center">
          <div className="row">
            <div className="col-12 text-left">
              <h6 style={{ lineHeight: "1.5em" }}>
                <br />
                &#8226; &ensp; Full Stack MERN Bootcamp -&nbsp;
                <a
                  href="https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/2410/certificates/50332/1750097_50332.pdf?1593881867"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
                <br />
                <br />
                &#8226; &ensp; Complete back end development with NodeJS -&nbsp;
                <a
                  href="https://www.udemy.com/certificate/UC-bd514b3a-cee7-44f7-847d-8f55b43284c0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
                <br />
                <br />
                &#8226; &ensp; Kotlin for Beginners -&nbsp;
                <a
                  href="https://www.udemy.com/certificate/UC-BM494VF2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
                <br />
                <br />
                &#8226; &ensp; Learn Flutter - Beginners Course -&nbsp;
                <a
                  href="https://www.udemy.com/certificate/UC-c9fe047f-beb0-48cb-be78-2bcb66969f0f/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </h6>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <h1>SCHOOLING</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12  text-left">
            <h6 style={{ lineHeight: "1.5em" }}>
              <br />
              SRM Institute of Science and Technology, Chennai, T.N. 4th Year,
              B.Tech. Software Engineering, 2021 | Percentage: 84.98%
              <br />
              <br /> K.V. No.2 AFS, Kanpur, U.P. CBSE 12th Class, 2017 |
              Percentage: 79.6%
              <br />
              <br />
              K.V. No.2 AFS, Kanpur, U.P. CBSE 10th Class, 2015 | CGPA: 10
            </h6>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;
