import React from "react";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import linkArrow from "../images/linkArrow.svg";
import insta from "../images/insta.svg";
import github from "../images/github.svg";
import telegram from "../images/telegram.svg";
import whatsapp from "../images/whatsapp.png";
import mail from "../images/mail.svg";

export default class anchor extends React.Component {
  render() {
    const Image = () => {
      switch (this.props.options.class) {
        case "twitter":
          return <img src={twitter} />;
        case "linkedin":
          return <img src={linkedin} style={{ width: `23px` }} />;
        case "linkArrow":
          return <img src={linkArrow} />;
        case "insta":
          return <img src={insta} style={{ "padding-top": `5px` }} />;
        case "github":
          return <img src={github} style={{ "padding-top": `5px` }} />;
        case "telegram":
          return <img src={telegram} style={{ "padding-top": `5px` }} />;
        case "whatsapp":
          return (
            <img
              src={whatsapp}
              style={{ width: `25px`, height: `25px`, "padding-top": `5px` }}
            />
          );
        case "mail":
          return <img src={mail} style={{ "padding-top": `5px` }} />;
      }
    };

    return (
      <a
        className={`button darkmode-ignore ignore-fontSize ${this.props.options.class}`}
        href={this.props.options.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>{Image()}</div>
        <p>
          <span>@</span>
          {/* Add the username here */}
          {this.props.options.username}
        </p>
        <div>{}</div>
      </a>
    );
  }
}
