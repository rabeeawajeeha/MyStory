import React from "react";
import bgImage from "../Jumbotron/userprofileimage.jpg"
// import { url } from "inspector";


const Jumbotron = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", marginTop: "10px", textAlign: "center", backgroundImage:`url(${bgImage})`,backgroundPosition:"0% 70%", color:"white"}}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
