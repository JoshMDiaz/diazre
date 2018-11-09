import React from 'react'
import DemoButton from '../Demo/Demo';

const d = new Date();

const Footer = () => (
  <footer>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 900,
        padding: '30px',
      }}
    >
      <DemoButton />
      <span>VR Photography &bull; © {d.getFullYear()} &bull; Diaz Real Estate, LLC</span>
    </div>
  </footer>
)

export default Footer
