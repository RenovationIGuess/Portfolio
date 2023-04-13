import React, { useState, useRef } from "react";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [currentHoverX, setCurrentHoverX] = useState(0);
  const [currentHoverWidth, setCurrentHoverWidth] = useState(0);
  const [currentActive, setCurrentActive] = useState(null);

  const timeRef = useRef();
  

  const handleHovered = (e) => {
    if (timeRef.current) clearTimeout(timeRef.current);
    const firstElement = document.querySelector(".label-inner");
    const firstElementRect = firstElement.getBoundingClientRect();
    const currentHoveredElement = e.target;
    const currentElementRect = currentHoveredElement.getBoundingClientRect();
    const roundedValueWidth = Math.round(currentElementRect.width * 100) / 100;
    setCurrentHoverWidth(roundedValueWidth);
    const roundedValueX =
      Math.round((currentElementRect.left - firstElementRect.left) * 100) / 100;
    setCurrentHoverX(roundedValueX);
  };

  const handleClicked = (e) => {
    const clickedElement = e.currentTarget;
    console.log(clickedElement);
    if (currentActive && currentActive.classList.contains("active")) {
      currentActive.classList.remove("active");
    }
    setCurrentActive(clickedElement);
    clickedElement.classList.add("active");
  };

  const handleUnhovered = () => {
    timeRef.current = setTimeout(() => {
      if (currentActive) {
        const firstElement = document.querySelector(".label-inner");
        const firstElementRect = firstElement.getBoundingClientRect();
        const currentElementRect = currentActive.getBoundingClientRect();
        const roundedValueWidth =
          Math.round(currentElementRect.width * 100) / 100;
        setCurrentHoverWidth(roundedValueWidth);
        const roundedValueX =
          Math.round((currentElementRect.left - firstElementRect.left) * 100) /
          100;
        setCurrentHoverX(roundedValueX);
      } else {
        setCurrentHoverX(0);
        setCurrentHoverWidth(0);
      }
    }, 1000);
  };

  return (
    // Clean CSS with BEM methodlogy - find out!
    <nav className="app__navbar">
      <div className="app__navbar-container">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="logo" />
        </div>
        {/* <ul className="app__navbar-links">
          {["home", "about", "work", "skills", "testimonial", "contact"].map((item) => (
            <li key={`link-${item}`} className="app__flex p-text">
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul> */}
        <div
          className="app__navbar-anchors"
          style={{
            "--ind-x": currentHoverX,
            "--ind-width": currentHoverWidth,
          }}
        >
          {["home", "about", "work", "skills", "testimonial", "contact"].map(
            (item) => (
              <a
                key={`link-${item}`}
                className="app__navbar-anchor"
                href={`#${item}`}
                onClick={(e) => handleClicked(e)}
                onMouseOver={(e) => handleHovered(e)}
                onMouseOut={() => handleUnhovered()}
              >
                <div className="anchor__label">
                  <div className="label-inner">{item}</div>
                </div>
              </a>
            )
          )}
          <div className="indicator"></div>
        </div>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                "home",
                "about",
                "work",
                "skills",
                "testimonial",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
