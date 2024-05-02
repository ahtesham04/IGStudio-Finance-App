import React from 'react'
import photos from '../../assests/Group 19.png';
import './card.css'
const Card = ({itemObj,type}) => {
  return (
    <div className="card" >
    <img src={itemObj.imgUrl} className="card-img-top" style={{height:"101px", width:"101px"}} alt="..." />
    <div className="card-body">
      <h5 className="card-title">{itemObj.title}</h5>
      {type==='testimonial' ? (<p className='subtitle'>{itemObj.subTitle}</p>) : ('')}
      <p className="card-text">{itemObj.description}</p>
      {type==='service' ? ( <a href="#" className="btn btn-primary customBtn">Read More</a>) : ('')}
     
    </div>
  </div>
  )
}

export default Card

