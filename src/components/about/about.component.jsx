import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./about.style.scss";

const about = [
  {
    title: "Backend",
    description: "Im good at Using  Node Express and other backend framework",
    imgUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
  {
    title: "Backend",
    description: "Im good at Using  Node Express and other backend framework",
    imgUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
  {
    title: "Backend",
    description: "Im good at Using  Node Express and other backend framework",
    imgUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
  {
    title: "Backend",
    description: "Im good at Using  Node Express and other backend framework",
    imgUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
];

const About = () => {
  return (
    <div className="about">
      <div className="profiles">
        {about.map((about, index) => (
          <motion.div
            className="profile-item"
            key={about.title + index}
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, type: "tween" }}>
            <img src={about.imgUrl} alt={about.title} />
            <h2>{about.title}</h2>
            <p>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
