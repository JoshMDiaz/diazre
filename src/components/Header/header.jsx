import React from 'react'
import NavButton from '../Nav/NavButton'
import navContent from '../Nav/nav-content'
import Slide from 'react-reveal/Slide'
import Scroll from 'react-scroll'
const ScrollLink = Scroll.Link

const Header = () => (
  <header className="padding" id="top-page">
    <Slide down>
      <NavButton />
      <div className="desktop-nav">
        { navContent.map((e, i) => (
          <ScrollLink key={i} to={e.section} spy={true} smooth={true} duration={450}>
            <span>{e.name}</span>
          </ScrollLink>
        ))}      
      </div>
    </Slide>
  </header>
)

export default Header
