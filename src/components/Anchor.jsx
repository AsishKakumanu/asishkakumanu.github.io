import React from 'react'
import PropTypes from 'prop-types'
import twitter from '@images/twitter.svg'
import linkedin from '@images/linkedin.svg'
import linkArrow from '@images/linkArrow.svg'
import insta from '@images/insta.svg'
import github from '@images/github.svg'
import telegram from '@images/telegram.svg'
import whatsapp from '@images/whatsapp.png'
import mail from '@images/mail.svg'

const Anchor = ({ options }) => {
  const getImage = () => {
    switch (options.class) {
      case 'twitter':
        return <img src={twitter} alt="twitter" />
      case 'linkedin':
        return <img src={linkedin} alt="linkedin" style={{ width: '23px' }} />
      case 'linkArrow':
        return (
          <img
            src={linkArrow}
            alt="link"
            style={{ paddingTop: '5px', paddingRight: '5px' }}
          />
        )
      case 'insta':
        return <img src={insta} alt="insta" style={{ paddingTop: '5px' }} />
      case 'github':
        return <img src={github} alt="github" style={{ paddingTop: '5px' }} />
      case 'telegram':
        return <img src={telegram} alt="telegram" style={{ paddingTop: '5px' }} />
      case 'whatsapp':
        return (
          <img
            src={whatsapp}
            alt="whatsapp"
            style={{ width: '25px', height: '25px', paddingTop: '5px' }}
          />
        )
      case 'mail':
        return <img src={mail} alt="mail" style={{ paddingTop: '5px' }} />
      default:
        return null
    }
  }

  return (
    <a
      className={`button darkmode-ignore ignore-fontSize ${options.class}`}
      href={options.href}
      target={options.target}
      rel="noopener noreferrer"
    >
      <div>{getImage()}</div>
      <p>
        <span>@</span>
        {options.username}
      </p>
      <div></div>
    </a>
  )
}

Anchor.propTypes = {
  options: PropTypes.shape({
    username: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
  }).isRequired,
}

export default Anchor
