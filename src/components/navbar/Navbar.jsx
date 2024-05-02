import React from 'react'
import './navbar.css'
import vectorImg from '../../assests/Vector.png'
import igStudioImg from '../../assests/Igstudio.png'
import fImg1 from '../../assests/Icon.png'
import fImg2 from '../../assests/Icon (1).png'
import fImg3 from '../../assests/Icon (2).png'
import fImg4 from '../../assests/Icon (3).png'

const Navbar = ({type}) => {
  return (
    <nav className='d-flex justify-content-between align-items-centre mt-5 header'>
        <div className='logo'>
            <img src={vectorImg} alt=''/>
             <img src={igStudioImg} alt=''/>
       </div>
        <div className='d-flex justify-content-evenly align-items-centre' style={{width:'50%'}}>
            <div>Home</div>
            <div>Attorneys</div>
            <div>Practice Areas</div>
            <div>About Us</div>
        </div>
        <div >
          {type==='header'?( <button type="button" className="btn btn-outline-light Contactbtn">Contact Now</button>)
          :(<div>
            <img src={fImg1} style={{marginRight:"10px"}}/>
            <img src={fImg2} style={{marginRight:"10px"}}/>
            <img src={fImg3} style={{marginRight:"10px"}}/>
            <img src={fImg4} />
          </div>)}
         </div>
    </nav>
  )
}

export default Navbar
