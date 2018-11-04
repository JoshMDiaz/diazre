import React from 'react'
import Box from '../Box/box'
import centuryHome from '../../images/century.jpg'

const list = [
  {
    name: <span>Single<br />Family</span>,
    modalTitle: 'Single Family',
    link:
      'https://players.cupix.com/preview/2OfQikoY?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3Rva2VuIjoiMTdlY2Y3MmVjZDFmN2Y5NTM1MWMzOWFlZGUzNjI5MWEiLCJpc3MiOiJ3ZWJhcGkuY3VwaXguY29tIiwiaWF0IjoxNTQwMjU4MjAxLCJleHAiOjE1NDAyNzI2NjEsInRva2VuX3R5cGUiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZSI6bnVsbH0.Jt8WxZ7lCz2-P90iqEPnHlNZmH1oRzZI5p9Aa50nM8g&utm_medium=referral&utm_source=editor.cupix.com&utm_campaign=Preview+tour&editor=true',
    image: centuryHome,
    tour: <iframe title="single-family" style={{maxWidth: '100%'}} width="640" height="480" frameBorder="0" allowFullScreen src="https://players.cupix.com/embed.html?key=eWnXEEeB"></iframe>
  },
  {
    name: <span>Condo</span>,
    modalTitle: 'Condo',
    link:
      'https://players.cupix.com/preview/2OfQikoY?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3Rva2VuIjoiMTdlY2Y3MmVjZDFmN2Y5NTM1MWMzOWFlZGUzNjI5MWEiLCJpc3MiOiJ3ZWJhcGkuY3VwaXguY29tIiwiaWF0IjoxNTQwMjU4MjAxLCJleHAiOjE1NDAyNzI2NjEsInRva2VuX3R5cGUiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZSI6bnVsbH0.Jt8WxZ7lCz2-P90iqEPnHlNZmH1oRzZI5p9Aa50nM8g&utm_medium=referral&utm_source=editor.cupix.com&utm_campaign=Preview+tour&editor=true',
    image: centuryHome,
    tour: <iframe title="condo" style={{maxWidth: '100%'}} width="640" height="480" frameBorder="0" allowFullScreen src="https://players.cupix.com/embed.html?key=eWnXEEeB"></iframe>
  },
  {
    name: <span>Townhouse</span>,
    modalTitle: 'Townhouse',
    link:
      'https://players.cupix.com/preview/2OfQikoY?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3Rva2VuIjoiMTdlY2Y3MmVjZDFmN2Y5NTM1MWMzOWFlZGUzNjI5MWEiLCJpc3MiOiJ3ZWJhcGkuY3VwaXguY29tIiwiaWF0IjoxNTQwMjU4MjAxLCJleHAiOjE1NDAyNzI2NjEsInRva2VuX3R5cGUiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZSI6bnVsbH0.Jt8WxZ7lCz2-P90iqEPnHlNZmH1oRzZI5p9Aa50nM8g&utm_medium=referral&utm_source=editor.cupix.com&utm_campaign=Preview+tour&editor=true',
    image: centuryHome,
    tour: <iframe title="townhouse" style={{maxWidth: '100%'}} width="640" height="480" frameBorder="0" allowFullScreen src="https://players.cupix.com/embed.html?key=eWnXEEeB"></iframe>
  },
  {
    name: <span>Large<br />Single<br />Family</span>,
    modalTitle: 'Large Single Family',
    link:
      'https://players.cupix.com/preview/2OfQikoY?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3Rva2VuIjoiMTdlY2Y3MmVjZDFmN2Y5NTM1MWMzOWFlZGUzNjI5MWEiLCJpc3MiOiJ3ZWJhcGkuY3VwaXguY29tIiwiaWF0IjoxNTQwMjU4MjAxLCJleHAiOjE1NDAyNzI2NjEsInRva2VuX3R5cGUiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZSI6bnVsbH0.Jt8WxZ7lCz2-P90iqEPnHlNZmH1oRzZI5p9Aa50nM8g&utm_medium=referral&utm_source=editor.cupix.com&utm_campaign=Preview+tour&editor=true',
    image: centuryHome,
    tour: <iframe title="large" style={{maxWidth: '100%'}} width="640" height="480" frameBorder="0" allowFullScreen src="https://players.cupix.com/embed.html?key=eWnXEEeB"></iframe>
  },
]

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="list">
        {list.map((e, i) => (
          <Box {...e} key={i} num={i} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
