import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header.component";

// Image Assets
import _404Gif from "../images/404-1.png";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header></Header>
    <div className="subHero page404">
      <img src={_404Gif} alt="404 Error Image"></img>
    </div>
  </Layout>
);

export default NotFoundPage;
