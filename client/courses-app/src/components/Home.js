import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Images from './Images/class_act_home_image.jpeg'

function Home() {
  return (
    <div>
      
    

      <h1>Hate or Love Your Course?</h1>
      <img src={Images} width='500px' height='300px' alt='Students In Class With Teacher'></img>
      <p>Want to rate a course you just took? Use our world renowned app, <span>Class Act</span>. Share your reviews to the world!</p>



      
    </div>
  )
}

export default Home