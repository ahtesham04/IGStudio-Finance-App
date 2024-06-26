import React, { useEffect, useState } from 'react';
// import {ReactComponent as RightArrow} from '../../assets/RightArrow.svg';
import { useSwiper } from 'swiper/react';
import rightArrow from '../../assests/rightarrow.png';
import './carausel.css'

const CarauselRightBtn = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd)

    useEffect(() =>{
        swiper.on("slideChange",() =>{
            setIsEnd(swiper.isEnd)
        })
    },[])
  return (
    <div >
        <button className='rightBtn' onClick={() => swiper.slideNext()}><img src={rightArrow} alt='right btn' /></button>
      {/* {!isEnd && <RightArrow onClick={() => swiper.slideNext()}/>} */}
    </div>
  )
}

export default CarauselRightBtn
