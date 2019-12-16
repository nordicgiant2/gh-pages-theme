import React from "react";
import { render } from "react-dom";

import icon1 from "../assets/i1.png";
import icon2 from "../assets/i2.png";
import icon3 from "../assets/i3.png";

import "./Icon.css";


const Icons = () => (
  <div className="icons">
    <div className="icon-con"  >
    	<img className="icon" src={icon1}></img>
    	<div className="icon-title">easy to use</div>
    </div>
     <div className="icon-con"  >
    	<img className="icon" src={icon2}></img>
    	<div className="icon-title">flexible powerful</div>
    </div>
     <div className="icon-con"  >
    	<img className="icon" src={icon3}></img>
    	<div className="icon-title">save resources</div>
    </div>
  </div>
);

export default Icons;
