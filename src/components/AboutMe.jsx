import React from 'react'
import PropTypes from 'prop-types'
import '@styles/aboutMe.scss'
import scb from '@images/scb.png'
import ub from '@images/ub.png'
import bsnl from '@images/bsnl.png'
import srm from '@images/srm.png'

const AboutMe = ({ options }) => {
  const getImage = () => {
    switch (options.class) {
      case 'scb':
        return <img src={scb} alt="scb" height="100%" width="100px" />
      case 'ub':
        return <img src={ub} alt="ub" height="100%" width="150px" />
      case 'bsnl':
        return <img src={bsnl} alt="bsnl" height="100%" width="50px" />
      case 'srm':
        return <img src={srm} alt="srm" height="100%" width="75px" />
      default:
        return null
    }
  }

  return (
    <div className="aboutSectionDiv">
      <div className="sectionDetails">
        <div className="sectionHeader">{options.header}</div>
        <div className="sectionSubHeader">{options.subheader}</div>
        <div className="sectionDates">{options.dates}</div>
      </div>
      <div className="sectionImage">{getImage()}</div>
    </div>
  )
}

AboutMe.propTypes = {
  options: PropTypes.shape({
    class: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string,
    dates: PropTypes.string,
  }).isRequired,
}

export default AboutMe
