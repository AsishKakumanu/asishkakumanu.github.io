import React from 'react'
import { ReactTyped } from 'react-typed'
import SEO from '@components/SEO'
import Anchor from '@components/Anchor'
import Header from '@components/Header'
import DarkModeToggle from '@components/DarkModeToggle'
import Lastfm from '@components/Lastfm'

function Home() {
  return (
    <>
      <SEO title="Personal Website" />
      <div className="Hero index">
        <Header />
        <div className="SubHero">
          <h3 className="h3Intro noMarginBottom">
            Hey{' '}
            <span className="h3IntroSpan emoji" role="img" aria-label=":wave:">
              👋🏻
            </span>
            ! My name is <span className="h3IntroSpan Name">Asish Kakumanu</span>
          </h3>
          <p className="IntroPara noMarginBottom font200">
            I'm a 26 year old{' '}
            <span className="underline font300">
              <ReactTyped
                strings={['Front-end', 'Full-Stack', 'Software']}
                typeSpeed={80}
                backSpeed={50}
                loop
                cursorChar=" "
              />
            </span>
            <span className="underline font300">Developer</span> based in Sunnyvale, California.
          </p>
          <p className="IntroPara font200">
            By day, I'm a Research Intern at SUNY Buffalo, by night I work on personal projects.
          </p>
          <div className="anchorDiv">
            <Anchor
              options={{
                username: 'Contact Me',
                class: 'linkArrow',
                href: '/contact',
                target: '_self',
              }}
            />
          </div>
          <Lastfm />
        </div>
      </div>
      <div className="HeroBack" />
      <DarkModeToggle />
    </>
  )
}

export default Home
