import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AnchorTag from "../components/anchor.component";
import HeaderTag from "../components/header.component";
import ComponentDarkMode from "../components/componentDarkMode";

// import Image from "../components/image"

import equalizer from "../images/equalizer-crop.gif";

export const lastfmTrack = graphql`
  {
    lastfmTrack {
      name
      url
      album {
        name
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Personal Website" />
    <div className="Hero index">
      {/* <div className="navBar"></div> */}
      <HeaderTag></HeaderTag>
      <div className="SubHero">
        <h3 className="h3Intro noMarginBottom">
          Hey <span className="h3IntroSpan darkmode-ignore">👋🏻</span>! My name
          is <span className="h3IntroSpan Name"> Asish Kakumanu</span>
        </h3>
        <p className="IntroPara decreaseMarginTop font200">
          I'm a 26 year old <span className="underline font300">Software</span>{" "}
          & <span className="underline font300">Front-End Developer</span> based
          in Sunnyvale, California.
        </p>
        <div className="anchorDiv">
          <AnchorTag
            options={{
              username: "KakumanuAsish",
              class: "twitter",
              href: "https://twitter.com/kakumanuasish",
            }}
          ></AnchorTag>
          <AnchorTag
            options={{
              username: "asishkakumanu",
              class: "linkedin",
              href: "https://www.linkedin.com/in/asishkakumanu/",
            }}
          ></AnchorTag>
        </div>

        <p className="lastfm">
          <span className="eq">
            <img src={equalizer} alt="Equalizer Icon"></img>
          </span>
          <a
            href={data.lastfmTrack.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Last Played `{data.lastfmTrack.name} - {data.lastfmTrack.album.name}
            `
          </a>
        </p>
      </div>
    </div>
    <div className="HeroBack darkmode-ignore" />
  </Layout>
);

export default IndexPage;
