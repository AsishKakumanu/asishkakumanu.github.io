import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header.component";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Header></Header>
    <div className="Hero page2">
      <div className="SubHero">
        Projects page
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  </Layout>
);

export default SecondPage;
