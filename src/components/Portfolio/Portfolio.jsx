import React from 'react'
import Fade from 'react-reveal/Fade'
import Box from '../Box/box'
import Title from '../Title/Title'
import centuryHome from '../../images/century.jpg'
import condo from '../../images/condo.jpg'
import largeHouse from '../../images/large_house.jpg'
import BoxTitle from '../Box/BoxTitle';

const list = [
  {
    name: 'Single Family',
    image: centuryHome,
    tour: <iframe title="single-family" style={{width: '100vw', height: `100vh`}} width="640" height="480" frameBorder="0" allowFullScreen src="https://players.cupix.com/embed.html?key=eWnXEEeB"></iframe>
  },
  {
    name: 'Large Single Family',
    image: largeHouse,
    tour: <iframe title="large" style={{width: '100vw', height: `100vh`}} width="640" height="480" frameBorder="0" allowFullScreen src="https://players.cupix.com/embed.html?key=CHHNXosn"></iframe>
  },
  {
    name: 'The Condo',
    image: condo,
    tour: <iframe title="condo" style={{width: '100vw', height: `100vh`}} width="640" height="480" frameBorder="0" allowFullScreen src="https://players.cupix.com/embed.html?key=i17QURUh"></iframe>
  },
  // {
  //   name: 'Townhouse',
  //   image: centuryHome,
  //   tour: <iframe title="townhouse" style={{width: '100vw', height: `100vh`}} width="640" height="480" frameBorder="0" allowFullScreen src="https://players.cupix.com/embed.html?key=eWnXEEeB"></iframe>
  // },
]

const Portfolio = () => {
  return (
    <section className="portfolio" name="what-we-do">
      <div className="padding max-width">
        <Fade down>
          <Title beforeText="Check out our" customClass="yellow">awesome work</Title>
        </Fade>
      </div>
      <div className="list">
        { list.map((e, i) => (
          <Box {...e} key={i} />
        ))}
        <div className="filler">
          <BoxTitle animate={true} text="More Coming Soon..." />
        </div>
      </div>
    </section>
  )
}

export default Portfolio
