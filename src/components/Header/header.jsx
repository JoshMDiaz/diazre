import React from 'react'
import logo from '../../images/logo_white.svg'
import Slide from 'react-reveal/Slide'

const Header = () => (
  <header>
    <div className="max-width padding">
      <Slide down>
        <img src={logo} alt="logo" className="logo" />
      </Slide>
    </div>
  </header>
)

export default Header
