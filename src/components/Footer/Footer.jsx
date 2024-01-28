import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import Footerlogopng from '../images/footerlogo.png'
import Ymap from '../FormDelivery/Ymap';

const Footer = () => {
  return (
    // <footer className='flex justify-center h-[40px] items-center bg-neutral-800 px-10 text-white bottom-0 w-full'>
    //   <a href='https://gitlab.com/SkaterPunisher' className='text-white' target='_blank'>nvision</a>
    // </footer>
<footer
  class="bg-neutral-200 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
  <div
    class="flex items-left justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
    <div class="mr-12 hidden lg:block">
      <span>Следите за обновлениями в соцсетях!</span>
    </div>
    <div class="flex justify-center">
      <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </a>
    </div>
  </div>
  <div class="mx-6 pt-10 text-center md:text-left">
    <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div class="">
        <h6
          class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
          DIVAN MARKET
        </h6>
        <p>

        </p>
      </div>
      <div class="">
        <h6
          class="mb-4 xl:text-left items-center justify-center flex font-semibold uppercase md:justify-start">
          Категории
        </h6>
        <p class="mb-4  xl:text-left">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200 "
            >Все товары</a
          >
        </p>
        <p class="mb-4 xl:text-left">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Мини-диваны</a
          >
        </p>
        <p class="mb-4 xl:text-left">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Прямые диваны</a
          >
        </p>
        <p class="mb-4 xl:text-left">
          <a href="#! xl:text-left" class="text-neutral-600 dark:text-neutral-200"
            >Угловые диваны</a
          >
        </p>
      </div>
      <div class="">
        <h6
          class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Полезные ссылки
        </h6>
        <p class="mb-4 xl:text-left">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Доставка и сборка</a
          >
        </p>
        <p class="mb-4 xl:text-left">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Сроки на заказ диванов </a
          >
        </p>
        <p class="mb-4 xl:text-left">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Ткани</a
          >
        </p>
        <p class="mb-4 xl:text-left">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200 "
            >Помощь</a
          >
        </p>
      </div>
      <div>
        <h6
          class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Контакты
        </h6>
        <p class="mb-4 flex items-center justify-center md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="mr-3 h-5 w-5">
            <path
              d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path
              d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          divan-market@example.com
        </p>
        <p class="mb-4 flex items-center justify-center md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="mr-3 h-5 w-5">
            <path
              fill-rule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clip-rule="evenodd" />
          </svg>
          +7(4112)32‒62‒29
        </p>
        <p class="flex items-center justify-center md:justify-start">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="mr-3 h-5 w-5">
            <path
              fill-rule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clip-rule="evenodd" />
          </svg>
          +7(964)417‒40‒44
        </p>
        <p class="mb-4 flex items-center text-left  justify-center md:justify-start w-80">
        <FaMapMarkerAlt className='mr-5' />​ТВК Строительный ​Улица Жорницкого, 35, ​323 павильон; 3 этаж
        </p>
        <p class="mb-4 flex items-center text-left justify-center md:justify-start w-80">
        <FaMapMarkerAlt className='mr-5'/>ТРК Азия​Улица Чернышевского, 74, 8​51 павильон; 1 этаж
        </p>
      </div>
    </div>
  </div>
    <div>
      <Ymap></Ymap>
    </div>
  <div class="bg-neutral-200 p-6 text-center dark:bg-neutral-700 justify-center items-center flex">
    <img src={Footerlogopng} className='w-52 h-14 object-cover' alt="f" />
  </div>
</footer>
  );
};

export default Footer;
