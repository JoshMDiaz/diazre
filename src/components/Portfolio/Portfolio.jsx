import React from 'react'
import Slide from 'react-reveal/Slide'
import Box from '../Box/box'
import centuryHome from '../../images/century.jpg'
import condo from '../../images/condo1.jpg'
import largeHouse from '../../images/large_house.jpg'

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
    name: 'Condo',
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
    <div className="portfolio">
      <div className="padding max-width">
        <Slide left>
          <h2>Portfolio</h2>
        </Slide>
        <p>Check out some of my work! Click on the houses below to see a few different demos.</p>
      </div>
      <div className="list">
        { list.map((e, i) => (
          <Box {...e} key={i} num={i} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
