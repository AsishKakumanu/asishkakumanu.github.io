import React from "react";
// import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import AnchorTag from "../components/anchor.component";
import HeaderTag from "../components/header.component";
import Typed from "react-typed";
import ComponentDarkMode from "../components/componentDarkMode";

// import Image from "../components/image"

import equalizer from "../images/equalizer-crop.gif";

// export const lastfmTrack = graphql`
//   {
//     lastfmTrack {
//       name
//       url
//       album {
//         name
//       }
//     }
//   }
// `;

export class IndexPage extends React.Component {
  changeDarkModeIcon() {
    var el = document.querySelector(".darkmode-toggle");
    var darkel = document.querySelector(".darkmode-toggle--white");

    if (darkel) {
      document.querySelector(".darkmode-toggle").innerText = "🌙";
    } else {
      document.querySelector(".darkmode-toggle").innerText = "☀️";
    }

    el.addEventListener("click", (event) => {
      var darkel = document.querySelector(".darkmode-toggle--white");
      // clicked = !clicked;
      if (darkel) {
        document.querySelector(".darkmode-toggle").innerText = "🌙";
      } else {
        document.querySelector(".darkmode-toggle").innerText = "☀️";
      }
    });
  }

  componentDidMount() {
    this.changeDarkModeIcon();
    console.log(ComponentDarkMode);
  }

  render() {
    return (
      <Layout>
        <SEO title="Personal Website" />
        <div className="Hero index">
          {/* <div className="navBar"></div> */}
          <HeaderTag></HeaderTag>
          <div className="SubHero">
            <h3 className="h3Intro noMarginBottom">
              Hey{" "}
              <span
                className="h3IntroSpan darkmode-ignore"
                role="img"
                aria-label=" :wave: "
              >
                👋🏻
              </span>
              ! My name is{" "}
              <span className="h3IntroSpan Name"> Asish Kakumanu</span>
            </h3>
            <p className="IntroPara  noMarginBottom font200">
              I'm a 26 year old{" "}
              <span className="underline font300">
                <Typed
                  strings={["Software", "Front-end", "Software, Front-end"]}
                  typeSpeed={80}
                  cursorChar=" "
                />
              </span>
              {""}
              <span className="underline font300">Developer</span> based in
              Sunnyvale, California.
            </p>
            <p className="IntroPara font200">
              By day, I'm a Research Intern at SUNY Buffalo, by night I work on
              personal projects.{" "}
            </p>
            <div className="anchorDiv">
              <AnchorTag
                options={{
                  username: "Contact Me",
                  class: "linkArrow",
                  href: "/contact",
                  target: "_self",
                }}
              ></AnchorTag>
            </div>
            <StaticQuery
              query={graphql`
                {
                  lastfmTrack {
                    name
                    url
                    album {
                      name
                    }
                  }
                }
              `}
              render={(data) => (
                <p className="lastfm">
                  <span className="eq">
                    <img src={equalizer} alt="Equalizer Icon"></img>
                  </span>
                  <a
                    href={data.lastfmTrack.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Last Played `{data.lastfmTrack.name}`
                    {/* - {data.lastfmTrack.album.name} */}
                  </a>
                </p>
              )}
            />
          </div>
        </div>
        <div className="HeroBack darkmode-ignore" />
      </Layout>
    );
  }
}

// const IndexPage = () => (

// );

export default IndexPage;
