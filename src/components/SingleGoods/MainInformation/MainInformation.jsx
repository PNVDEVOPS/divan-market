import React from 'react';
import {useState} from 'react';
import { MdModeEdit } from 'react-icons/md';
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from 'react-router-dom';
import AddGoodsBtn from '../../../ui/Button/AddGoodsBtn/AddGoodsBtn';
import { useSelector } from 'react-redux';
import Order from '../../../ui/Button/AddButton/Order';
import AddOrder from '../../../ui/Button/AddGoodsBtn/AddOrder';
import { BsTruck } from "react-icons/bs";

const MainInformation = ({ title, description, price, nalichie, id, data, oldprice, order, discount, orderdiscount, color1, color2, color3, colortext1, colortext2,colortext3}) => {
  const auth = useSelector((state) => state.users.auth);

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index)
  }


  return (
    <div className='px-8 py-6 flex-row md:flex-col sm:flex-col justify-between  w-full shrink-1'>
      <h2 className='text-[40px] m-0'>{title}</h2>
      <span className='flex text-[20px] text-white my-4 w-fit font-normal p-2 bg-red-400'>{nalichie}<BsTruck className='ml-2 text-[30px]'/></span>
      <h2 className=' text-[20px] my-4 font-normal'>{description}</h2>

      <div className='text-[20px] font-normal flex gap-4'>
          <div 
          className={toggleState === 1 ? 'bg-neutral-200 p-3 rounded-tl-lg rounded-tr-lg' : 'bg-neutral-700 hover:bg-neutral-400 duration-200 cursor-pointer p-3 rounded-tl-lg rounded-tr-lg text-white'}
          onClick={() => toggleTab(1)}>В наличии</div>
          <div 
          className={toggleState === 2 ? 'bg-neutral-200 p-3 rounded-tl-lg rounded-tr-lg' : 'bg-neutral-700 hover:bg-neutral-400 duration-200 cursor-pointer p-3 rounded-tl-lg rounded-tr-lg text-white'}
          onClick={() => toggleTab(2)}>На заказ</div>
      </div>
      <div className={toggleState === 1 ? 'bg-neutral-200 shadow-lg p-6 rounded-bl-lg rounded-br-lg rounded-tr-lg flex-col' :  'shadow-lg hidden'}>
      <div className='flex justify-left items-center gap-4 '>
            <a href='https://tex.group/textile/luma/' className='flex-col items-center hover:scale-105  duration-500'>
              <img src={'https://tex.group/wp-content/uploads/2022/02/Luma-18web-600x600.jpg'} alt="1" className='rounded-full object-cover h-14 w-14 border-solid border-[1px] border-neutral-500'/> 
              <h1 className='text-[20px] font-normal h-full w-fit'>
                Luma
              </h1>
            </a>
            <a href='https://tex.group/textile/modus/'>
              <img src={'https://tex.group/wp-content/uploads/2019/04/modus-21-600x600.jpg'} alt="2" className='rounded-full object-cover h-14 w-14 border-solid border-[1px] border-neutral-500'/> 
              <h1 className='text-[20px] font-normal h-full w-fit'>
                Modus
              </h1>
            </a>
            <a href='https://tex.group/textile/lambi/'>
              <img src={'https://tex.group/wp-content/uploads/2022/02/06web.jpg'} alt="3" className='rounded-full object-cover h-14 w-14 border-solid border-[1px] border-neutral-500'/> 
              <h1 className='text-[20px] font-normal h-full w-fit'>
                Lambi
              </h1>
            </a>
            <a href='https://tex.group/textile/candy/'>
              <img src={'https://tex.group/wp-content/uploads/2020/10/CRUSH-02-600x600.jpg'} alt="3" className='rounded-full object-cover h-14 w-14 border-solid border-[1px] border-neutral-500'/> 
              <h1 className='text-[20px] font-normal h-full w-fit'>
                Candy
              </h1>
            </a>
        </div>
      <div className='flex justify-between'>
      <h2 className='m-0 font-normal flex text-[20px] font-md dark:text-white w-fit'>
      <span className='m-0 text-[20px]inline-block'><span className='text-red-500'> {price} ₽ </span> </span>
      <del className='ml-2 text-[20px] text-gray-400 inline-block'> {oldprice} ₽ </del>
      <span className='text-[20px] px-2  h-fit flex bg-contain justify-center bg-no-repeat bg-center bg-[url(https://cdn0.divan.by/app/v1/node/website/f35f7073f1bcfe74b219.svg)]'>-{discount}%</span>
      </h2>
      
      </div>
      <div className='text-[20px] mt-4 font-normal h-full w-fit'>О наличии и расцветках уточняйтесь у консультанта</div>
      <div className='mt-3'>
      <AddGoodsBtn text={'Добавить в корзину'} id={id} goods={data} />
      </div>
      </div>
      <div className={toggleState === 2 ? 'bg-neutral-200 flex p-6 shadow-lg rounded-bl-lg rounded-br-lg rounded-tr-lg flex-col' :  'shadow-lg hidden'}>
      <div className='flex justify-left items-center gap-4 '>
            <a href='https://tex.group/textile/luma/' className='flex-col items-center'>
              <img src={'https://tex.group/wp-content/uploads/2022/02/Luma-18web-600x600.jpg'} alt="1" className='rounded-full object-cover h-14 w-14 border-solid border-[1px] border-neutral-500'/> 
              <h1 className='text-[20px] font-normal h-full w-fit'>
                Luma
              </h1>
            </a>
            <a href='https://tex.group/textile/modus/'>
              <img src={'https://tex.group/wp-content/uploads/2019/04/modus-21-600x600.jpg'} alt="2" className='rounded-full object-cover h-14 w-14 border-solid border-[1px] border-neutral-500'/> 
              <h1 className='text-[20px] font-normal h-full w-fit'>
                Modus
              </h1>
            </a>
            <a href='https://tex.group/textile/lambi/'>
              <img src={'https://tex.group/wp-content/uploads/2022/02/06web.jpg'} alt="3" className='rounded-full object-cover h-14 w-14 border-solid border-[1px] border-neutral-500'/> 
              <h1 className='text-[20px] font-normal h-full w-fit'>
                Lambi
              </h1>
            </a>
            <a href='https://tex.group/textile/candy/'>
              <img src={'https://tex.group/wp-content/uploads/2020/10/CRUSH-02-600x600.jpg'} alt="3" className='rounded-full object-cover h-14 w-14 border-solid border-[1px] border-neutral-500'/> 
              <h1 className='text-[20px] font-normal h-full w-fit'>
                Candy
              </h1>
            </a>
        </div>
      <div className='flex justify-between'>
      <h2 className='m-0 font-normal flex text-[20px] font-md dark:text-white w-fit'>
      <span className='m-0 text-[20px]inline-block'><span className='text-red-500'> {order} ₽ </span> </span>
      <del className='ml-2 text-[20px] text-gray-400 inline-block'> {oldprice} ₽ </del>
      <span className='text-[20px] px-2  h-fit flex bg-contain justify-center bg-no-repeat bg-center bg-[url(https://cdn0.divan.by/app/v1/node/website/f35f7073f1bcfe74b219.svg)]'>-{orderdiscount}%</span>
      </h2>
      </div>
      <div className='text-[20px] mt-3 font-normal h-full w-fit'>О сроках доставки и расцветках уточняйтесь у консультанта</div>
      <div className='mt-3'>
      <AddOrder text={'Добавить в корзину'} id={id} goods={data} />
      </div>
      </div>
      {/* <div className='w-fit flex text-[20px] p-2 my-5 font-light text-white rounded-sm bg-red-400'>{nalichie}В наличии, доставка 3 дня <br /> <CiDeliveryTruck className=' w-8 h-8'/> </div> */}
      {auth ? (
          <Link to={`/goods/${id}/edit`} state={{ id: id }} className='flex items-center mt-10'>
            <MdModeEdit />
            Редактировать товар
          </Link>
        ) : (
          ''
)}
    </div>
  );
};

export default MainInformation;
