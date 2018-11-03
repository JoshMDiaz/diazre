import React from 'react'

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
      <span>VR Photography &bull; © {d.getFullYear()} &bull; Diaz Real Estate, LLC</span>
    </div>
  </footer>
)

export default Footer
