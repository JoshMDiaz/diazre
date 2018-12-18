import React from 'react'
import logo from '../../images/logo_white.svg'
import Fade from 'react-reveal/Fade'
import InterestedButton from '../Interested/Interested';

const Header = () => (
  <header>
    <div className="padding header-container">
      <Fade delay={500}>
        <img src={logo} alt="logo" className="logo" />
        <InterestedButton text="Get a Quote" />
      </Fade>
    </div>
  </header>
)

export default Header
