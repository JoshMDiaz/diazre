import React from 'react'
import logo from '../../images/logo_white.svg'
import Fade from 'react-reveal/Fade'
import InterestedButton from '../Interested/Interested';

const Header = () => (
  <header>
    <div className="padding header-container">
      <Fade delay={2500}>
        <img src={logo} alt="logo" className="logo" />
        <InterestedButton text="I Need This" />
      </Fade>
    </div>
  </header>
)

export default Header
