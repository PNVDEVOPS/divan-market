import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <div className='max-w-[1900px] mx-auto font-body'>
        <Outlet />
      </div>
      <Footer className='flex items-end' />
    </>
  );
};

export { Layout };
