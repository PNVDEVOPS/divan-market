import React from 'react'
import { Carousel } from 'antd';
import { v4 as uuidv4 } from 'uuid';

const  CarouselImages = ({ banners, title }) => {
  return (
    <Carousel autoplay className='w-[500px] h-[500px]'>
        {banners.map((item) => {
          return (
            <img
              key={uuidv4()}
              src={item}
              alt={title}
              className='w-[500px] h-[500px] object-cover'
            />
          );
        })}
      </Carousel>
  )
}

export default  CarouselImages
