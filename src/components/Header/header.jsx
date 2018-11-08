import React from 'react'
import logo from '../../images/logo_white.svg'
import Fade from 'react-reveal/Fade'
import ContactButton from '../Contact/ContactButton'

const Header = () => (
  <header>
    <div className="padding header-container">
      <Fade delay={2500}>
        <img src={logo} alt="logo" className="logo" />
        <ContactButton />
      </Fade>
    </div>
  </header>
)

export default Header
