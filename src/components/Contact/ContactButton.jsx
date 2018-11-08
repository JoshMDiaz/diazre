import React from 'react'
import Scroll from 'react-scroll'
const scroller = Scroll.scroller;
 
const goToContact = () => {
  scroller.scrollTo('contactSection', {
    duration: 1000,
    delay: 50,
    smooth: true
  })
}

const ContactButton = () => {
  return (
    <button onClick={goToContact} className="contact">Contact Us</button>
  );
}
 
export default ContactButton;