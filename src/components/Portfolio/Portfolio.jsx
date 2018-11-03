import React from 'react'
import Box from '../Box/box'
import centuryHome from '../../images/century.jpg'

const list = [
  {
    name: 'Medium',
    link:
      'https://players.cupix.com/preview/2OfQikoY?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3Rva2VuIjoiMTdlY2Y3MmVjZDFmN2Y5NTM1MWMzOWFlZGUzNjI5MWEiLCJpc3MiOiJ3ZWJhcGkuY3VwaXguY29tIiwiaWF0IjoxNTQwMjU4MjAxLCJleHAiOjE1NDAyNzI2NjEsInRva2VuX3R5cGUiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZSI6bnVsbH0.Jt8WxZ7lCz2-P90iqEPnHlNZmH1oRzZI5p9Aa50nM8g&utm_medium=referral&utm_source=editor.cupix.com&utm_campaign=Preview+tour&editor=true',
    image: centuryHome,
  },
  {
    name: 'Condo',
    link:
      'https://players.cupix.com/preview/2OfQikoY?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3Rva2VuIjoiMTdlY2Y3MmVjZDFmN2Y5NTM1MWMzOWFlZGUzNjI5MWEiLCJpc3MiOiJ3ZWJhcGkuY3VwaXguY29tIiwiaWF0IjoxNTQwMjU4MjAxLCJleHAiOjE1NDAyNzI2NjEsInRva2VuX3R5cGUiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZSI6bnVsbH0.Jt8WxZ7lCz2-P90iqEPnHlNZmH1oRzZI5p9Aa50nM8g&utm_medium=referral&utm_source=editor.cupix.com&utm_campaign=Preview+tour&editor=true',
    image: centuryHome,
  },
  {
    name: 'Townhouse',
    link:
      'https://players.cupix.com/preview/2OfQikoY?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3Rva2VuIjoiMTdlY2Y3MmVjZDFmN2Y5NTM1MWMzOWFlZGUzNjI5MWEiLCJpc3MiOiJ3ZWJhcGkuY3VwaXguY29tIiwiaWF0IjoxNTQwMjU4MjAxLCJleHAiOjE1NDAyNzI2NjEsInRva2VuX3R5cGUiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZSI6bnVsbH0.Jt8WxZ7lCz2-P90iqEPnHlNZmH1oRzZI5p9Aa50nM8g&utm_medium=referral&utm_source=editor.cupix.com&utm_campaign=Preview+tour&editor=true',
    image: centuryHome,
  },
  {
    name: 'Big',
    link:
      'https://players.cupix.com/preview/2OfQikoY?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3Rva2VuIjoiMTdlY2Y3MmVjZDFmN2Y5NTM1MWMzOWFlZGUzNjI5MWEiLCJpc3MiOiJ3ZWJhcGkuY3VwaXguY29tIiwiaWF0IjoxNTQwMjU4MjAxLCJleHAiOjE1NDAyNzI2NjEsInRva2VuX3R5cGUiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZSI6bnVsbH0.Jt8WxZ7lCz2-P90iqEPnHlNZmH1oRzZI5p9Aa50nM8g&utm_medium=referral&utm_source=editor.cupix.com&utm_campaign=Preview+tour&editor=true',
    image: centuryHome,
  },
]

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2 className="padding max-width">About Us</h2>
      <p className="padding max-width">
        Diaz Real Estate, LLC specializes in Virtual Reality Photography in real
        estate. If you are listing a home, you will definitely want to have a
        virtual tour of your home. Buyers can get a much better feel for the
        space by touring your home online than by viewing a few pictures. Don't
        miss this opportunity!
      </p>
      <div className="list">
        {list.map((e, i) => (
          <Box {...e} key={i} num={i} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
