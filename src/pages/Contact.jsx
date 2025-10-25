import React from 'react'
import SEO from '@components/SEO'
import Header from '@components/Header'
import Anchor from '@components/Anchor'
import DarkModeToggle from '@components/DarkModeToggle'

function Contact() {
  return (
    <>
      <SEO title="Contact" />
      <Header />
      <div className="Hero contactPage">
        <div className="contactSubHero">
          <div className="contactContainer">
            <div className="linksDiv">
              <h3 className="linkHeader">
                <span className="underline">Links</span>
              </h3>
              <p className="contactPara fontWeight350">
                Here are all the ways you can connect to me or follow my work. I'm mostly active
                in Linkedin{' '}
                <span className="darkmode-ignore" role="img" aria-label=":suitcase:">
                  💼
                </span>{' '}
                <span style={{ fontWeight: '200', fontSize: '20px' }}>&</span> Instagram{' '}
                <span className="darkmode-ignore" role="img" aria-label=":camera:">
                  📸
                </span>
                .
              </p>
              <div className="linkContainer">
                <Anchor
                  options={{
                    username: 'asishkakumanu',
                    class: 'insta',
                    href: 'https://www.instagram.com/asishkakumanu/',
                    target: '_blank',
                  }}
                />
                <Anchor
                  options={{
                    username: 'asishkakumanu',
                    class: 'linkedin',
                    href: 'https://www.linkedin.com/in/asishkakumanu/',
                    target: '_blank',
                  }}
                />
                <Anchor
                  options={{
                    username: 'AsishKakumanu',
                    class: 'github',
                    href: 'https://github.com/AsishKakumanu',
                    target: '_blank',
                  }}
                />
              </div>
              <p className="contactPara fontWeight350">Wanna have a quick chat?</p>
              <div className="linkContainer2">
                <Anchor
                  options={{
                    username: 'AsishKakumanu',
                    class: 'telegram',
                    href: 'https://t.me/AsishKakumanu',
                    target: '_blank',
                  }}
                />
              </div>
            </div>
            <div className="contactInfo darkmode-ignore">
              <h3 className="header">
                <span className="underline">Let's Discuss!</span>{' '}
                <span className="darkmode-ignore" role="img" aria-label=":nerd:">
                  🤓
                </span>
              </h3>
              <form
                action="https://getform.io/f/f4b3a745-10da-416a-90cc-f2c7cc5c7560"
                method="POST"
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
                      required
                    />
                  </div>
                  <div className="email">
                    <label htmlFor="email" className="labelForEmail">
                      Email
                    </label>
                    <input
                      className="emailInput"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
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
                    <textarea rows="4" name="message" className="messageInput" />
                  </div>
                  <button className="mailButton" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <DarkModeToggle />
    </>
  )
}

export default Contact
