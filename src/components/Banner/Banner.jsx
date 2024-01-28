import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({banners, price}) => {
  return (
    <Link>
      <div className='flex items-center object-contain w-[1650px] h-[600px]'>
          {banners}{price}
      </div>
    </Link>
  );
};

export default Banner;