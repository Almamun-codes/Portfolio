import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <Projects></Projects>
      <AboutMe></AboutMe>
    </div>
  );
};

export default Home;
