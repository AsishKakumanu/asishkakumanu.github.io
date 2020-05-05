import React from "react";

import "../styles/aboutMe.scss";
import scb from "../images/scb.png";
import ub from "../images/ub.png";
import bsnl from "../images/bsnl.png";
import srm from "../images/srm.png";

export default class anchor extends React.Component {
  render() {
    const Image = () => {
      switch (this.props.options.class) {
        case "scb":
          return <img src={scb} alt="scb" height="100%" width="100px" />;
        case "ub":
          return <img src={ub} alt="ub" height="100%" width="150px" />;
        case "bsnl":
          return <img src={bsnl} alt="bsnl" height="100%" width="50px" />;
        case "srm":
          return <img src={srm} alt="srm" height="100%" width="75px" />;

        default:
          return {};
      }
    };
    return (
      <div className="aboutSectionDiv">
        <div className="sectionDetails">
          <div className="sectionHeader">{this.props.options.header}</div>
          <div className="sectionSubHeader">{this.props.options.subheader}</div>
          <div className="sectionDates">{this.props.options.dates}</div>
        </div>
        <div className="sectionImage">{Image()}</div>
      </div>
    );
  }
}
