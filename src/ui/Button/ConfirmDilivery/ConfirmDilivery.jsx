import { Modal } from 'antd';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MainBasketItem from '../../../components/BasketItem/MainBasketItem/MainBasketItem';
import {
  useConfirmDiliveryBasketMutation,
  useGetSingleUserQuery,
} from '../../../redux/goodsApi';
import Spinner from '../../Spinner/Spinner';
import { useSelector } from 'react-redux';
import { successConfirm } from '../../../utils/list'
import FormDelivery from '../../../components/FormDelivery/FormDelivery';

const ConfirmDilivery = ({ result }) => {
  const user = useSelector((state) => state.users.lkUser);
  const [removeBasketItem] = useConfirmDiliveryBasketMutation();
  let { data = [], isLoading } = useGetSingleUserQuery(user.id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
    successConfirm();
    let date = new Date();
    let userHistory = JSON.parse(JSON.stringify(data.history));
    userHistory[date] = { ...data.basket.item };
    await removeBasketItem({
      idUser: user.id,
      item: [],
      generalSum: 0,
      history: userHistory,
    }).unwrap();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <button
        onClick={showModal}
        className='text-white text-[20px] w-[100%] font-normal px-6 py-3 rounded-sm  bg-neutral-700 hover:bg-neutral-500 duration-200 dark:bg-slate-200 dark:hover:bg-gray-400 '
      >
        Оформить заказ
      </button>
      <Modal className='text-[20px]'
        title='Подтвердите информацию о заказе'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText={'Назад'}
        okText={'Оформить заказ'}
      >
        {result.basket.item?.map((item) => {
          const { id, title, price, img, col, phone, adress, pod, floor, kv, sborka, com } = item;
          let resultSum = col * price;
          return (
            <div
              className='flex items-center mb-4 justify-between text-[20px]'
              key={uuidv4()}
            >
              <MainBasketItem className='text-[20px]'
                id={id}
                title={title}
                price={price}
                img={img}
                col={col}
              />
              <FormDelivery
              phone={phone}
              adress={adress}
              pod={pod}
              floor={floor}
              kv={kv}
              sborka={sborka}
              com={com}>
              </FormDelivery>
              
              <div>
                <h2 className='text-[20px]'>{col} шт</h2>
                <h2 className='text-[20px]'>Всего: {resultSum} ₽</h2>
              </div>
            </div>
          );
        })}
        <h2 className='mt-10 '>Итого: {result.GeneralsumInBasket}</h2>
      </Modal>
    </>
  );
};

export default ConfirmDilivery;
