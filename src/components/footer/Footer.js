import React from 'react'
import Navbar from '../navbar/Navbar'
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <Navbar type='footer'/>
      
      <div className='fText'> 
        <p>© 2024 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  )
}

export default Footer
