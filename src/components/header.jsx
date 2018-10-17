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
      <div style={{ textAlign: 'center' }}>
        <img src={logo} alt="logo" className="logo animated fadeInDown" />
        <h1>Diaz Real Estate, LLC</h1>
      </div>
    </div>
  </header>
)

export default Header
