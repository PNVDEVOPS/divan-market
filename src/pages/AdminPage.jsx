import { Route, Routes, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import FormAddCategories from '../components/AdminPage/FormAddCategories/FormAddCategories';
import FormAddGoods from '../components/AdminPage/FormAddGoods/FormAddGoods';

const AdminPage = () => {
  const location = useLocation();

  return (
    <div>
      <h2 className='mt-4 text-[25px] sm:text-[50px] font-[500] text-center dark:text-white'>Администрирование</h2>

      <div className='flex flex-col'>
        <ul className='px-6 py-2 h-full flex sm:flex-row flex-col justify-start'>
          <li
            className={`mb-4 sm:mb-0 ${
              location.pathname === '/admin/addGoods'
                ? 'bg-neutral-900 rounded-sm text-white text-[20px] px-4 py-2 mx-2 w-fit'
                : 'bg-neutral-900 rounded-sm text-white text-[20px] px-4 py-2 mx-2 w-fit'
            }`}
          >
            <Link to='addGoods' className='text-inherit'>
              Добавить товар
            </Link>
          </li>
          <li
            className={`${
              location.pathname === '/admin/addCategories'
                ? 'bg-neutral-900 rounded-sm text-white text-[20px] px-4 py-2 mx-2 w-fit'
                : 'bg-neutral-900 rounded-sm text-white text-[20px] px-4 py-2 mx-2 w-fit'
            }`}
          >
            <Link to='addCategories' className='text-inherit'>
              Добавить категорию товаров
            </Link>
          </li>
        </ul>
        <div className='min-h-[250px] p-6'>
          <Routes>
            <Route path='addGoods' element={<FormAddGoods />} />
            <Route path='addCategories' element={<FormAddCategories />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
