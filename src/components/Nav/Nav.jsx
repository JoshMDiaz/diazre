import React from 'react'
import navContent from './nav-content'
import Fade from 'react-reveal/Fade'
import logo from '../../images/logo_camera.svg'

const Nav = ({ close, closing }) => {
  return (
    <div className={`nav animated ${closing ? 'fadeOut' : 'fadeIn'}`}>
      <img src={logo} alt="Diaz Real Estate, LLC"/>
      <ul>
        { navContent.map((e, i) => (
          <Fade down duration={750} delay={`${i + 1}00`} key={i}>
            <li onClick={() => close(false, e.section)}>{e.name}</li>
          </Fade>
        ))}
      </ul>
    </div>
  );
}
 
export default Nav;