import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddGoodsBtn from '../../../ui/Button/AddGoodsBtn/AddGoodsBtn';
import { useTranslation } from 'react-i18next';
import '../../../utils/list';
import { BsTruck } from "react-icons/bs";


const OneGood = ({ data }) => {
  const user = useSelector((state) => state.users.lkUser);
  const { t } = useTranslation();

  return (
    <div className='p-4 flex flex-wrap gap-4 justify-center '>
      {data?.map((item) => {
        const { id, title, price, description, nalichie, images, category, oldprice, discount, order, orderdiscount} = item;
        return (
          <div
            key={uuidv4()}
            className='bg-neutral-100 rounded-sm shadow-lg border-neutral-200 border-[1px] border-solid p-4 w-[350px] xl:h-[410px] lg:h-[410px] xl:hover:h-[490px] overflow-hidden hover:border-neutral-400 duration-300'
          >
            <Link key={uuidv4()} to={`/goods/${id}`}>

              <img src={images[0]} alt={title} className='bg-white object-contain rounded-sm w-[325px] static h-[250px]'>   
              </img>

              <span className='flex text-[14px] mt-[-50px] rounded-sm ml-[185px] text-left absolute text-white w-fit font-normal p-2 bg-red-400'>{nalichie}<BsTruck className='ml-2 text-[20px]'/></span>    
              <h2 className='text-left font-normal flex m-0 mt-2 text-[16px] text-neutral-700 capitalize'>{title}</h2>
              <h2 className='uppercase m-0 mt-2 text-[12px] text-gray-400' text-left>{category}</h2>
             
            </Link>
            <div className='flex-col'>
            <div className='flex-row justify-between'>
            <div className='m-0 text-[16px] text-neutral-700 font-normal h-fit flex justify-left'>Старая цена: <del className='mx-1 text-red-500'> {oldprice} ₽ </del></div>
              <span className='m-0 text-[16px] text-neutral-700 font-normal h-fit flex justify-left'>Из наличия: <span className='mx-1 text-red-500'> {price} ₽ </span>
              <span className='text-[16px] font-normal px-2 text-gray-400 h-fit flex bg-contain justify-left bg-no-repeat bg-center bg-[url(https://cdn0.divan.by/app/v1/node/website/f35f7073f1bcfe74b219.svg)]'>-{discount}%</span>
              </span>
              </div>
              <div className='flex justify-between'>
              <span className='m-0 text-[16px] font-normal text-neutral h-fit flex justify-center'>На заказ: <span className='mx-1 text-red-500'> {order} ₽ </span>
              <span className='text-[16px] font-normal px-2 text-gray-400 h-fit flex bg-contain justify-center bg-no-repeat bg-center bg-[url(https://cdn0.divan.by/app/v1/node/website/f35f7073f1bcfe74b219.svg)]'>-{orderdiscount}%</span>
              </span>
              </div>
              <span className='my-3 justify-end place-self-end flex'><AddGoodsBtn text={t('button.addBasket')} id={id} goods={item}/></span>
            </div>
          </div>
        );
          

          
    
      })}
    </div>
  );
};

export default OneGood;
