import React from 'react'
import About from './About'
import Profile from './Profile'

function UpperMain() {
  return (
    <div style={{ display: 'flex', marginTop: '60px' }}>
      <About />
      <Profile />
    </div>
  )
}

export default UpperMain;