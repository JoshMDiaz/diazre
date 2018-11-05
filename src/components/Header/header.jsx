import React from 'react'
import logo from '../../images/logo_white.svg'
import Fade from 'react-reveal/Fade'

const Header = () => (
  <header>
    <div className="max-width padding">
      <Fade delay={2500}>
        <img src={logo} alt="logo" className="logo" />
      </Fade>
    </div>
  </header>
)

export default Header
