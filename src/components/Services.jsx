import React from 'react'
import img1 from '../assets/1.jpeg'
import img2 from '../assets/2.jfif'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel'
function Services() {
  return (
    <div>
       <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1700} showThumbs={false} showIndicators={true}>
        <div>
            <img src={img1}/>
            <p className='legend'>Full Stack</p>
        </div>
        <div>
            <img src={img2}/>
            <p className='legend'>peer-to-peer Support</p>
        </div>
        </Carousel> 
    </div>
  )
}

export default Services
