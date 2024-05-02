import React from 'react';
import img1 from '../../assests/Rectangle 3651.png'
import img2 from '../../assests/Rectangle 3652.png'
import img3 from '../../assests/Rectangle 3653.png'
import img4 from '../../assests/Rectangle 3654.png'
import img5 from '../../assests/Rectangle 3655.png'
import img6 from '../../assests/Rectangle 3656.png'
import './practice.css'
const AreaOfPractice = () => {
  return (
    <div >
        <div className='practiceCard'>
        <h2>Area of Practices</h2>
        </div>
        
{/* <div className='imageContainer'>
<div className='col1'>
    <p>BUSINESS LAW</p>
    <img src={img2} className='col1' alt="image1"/>
</div>
<div className='col2'>
    <p>Partnership LAW</p>
    <img src={img1} className='col2' alt="image1"/></div>
<div className='col3'>
    <p>REAL ESTATE LAW</p>
    <img src={img3} className='col3' alt="image1"/></div>
<div className='col4'>
    <p>BUSINESS LAW</p>
    <img src={img4} className='col4' alt="image1"/></div>
<div className='col5'>
    <p>
LANDLORD DISPUTES</p>
    <img src={img6} className='col5' alt="image1"/></div>  
<div className='col6'>
    <p>ELDER ABUSE</p>
    <img src={img5} className='col6' alt="image1"/></div>
</div>  */}
        <div className='row g-5'>
            <div className='col-8'><img src={img2} alt="image1"/></div>
            <div className='col-4'><img src={img1} alt="image1"/></div>
            <div className='col-4'><img src={img3} alt="image1"/></div>
            <div className='col-8'><img src={img4} alt="image1"/></div>
            <div className='col-8'><img src={img6} alt="image1"/></div>  
            <div className='col-4'><img src={img5} alt="image1"/></div>
        </div>
    </div>
  )
}

export default AreaOfPractice
