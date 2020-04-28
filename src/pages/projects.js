import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header.component";
import ProjectCard from "../components/projectCard.component";

import projectData from "../projects.json";

const SecondPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Header></Header>
    <div className="Hero page2">
      <div className="SubHero">
        <h3 className="Headline">Projects</h3>
        <div className="projectsDiv">
          {projectData.cells.map((cell) => (
            <ProjectCard
              title={cell.title}
              description={cell.description}
              url={cell.url}
            />
          ))}
        </div>

        <br />
      </div>
    </div>
  </Layout>
);

export default SecondPage;
