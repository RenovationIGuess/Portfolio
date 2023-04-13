import React from "react";

import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";

import { abouts } from "./data";

import "./About.scss";

const About = () => {

  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Design</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <motion.div
        whileInView={{
          opacity: [0, 1],
          transition: { 
            duration: 0.5,
            delayChildren: 0.3,
            staggerChildren: 0.05,
          },
        }}
        className="app__profiles"
      >
        {abouts.map((about, index) => (
          <motion.div
            animate={{ 
              // opacity: 1,
              y: [100, 0],
            }}
            whileHover={{ 
              scale: 1.1,
            }}
            // whileTap={{ scale: 0.97 }}
            transition={{
              duration: 0.3,
            }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
