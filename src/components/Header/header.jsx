import React from 'react'
import NavButton from '../Nav/NavButton'
import navContent from '../Nav/nav-content'
import Scroll from 'react-scroll'
const ScrollLink = Scroll.Link;

const Header = () => (
  <header className="padding">
    <NavButton />
    <div className="desktop-nav">
      { navContent.map((e, i) => (
        <ScrollLink key={i} to={e.section} spy={true} smooth={true} duration={250}>
          <span>{e.name}</span>
        </ScrollLink>
      ))}      
    </div>
  </header>
)

export default Header
