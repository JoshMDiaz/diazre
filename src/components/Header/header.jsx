import React from 'react'

const navArr = [
  {
    name: 'Who We Are'
  },
  {
    name: 'What We Do'
  },
  {
    name: 'Get a Quote'
  },
]

const Header = () => (
  <header>
    <div className="padding nav">
      {navArr.map((e, i) => (
        <span key={i}>{e.name}</span>
      ))}
    </div>
  </header>
)

export default Header
