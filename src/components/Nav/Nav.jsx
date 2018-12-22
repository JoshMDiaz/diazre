import React from 'react'
import navContent from './nav-content'
import Fade from 'react-reveal/Fade'

const Nav = ({ close, closing }) => {
  return (
    <div className={`nav animated ${closing ? 'fadeOut' : 'fadeIn'}`}>
      <ul>
        { navContent.map((e, i) => (
          <Fade up duration={250} delay={`${i}00`} key={i}>
            <li onClick={() => close(false, e.section)}>{e.name}</li>
          </Fade>
        ))}
      </ul>
    </div>
  );
}
 
export default Nav;