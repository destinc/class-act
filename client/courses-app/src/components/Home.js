import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Images from './Images/class_act_home_image.jpeg'
import './Home.css'

function Home() {
  return (
    <div>
      
    

      <h2>Hate or Love Your Course?</h2>
      <img className="teaching" src={Images} width='500px' height='300px' alt='Students In Class With Teacher'></img>
      <div className="paragraph-container">
      <p>Want to rate a course you just took? Use our world renowned app, <span>Class Act</span>. Share your reviews to the world!</p>
      </div>


      
    </div>
  )
}

export default Home