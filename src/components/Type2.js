import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "../App.css";

const Type2 = () => {
  return (
    <div className=" container-fluid text-center textEffect2" id="job">
      <ReactTypingEffect
        text={["Full Stack Developer"]} //text=["Hello.", "World!"]
      />
    </div>
  );
};

export default Type2;
