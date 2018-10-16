import React from 'react'
import logo from '../images/logo.svg'

const Header = () => (
  <header>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1260,
        padding: '30px',
      }}
    >
      <div className="animated fadeInLeft">
        <img src={logo} alt="logo" />
        <span>VR Photography</span>
      </div>
    </div>
  </header>
)

export default Header
