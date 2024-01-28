import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CustomLink from '../../CustomLink/CustomLink';
import { MdMenu, MdClose } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import '../../../utils/i18next.js'

const NavLinks = () => {
  const auth = useSelector((state) => state.users.auth);
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation()

  return (
    <>
      <div className='sm:hidden'>
        <MdMenu
          onClick={() => setVisible(!visible)}
          className='text-neutral-900 w-[35px] h-[35px]  cursor-pointer'
        />
        <div
          className={`duration-300 ${
            visible
              ? 'absolute top-0 left-0 w-[320px] h-full bg-neutral-900'
              : 'absolute left-[-320px]'
          }`}
        >
          <MdClose
            onClick={() => setVisible(!visible)}
            className='absolute text-white w-[35px] h-[35px] cursor-pointer mt-[20px] ml-[260px]'
          />
          <div className='text-white text-[18px] cursor-default mt-6 ml-4'>
            Divan Market
          </div>
          <div className='flex py-5 flex-col bg-neutral-900'>
            <CustomLink to='/'>{t("header.main")}</CustomLink>
            <CustomLink to='/goods'>{t("header.goods")}</CustomLink>
            {auth ? <CustomLink to='/admin'>{t("header.admin")}</CustomLink> : ''}
            <a href="" className='text-neutral-700 text-[20px] w-fit flex items-center hover:text-neutral-900 text-center'>+7(4112)32‒62‒29</a>
            <a href="" className='text-neutral-700 text-[20px] w-fit flex items-center hover:text-neutral-900 text-center'>+7(964)417‒40‒44</a>
          </div>
        </div>
      </div>
      <div className='hidden sm:block'>
        {/* <CustomLink to='/'>{t("header.main")}</CustomLink> */}
        <CustomLink to='/goods'>{t("header.goods")}</CustomLink>
        
        {auth ? <CustomLink to='/admin'>{t("header.admin")}</CustomLink> : ''}
      </div>
    </>
  );
};

export default NavLinks;
