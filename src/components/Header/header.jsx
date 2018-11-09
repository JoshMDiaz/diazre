import React from 'react'
import logo from '../../images/logo_white.svg'
import Fade from 'react-reveal/Fade'
import DemoButton from '../Demo/Demo';

const Header = () => (
  <header>
    <div className="padding header-container">
      <Fade delay={2500}>
        <img src={logo} alt="logo" className="logo" />
        <DemoButton />
      </Fade>
    </div>
  </header>
)

export default Header
