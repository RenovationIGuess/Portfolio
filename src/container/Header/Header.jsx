import React from 'react'

import { motion } from "framer-motion";

import { images } from '../../constants';

import { AppWrap } from "../../wrapper"

import "./Header.scss";

// const scaleVariants = {
//   visible: {
//     opacity: 1,
//     y: -25,
//     transition: {
//       type: 'spring',
//       bounce: 0,
//       duration: 0.7,
//       delayChildren: 0.3,
//       staggerChildren: 0.05,
//     }
//   },
//   hidden: {
//     opacity: 0,
//     y: 0,
//     transition: {
//       type: 'spring',
//       bounce: 0,
//       duration: 0.3,
//     }
//   },
// }

// const itemVariants = {
//   open: {
//     scale: 1,
//     opacity: 1,
//     transition: { duration: 0.3, }
//   },
//   closed: {
//     scale: 0.3,
//     opacity: 0,
//     transition: { duration: 0.3, }
//   }
// }

const Header = () => {
  return (
    <div id="home" className='app__header app__flex'>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ 
          duration: 0.5,
          ease: 'easeInOut',
          delayChildren: 0.3,
          staggerChildren: 0.05
        }}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <motion.div
            whileInView={{
              opacity: [0, 1],
              x: [-100, 0],
              transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 24,
              }
            }}
            className='badge-cmp app__flex'
          >
            <motion.span
              whileInView={{
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: 0.7,
                  ease: 'easeInOut',
                  time: [0, 0.2, 0.5, 0.7],
                  repeat: Infinity,
                  repeatDelay: 1.5,
                }
              }}
            >
              👋
            </motion.span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Ramu</h1>
            </div>
          </motion.div>

          <motion.div 
            whileInView={{
              opacity: [0, 1],
              x: [-100, 0],
              transition: { 
                type: "spring", 
                stiffness: 300,
                damping: 24 
              }
            }}
            className='tag-cmp app__flex'
          >
            <p className='p-text'>Web Developer</p>
            <p className='p-text'>Data analyst</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ 
          duration: 0.5, 
          delayChildren: 0.5,
        }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile-bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
        // variants={ scaleVariants }
        whileInView={{
          opacity: 1,
          y: [0, -25],
          transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.5,
          }
        }}
        className="app__header-circles"
      >
        {[images.html, images.css, images.javascript].map((circle, index) => (
          <motion.div 
            className='circle-cmp app__flex' 
            key={`circle-${index}`}
            // variants={ itemVariants }
            whileInView={{
              scale: [0, 1],
              opacity: [0, 1],
              transition: { 
                duration: 0.3,
                ease: 'easeInOut',
              }
            }}
          >
            <img src={circle} alt="circle" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');