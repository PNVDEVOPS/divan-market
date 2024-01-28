import React, { useState } from 'react';
import { useGetCategoryQuery } from '../../../redux/goodsApi';
import Spinner from '../../../ui/Spinner/Spinner';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { changeCategory } from '../../../redux/features/initialGoods/initialGoodsSlice';



const SelectCategory = () => {
  const dispatch = useDispatch();
  const { data = [], isLoading } = useGetCategoryQuery();
  const [categories, setCategories] = useState('Все товары')


  const handleChange = (e) => {
    dispatch(changeCategory(e.target.value));
    setCategories(e.target.value)
  };

  if (isLoading) return <Spinner />;

  return (
    <div className='overflow-hidden items-center flex'>
      <select
        name='category'
        onChange={handleChange}
        className='px-6 lg:ml-[200px] py-3 border-b-2 border-solid border-b-neutral-900 sm:ml-10 w-[100%] rounded-none pr-6 mt-2 mb-2 '
      >
        {data?.map((item) => {
          return (
            <option className='text-[20px] backdrop-blur-md my-[20px]' key={uuidv4()} value={item.name}>
              {item.visibleName}
            </option>
          );
        })}
      </select>
      <h1 className='m-0 w-full text-center ml-6 mr-6 uppercase text-[12px] sm:text-[15px] text-gray-400'>{categories.length > 0 ? categories : 'All goods'}</h1>
    </div>
  );
};

export default SelectCategory;
