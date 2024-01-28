import React from 'react';
import { useSelector } from 'react-redux';
import { useGetUsersQuery } from '../redux/goodsApi';
import Spinner from '../ui/Spinner/Spinner';
import { v4 as uuidv4 } from 'uuid';
import BasketItem from '../components/BasketItem/BasketItem';
import ConfirmDilivery from '../ui/Button/ConfirmDilivery/ConfirmDilivery';
import FormDelivery from '../components/FormDelivery/FormDelivery';
import DeliveryTab from '../components/FormDelivery/DeliveryTab';

const BasketPage = () => {
  const user = useSelector((state) => state.users.lkUser);

  const { data = [], isLoading } = useGetUsersQuery(user.id);
  let result = data.find((item) => item.id == user.id);

  if (isLoading) return <Spinner />;

  return (
    <div className='p-6 flex-row'>
      <h1 className='text-[20px] sm:text-[30px] font-[500] dark:text-white'>Товары в корзине на сумму: {result.GeneralsumInBasket} ₽</h1>
      {result.basket.item?.map((item) => {
        const { id, title, price, img, col, phone, adress, pod, floor, kv, sborka, com  } = item;
        return (
          <BasketItem key={uuidv4()} id={id} title={title} price={price} img={img} col={col}/>
          
        );
        
      })}
      <DeliveryTab>
      </DeliveryTab>
      {result.GeneralsumInBasket > 0 ? <ConfirmDilivery result={result}/> : ''}
      
    </div>
  );
};

export default BasketPage;
