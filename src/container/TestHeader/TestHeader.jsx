import React, { useEffect, useState } from "react";

import { images } from "../../constants";
import MouseScroll from "../../components/MouseScroll/MouseScroll";
import { motion } from "framer-motion";

import "./TestHeader.scss";

const TestHeader = () => {
  const [animateCardFirst, setAnimateCardFirst] = useState({
    opacity: [0, 1],
    x: [-42, 0],
    transition: {
      duration: 0.5,
      delay: 0.5,
      ease: "easeInOut",
    },
  });
  const [animateCardSecond, setAnimateCardSecond] = useState({
    opacity: [0, 1],
    x: [-42, 0],
    transition: {
      duration: 0.5,
      delay: 1.5,
      ease: "easeInOut",
    },
  });

  useEffect(() => {
    const layers = document.querySelectorAll("div.layer");
    const stars = document.querySelectorAll("img.bg");
    layers.forEach((layer) => {
      layer.classList.add("show");
    });
    stars.forEach((star) => {
      star.classList.add("loaded");
    });

    // const sloganLine = document.querySelector(".slogan__line");
    setTimeout(() => {
      // sloganLine.remove();
      setAnimateCardFirst({
        x: -42,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      });
      setAnimateCardSecond({
        x: -42,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      });
    }, 3000);
  }, []);

  return (
    <>
      <div className="bg__header">
        <div className="bg__absolute-fill">
          <div className="bg__wrapper">
            <div className="viewport">
              <div className="container">
                <div className="scene">
                  <div className="layer">
                    <img src={images.starBg1} alt="star-bg-1" className="bg" />
                  </div>
                  <div className="layer">
                    <img
                      className="bg bg__star layer-inner"
                      src={images.starBg2}
                      alt="star-bg-2"
                    />
                  </div>
                  <div className="layer">
                    <img
                      className="bg bg__star layer-inner"
                      src={images.starBg3}
                      alt="star-bg-3"
                    />
                  </div>
                  <div className="layer">
                    <img
                      className="star layer-inner"
                      src={images.starDot4}
                      alt="star-dot-4"
                    />
                  </div>
                  <div className="layer">
                    <img
                      className="star layer-inner"
                      src={images.starDot5}
                      alt="star-dot-5"
                    />
                  </div>
                  <div className="layer">
                    <img
                      className="star layer-inner"
                      src={images.starDot6}
                      alt="star-dot-6"
                    />
                  </div>
                  <div className="layer">
                    <img
                      className="star layer-inner"
                      src={images.starDot7}
                      alt="star-dot-7"
                    />
                  </div>
                  <div className="layer">
                    <img
                      className="star layer-inner"
                      src={images.starDot8}
                      alt="star-dot-8"
                    />
                  </div>
                  <div className="layer">
                    <img
                      className="star layer-inner"
                      src={images.starDot9}
                      alt="star-dot-9"
                    />
                  </div>
                  <div className="layer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="slogan__line" />
          <div className="slogan__text">
            <motion.div animate={animateCardFirst}>
              To <span className="slogan">Infinity</span>
            </motion.div>
            <motion.div animate={animateCardSecond}>
              And <span className="slogan">Beyond</span>
            </motion.div>
          </div>
        </div>

        {/* <motion.div
          className="spin-logo"
          animate={{
            // opacity: [0, 1],
            rotate: [360, 0],
          }}
          transition={{
            duration: 50,
            // ease: 'easeInOut',
            repeat: Infinity,
          }}
        >
          <img 
            src={images.logoX}
            alt="logo-x"
          />
        </motion.div> */}
        <MouseScroll />
      </div>
    </>
  );
};

export default TestHeader;
