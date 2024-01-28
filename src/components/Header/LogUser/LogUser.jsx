import React from 'react';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../redux/features/initialUsers/initialUsersSlice';
import { ImExit, ImEnter } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineShopping } from "react-icons/ai";
import { IoBag } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { IoExit, IoEnter} from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";


const LogUser = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.users.auth);
  const authCustomer = useSelector((state) => state.users.authCustomer);
  const user = useSelector((state) => state.users.lkUser);

  const successMessageAdmin = () => {
    message.success('Вы вышли из профиля', [1]);
  };

  const handleClick = () => {
    successMessageAdmin();
    dispatch(logOut());
  };

  return (
    <div className='flex items-center gap-4 w-fit'>
      {auth === false && authCustomer === false ? (
        <>
        <a href="" className='text-neutral-200 text-[26px] hover:text-neutral-500 duration-300 gap-2 flex justify-center items-center bg-lime-500 p-2 rounded-full'><FaWhatsapp /></a>
          <Link to='/lk'>
            <IoEnter className=' text-neutral-200 font-[500] bg-neutral-900 p-2 rounded-full hover:text-neutral-100 duration-300 w-[25px] h-[25px] cursor-pointer' />
          </Link>
        </>
      ) : (
        ''
      )}
      {auth || authCustomer ? (
        <>
         <a href="" className='text-neutral-200 text-[26px] hover:text-neutral-500 duration-300 gap-2 flex justify-center items-center bg-lime-500 p-2 rounded-full'><FaWhatsapp /></a>
          <Link to='/lk/about'>
            <AiOutlineUser
              className='w-[40px] h-[40px] object-cover bg-neutral-900 p-2 rounded-full  text-neutral-200 font-[500] hover:text-neutral-500 duration-300'
            />
          </Link>
          <IoExit
            onClick={handleClick}
            className='w-[40px] h-[40px] cursor-pointer bg-neutral-900 p-2 rounded-full text-neutral-200 font-[500] hover:text-neutral-500 duration-300'
          />
          <Link to='/basket'><IoBag className=' bg-neutral-900 p-2 rounded-full w-[40px] font-[500] h-[40px] object-cover  text-neutral-200 hover:text-neutral-500 duration-300' text={'Корзина'}/></Link>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default LogUser;
