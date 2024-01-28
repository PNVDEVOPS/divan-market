
import { useDispatch } from 'react-redux';
import { searchName } from '../../../redux/features/initialGoods/initialGoodsSlice';
import { useTranslation } from 'react-i18next';
import { CiSearch } from "react-icons/ci";
import '../../../utils/list';

const SearchTitle = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      dispatch(searchName(e.target.value));
    }
    if (e.target.value.length < 1) {
      dispatch(searchName(e.target.value))
    }
  };

  return (
    <div className='items-center flex-auto justify-center'>
      <CiSearch className='text-[20px] absolute mt-[23px] ml-[20px] text-neutral-500'/>
      <input
        onKeyUp={handleSearch}
        className='bg-neutral-100 border-2 h-[50px] lg:w-[50%] border-solid px-10 py-2 rounded-full mt-2 mb-2 flex-auto'
        placeholder={t('goods.search')}

      >
      </input>
    </div>
  );
};

export default SearchTitle;
