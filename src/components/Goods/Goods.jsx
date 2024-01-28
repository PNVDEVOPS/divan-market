import Spinner from '../../ui/Spinner/Spinner';
import MoreGoodsBtn from '../../ui/Button/MoreGoodsBtn/MoreGoodsBtn';
import OneGood from './OneGood/OneGood';
import { useGetGoodsQuery, useSearchGoodsQuery } from '../../redux/goodsApi';
import { useSelector } from 'react-redux';
import SelectCategory from './SelectCategory/SelectCategory';
import SearchTitle from './SearchTitle/SearchTitle';
import IndividualIntervalsExample from '../Carousel/Carouselcomponent';



const Goods = () => {
  const limit = useSelector((state) => state.initialGoods.limit);
  const searchName = useSelector((state) => state.initialGoods.searchName);
  const categoryGoods = useSelector((state) => state.initialGoods.category);

  const body = {
    limit: limit,
    category: categoryGoods,
    search: searchName,
  };

  const { data: goods = [], isLoading } = useGetGoodsQuery(body);

  let slides = [
    "https://www.ortix.ru/upload/medialibrary/310/31090401783ac1b2f3872e270f0919df.jpg",
    "https://www.ortix.ru/upload/medialibrary/310/31090401783ac1b2f3872e270f0919df.jpg",
    "https://www.ortix.ru/upload/medialibrary/310/31090401783ac1b2f3872e270f0919df.jpg",
  ];

  if (isLoading) return <Spinner />;

  return (
    <>
      <div className='w-full items-center justify-center  h-full m-auto object-contain py-1'>
      <IndividualIntervalsExample/>
      </div>
      <div className='flex  items-stretch'>
      <SelectCategory/><SearchTitle/></div>
      <OneGood data={goods} />
      <div className='text-center'>
        <MoreGoodsBtn />
      </div>
    </>
  );
};

export default Goods;
