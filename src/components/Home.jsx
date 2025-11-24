import React from 'react'
import facebook from '../assets/facebook.png'
// import facebook from '../assets/facebook.png'


const Home = () => {
  return (
    // <div className='hero'>
       
    //   <p>Hi, I'm <span>Ankit Jha</span></p>
    //   <p>Frontend Developer</p>
    //   <p>Frontend Web Developer expert in
    //     crafting clean, responsive, and 
    //     engaging web apps. </p> 
    //     <button className='btn-res'>Download Resume</button>
    // </div>

    <div className="profile-container">
    <div className="profile-inner">
    <div className="profile-card">
      
        <img className='user-img' src={facebook} alt="user-image" />
        <p class="user-name">Ankit Jha</p>
        <p class="user-address">Delhi, India</p>
        <p class="user-des">"Front-end developer and avid reader."</p>
      
    </div>
    <div class="profile-card back">
      <h2>About Me</h2>
      <p className='user-des'>
        I’m a front-end developer with 3+ years of experience in Angular,  
        TypeScript, JavaScript, and UI/UX. Passionate about building clean  
        and user-friendly web applications.
      </p>
    </div>
    </div>
    </div>
  )
}

export default Home