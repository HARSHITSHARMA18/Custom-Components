import React, { useState, useEffect } from "react";

import Logo from "../images/Logo.png";
import search from "../images/search.png";

import useScreenSize from "../hooks/useScreenSize";

const Navbar = () => {
  //Custom Hook
  const elements = useScreenSize();

  return (
    <div className="navbar">
      <div className="logo-div">
        <img src={Logo} alt="logo-icon" className="logo-icon" />
      </div>

      <div className="nav-main">
        {elements.map((element, index) => (
          <div className="">
            {Array.isArray(element) ? (
              <select className="options">
                {element.map((item) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
            ) : (
              <span key={index} className="nav-items">
                {element}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="seacrh-box">
        <img src={search} alt="search-icon" className="search-icon" />
        <input type="text" placeholder="Search Something" />
      </div>
    </div>
  );
};

export default Navbar;
