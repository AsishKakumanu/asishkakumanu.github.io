import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header.component";
import AboutSection from "../components/aboutMe.component";

import { Display, Image, Button, Tooltip, Collapse } from "@zeit-ui/react";

// Asset Imports
import resume from "../images/resume.png";
import myPic from "../images/myPortrait2.jpeg";
import {
  FaHtml5,
  FaCss3,
  FaPython,
  FaReact,
  FaAngular,
  FaSass,
  FaLess,
  FaGithub,
  FaJava,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiJqueryLogo, DiAndroid } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { GrHadoop } from "react-icons/gr";
import {
  Spring,
  Tableau,
  R,
  Flask,
  Json,
  Apachesolr,
  Keras,
  Figma,
  Uikit,
  Gatsby,
  Sketch,
  Materialdesign,
} from "@icons-pack/react-simple-icons";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Header></Header>
    <div className="Hero about">
      <div className="AboutSubHero">
        <div className="container">
          <div className="resumeContainer">
            <Tooltip
              style={{ cursor: "pointer" }}
              placement="bottom"
              className="tooltip"
              text={
                <>
                  <Display shadow>
                    <Image width="200" height="250" src={resume} />
                  </Display>{" "}
                </>
              }
            >
              <a
                href="https://buffalo.box.com/s/o526dbqtolu813hay9yct76m805kapdd"
                target="_blank"
                rel="noopener noreferrer"
                className="Download"
              >
                <Button
                  shadow
                  type="success"
                  size="small"
                  className="resume darkmode-ignore"
                  auto
                >
                  Download Resume
                </Button>
              </a>
            </Tooltip>
          </div>
          <div className="aboutSection">
            <div className="leftContainer darkmode-ignore">
              <Collapse.Group className="collapseGroup">
                <Collapse shadow title="Experience 💼" initialVisible>
                  <AboutSection
                    options={{
                      header: "Research Intern",
                      subheader: "University at Buffalo",
                      class: "ub",
                      dates: "Present",
                    }}
                  ></AboutSection>
                  <AboutSection
                    options={{
                      header: "Software Developer",
                      subheader: "Standard Chartered GBS",
                      class: "scb",
                      dates: "May 2016 - June 2018",
                    }}
                  ></AboutSection>
                  <AboutSection
                    options={{
                      header: "Intern",
                      subheader: "Bharat Sanchar Nigam Limited India",
                      class: "bsnl",
                      dates: "May 2014 - June 2014",
                    }}
                  ></AboutSection>
                </Collapse>
                <Collapse shadow title="Education 🎓">
                  <AboutSection
                    options={{
                      header: "M.S in Computer Science",
                      subheader: "University at Buffalo",
                      class: "ub",
                      dates: "Aug 2018 - Dec 2019",
                    }}
                  ></AboutSection>
                  <AboutSection
                    options={{
                      header: "B.Tech in Computer Science",
                      subheader: "SRM University",
                      class: "srm",
                      dates: "Aug 2012 - May 2016",
                    }}
                  ></AboutSection>
                </Collapse>
                <Collapse shadow title="Skills 🔧">
                  <div className="icons">
                    <FaHtml5 title="HTML" />
                    <FaCss3 title="CSS" />
                    <FaSass title="SASS" />
                    <FaLess title="Less" />
                    <IoLogoJavascript title="JavaScript" />
                    <FaPython title="Python" />
                    <Flask title="Flask" />
                    <FaReact title="React" />
                    <FaAngular title="Angular" />
                    <DiJqueryLogo title="JQuery" />
                    <AiOutlineConsoleSql title="SQL" />
                    <FaJava title="Java" />
                    <Spring title="Spring" />
                    <DiAndroid title="Android" />
                    <R title="R" />
                    <Json title="JSON" />
                    <FaGithub title="Git" />
                    <Tableau title="Tableau" />
                    <Apachesolr title="Apache Solr" />
                    <Keras title="Keras" />
                    <Figma title="Figma" />
                    <Sketch title="Sketch" />
                    <Uikit title="UI Kit" />
                    <Materialdesign title="Material Design" />
                    <FaBootstrap title="Bootstrap" />
                    <Gatsby title="Gatsby" />
                    <GrHadoop title="Hadoop" />
                  </div>
                </Collapse>
              </Collapse.Group>
            </div>
            <div className="rightContainer">
              <Image
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                src={myPic}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
