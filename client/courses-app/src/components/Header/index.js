import React from 'react'
import Images from '../Images/p3_logo.png'
import './header.css'

const Header = () => {
    return (
      <header className="app-header">   
      <img className="logo" src={Images} width='40px' height='40px' alt='Guy Reading Book'></img>
          <h1 className="title">Class Act</h1>
      </header>
    )
  }

export default Header