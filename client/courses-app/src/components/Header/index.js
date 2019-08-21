import React from 'react'
import Images from '../Images/p3_logo.png'

const Header = () => {
    return (
      <header className="app-header">   
      <img className="logo" src={Images} width='40px' height='40px' alt='Guy Reading Book'></img>
          <h1>Class Act</h1>
      </header>
    )
  }

export default Header