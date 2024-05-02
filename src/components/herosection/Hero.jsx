import React from 'react'
import './Hero.css';
import heroImg from '../../assests/Group 10591.png';
import placeHolderImg from '../../assests/Message 35.png'

const Hero = () => {
  return (
    <div className='hero d-flex justify-content-between'>
      <div className='leftHero'>
        <h1>You don’t have to</h1>
            <span className='subText '>Fight them Alone.</span>
            <p className='heroPara'>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, 
               curabitur sodales conubia ut inceptos faucibus himenaeos tortor 
               eget, hac massa gravida arcu interdum proin curae.</p>
               <div className='email'>
                <img  className='emailImg' src={placeHolderImg}/>
               <input className='emailSearch' type='text' placeholder='Enter your email address'/>
               <button className='emailButton'>Let's Talk</button>
               </div>
      </div>

      <div className='rightHero'>
        <img src={heroImg} alt='Hero Image' />
      </div>
    </div>
  )
}

export default Hero
