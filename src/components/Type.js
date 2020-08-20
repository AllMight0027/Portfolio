import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "../App.css";

const Type = () => {
  return (
    <div className=" container-fluid text-center textEffect">
      <ReactTypingEffect
        text={["Pratyaksh Saxena"]} //text=["Hello.", "World!"]
      />
    </div>
  );
};

export default Type;
