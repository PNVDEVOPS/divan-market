import React from 'react';
import { Link } from 'react-router-dom';


const MainBasketItem = ({ id, title, price, img }) => {
  return (
    <Link
      to={`/goods/${id}`}
      state={{
        adres: '/basket',
      }}
    >
      <div className='flex items-center sm:flex-row md:flex-row'>
        <img
          src={img}
          alt={title}
          className='xl:h-[200px] xl:w-[300px] lg:h-[200px] lg:w-[300px] w-[100px] h-[100px] object-contain mr-10'
        />
        <div className='flex-row'>
          <h2 className='dark:text-white sm:text-14px'>{title}</h2>
          <h2 className='dark:text-white sm:text-14px'>{price} ₽</h2>
        </div>
      
      </div>
    </Link>
  );
};

export default MainBasketItem;
