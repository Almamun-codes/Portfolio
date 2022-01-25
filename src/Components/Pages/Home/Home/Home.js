import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import TopBanner from "../TopBanner/TopBanner";
import ContactMe from "../../ContactMe/ContactMe";
import Blogs from "../../Blogs/Blogs";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Skills from "../../Skills/Skills";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <TopBanner></TopBanner>
      <div className="position-relative">
        <Skills></Skills>
        <Projects></Projects>
        <AboutMe></AboutMe>
        <Blogs></Blogs>
        <ContactMe></ContactMe>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
