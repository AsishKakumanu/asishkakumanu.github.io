import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header.component";
import AnchorTag from "../components/anchor.component";
import TextareaAutosize from "react-autosize-textarea";

const ContactPage = () => (
  <Layout>
    <SEO title="contact" />
    <Header />
    <div className="Hero contactPage">
      <div className="contactSubHero">
        {/* <div className="sectionHeader">Say hi!</div> */}
        <div className="contactContainer">
          <div className="linksDiv">
            <h3 className="linkHeader">
              <span className="underline">Links</span>
            </h3>
            <p className="contactPara fontWeight350">
              Here are all the ways you can connect to me or follow my work. I'm
              mostly active in Linkedin{" "}
              <span className="darkmode-ignore">💼</span>{" "}
              <span style={{ "font-weight": `200`, "font-size": `20px` }}>
                &
              </span>{" "}
              Instagram <span className="darkmode-ignore">📸</span>.
            </p>
            <div className="linkContainer">
              {/* <AnchorTag
                options={{
                  username: "KakumanuAsish",
                  class: "twitter",
                  href: "https://twitter.com/kakumanuasish",
                  target: "_blank",
                }}
              ></AnchorTag> */}
              <AnchorTag
                options={{
                  username: "asishkakumanu",
                  class: "insta",
                  href: "https://www.instagram.com/asishkakumanu/",
                  target: "_blank",
                }}
              ></AnchorTag>
              <AnchorTag
                options={{
                  username: "asishkakumanu",
                  class: "linkedin",
                  href: "https://www.linkedin.com/in/asishkakumanu/",
                  target: "_blank",
                }}
              ></AnchorTag>
              <AnchorTag
                options={{
                  username: "AsishKakumanu",
                  class: "github",
                  href: "https://github.com/AsishKakumanu",
                  target: "_blank",
                }}
              ></AnchorTag>
            </div>
            <p className="contactPara fontWeight350">
              Wanna have a quick chat?
            </p>
            <div className="linkContainer2">
              <AnchorTag
                options={{
                  username: "AsishKakumanu",
                  class: "telegram",
                  href: "https://t.me/AsishKakumanu",
                  target: "_blank",
                }}
              ></AnchorTag>
              <AnchorTag
                options={{
                  username: "AK",
                  class: "whatsapp",
                  href: " https://wa.me/17164956462",
                  target: "_blank",
                }}
              ></AnchorTag>
            </div>
          </div>
          <div className="contactInfo">
            <h3 className="header">
              <span className="underline">Let's Discuss!</span>{" "}
              <span className="darkmode-ignore">🤓</span>
            </h3>
            <form
              action="mailto:asishkakumanu@gmail.com"
              method="post"
              enctype="text/plain"
            >
              <div className="firstRow">
                <div className="name">
                  <label htmlFor="name" type="text" className="labelForName">
                    Name
                  </label>
                  <input
                    className="nameInput"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="email">
                  <label htmlFor="email" className="labelForEmail">
                    Email
                  </label>
                  <input
                    className="emailInput"
                    type="email"
                    name="mail"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="secondRow">
                <div className="subject">
                  <label htmlFor="subject" className="labelForSubject">
                    Subject
                  </label>
                  <input
                    className="subjectInput"
                    type="text"
                    name="subject"
                    placeholder="Enter Subject"
                  />
                </div>
                <div className="message">
                  <label htmlFor="message" className="labelForMessage">
                    Message
                  </label>
                  {/* <input className="messageInput" type="text" name="message" /> */}
                  <TextareaAutosize className="messageInput" />
                </div>
                <AnchorTag
                  type="submit"
                  options={{
                    username: "Send",
                    class: "mail",
                    href: " mailto:asishkakumanu@gmail.com",
                  }}
                ></AnchorTag>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default ContactPage;
