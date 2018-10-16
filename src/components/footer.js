import React from 'react'
import logo from '../images/logo.svg'

const Footer = () => (
  <footer>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1260,
        padding: '30px',
      }}
    >
      <img src={logo} alt="logo" />
      <span>VR Photography powered by Diaz Real Estate, LLC</span>
    </div>
  </footer>
)

export default Footer
