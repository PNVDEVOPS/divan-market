import LogUser from './LogUser/LogUser';
import NavLinks from './NavLinks/NavLinks';
import SwitchLanguage from './SwitchLanguage/SwitchLanguage';
import SwitchTheme from './SwitchTheme/SwitchTheme';
import Logopng from '../images/Logo.png'
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";


const Header = () => {
  return (
    <header className='bg-neutral-200 justify-center relative z-10 max-w-full '>
      <div className='h-[60px] flex justify-between items-center max-w-[1650px]  ml-[100px] m-auto px-10'>
        <Link to='/goods' className='text-black text-[20px] cursor-pointer hidden md:block box-border min:w-[50px] w-[150px]'>
          <img src={Logopng} className='min:w-35 place-self-left' alt="logo"/>
          </Link><NavLinks />
        <SwitchTheme />
        <SwitchTheme />
        <div className='xl:block hidden lg:block items-center gap-4 '>
        <a href="" className='text-neutral-700 text-[14px] w-fit flex items-center hover:text-neutral-900 text-center'><FaPhoneAlt />+7(4112)32‒62‒29</a>
        <a href="" className='text-neutral-700 text-[14px] w-fit flex items-center hover:text-neutral-900 text-center'><FaPhoneAlt />+7(964)417‒40‒44</a>
        </div>
          <LogUser />
      </div>
      
      <div className='flex gap-4 items-center justify-start max-w-[1650px] m-auto px-10' >
      
      </div >
    </header>

  );
};

export default Header;
