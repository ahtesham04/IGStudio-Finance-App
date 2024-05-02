import React from 'react';
import leftArrow from '../../assests/leftarrow.png';
import rightArrow from '../../assests/rightarrow.png';
import {testimonialCard, teamCard} from '../../constant/data'
import './testi.css'
import Card from '../card/Card';
import CustomCard from '../card/CustomCard';
import Carausel from '../carausel/Carausel';

const Testimonials = () => {
  return (
    <div className='testimonial'>
      {/* <div className='heading'>
        <div className="headerText">
            <h2>What says our
happy Clients
</h2>
</div>
            <div className='carauselBtn'>
            <button className='leftBtn'><img src={leftArrow} alt='left btn' /></button>
            <button className='rightBtn'><img src={rightArrow} alt='right btn' /></button>
            </div>
      </div> */}
      <div className='testCard'>
        {/* {testimonialCard.map(item => <Card itemObj={item} type='testimonial'/>)} */}
        <Carausel data={testimonialCard} renderCardItem={(item) => <Card itemObj={item} type='testimonial'/>} />
      </div>
      <div className='teamSection'>
        <h2>Our Team</h2>
        <div className='teamMember'>
          <div className='row g-5'>
          {teamCard.map(item => <CustomCard data={item} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
