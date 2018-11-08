import React from 'react'
import Scroll from 'react-scroll'
import ContactForm from './ContactForm';
import Slide from 'react-reveal/Slide'

const ScrollElement = Scroll.Element;

const Contact = () => {
  return (
    <ScrollElement name="contactSection">
      <div className="contact max-width padding">
        <Slide left>
          <h2>Contact Us</h2>
        </Slide>
        <Slide up>
          <ContactForm />
        </Slide>
      </div>
    </ScrollElement>
  );
}
 
export default Contact;