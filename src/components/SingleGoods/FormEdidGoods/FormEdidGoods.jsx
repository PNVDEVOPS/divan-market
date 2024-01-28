import AddButton from '../../../ui/Button/AddButton/AddButton';
import { successChangeGoods } from '../../../utils/list';
import {
  useChangeSingleGoodsMutation,
  useGetSingleGoodsQuery,
  useDeleteGoodsMutation,
  useGetCategoryQuery
} from '../../../redux/goodsApi';
import Spinner from '../../../ui/Spinner/Spinner';
import InputText from '../../../ui/Input/InputText';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';

const FormEdidGoods = ({ id }) => {
  const { data: goods = [] } = useGetSingleGoodsQuery(id);
  const [changeGoods, isLoading] = useChangeSingleGoodsMutation();
  // const [img] = useState([1, 2, 3, 4, 5]);
  const { data = [] } = useGetCategoryQuery();
  let allCategories = data.slice(2);

  const handleSubmit = async (e) => {
    successChangeGoods();
    // let images = [];
    // images.push(img1, img2, img3, img4, img5);
    e.preventDefault();
    e.stopPropagation();
    let title = e.target.title.value == '' ? goods.title : e.target.title.value;
    let description = e.target.description.value == '' ? goods.description : e.target.description.value;
    let price = e.target.price.value == '' ? goods.price : Number(e.target.price.value);
    let oldprice = e.target.oldprice.value == '' ? goods.oldprice : Number(e.target.oldprice.value);
    let order = e.target.order.value == '' ? goods.order : Number(e.target.order.value);
    let discount = e.target.discount.value == '' ? goods.discount : Number(e.target.discount.value);
    let orderdiscount = e.target.orderdiscount.value == '' ? goods.orderdiscount : Number(e.target.orderdiscount.value);
    let carcas = e.target.carcas.value == '' ? goods.carcas : e.target.carcas.value;
    let mech = e.target.mech.value == '' ? goods.mech : e.target.mech.value;
    let inside = e.target.inside.value == '' ? goods.inside : e.target.inside.value;
    let gab = e.target.gab.value == '' ? goods.gab : e.target.gab.value;
    let sleep = e.target.sleep.value == '' ? goods.sleep : e.target.sleep.value;
    let nalichie = e.target.nalichie == '' ? goods.nalichie : e.target.nalichie.value;
    // let img1 = e.target.img1.value == '' ? goods.img1 : e.target.img1.value;
    // let img2 = e.target.img2.value == '' ? goods.img2 : e.target.img2.value;
    // let img3 = e.target.img3.value == '' ? goods.img3 : e.target.img3.value;
    // let img4 = e.target.img4.value == '' ? goods.img4 : e.target.img4.value;
    // let img5 = e.target.img5.value == '' ? goods.img5 : e.target.img5.value;
    await changeGoods({
      idGoods: goods.id,
      newTitle: title,
      newPrice: price,
      newOldPrice: oldprice,
      newDescription: description,
      newDiscount: discount,
      newOrderDiscount: orderdiscount,
      newOrder: order,
      newCarcas: carcas,
      newMech: mech,
      newInside: inside,
      newGab: gab,
      newSleep: sleep,
      newNalichie: nalichie,
      // newImages: images,
    }).unwrap();
    e.target.title.value = '';
    e.target.description.value = '';
    e.target.price.value = '';
    e.target.oldprice.value = '';
    e.target.discount.value = '';
    e.target.orderdiscount.value = '';
    e.target.order.value = '';
    e.target.carcas.value = '';
    e.target.mech.value = '';
    e.target.inside.value = '';
    e.target.gab.value = '';
    e.target.sleep.value = '';
    e.target.nalichie = '';
    // e.target.img1.value = '';
    // e.target.img2.value = '';
    // e.target.img3.value = '';
    // e.target.img4.value = '';
    // e.target.img5.value = '';
  };

  if (!isLoading) return <Spinner />;

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-full border-2 p-6'>
      <h1 className='m-0 mb-2 cursor-default'>
        ID: <span className='text-gray-400'>{goods.id}</span>
      </h1>
      <InputText
        labelName={'Название'}
        type={'text'}
        name={'title'}
        placeholder={goods.title}
      />
       <InputText
        labelName={'Старая цена'}
        type={'text'}
        name={'oldprice'}
        placeholder={goods.oldprice}
      />
      <InputText
        labelName={'Цена со скидкой'}
        type={'text'}
        name={'price'}
        placeholder={goods.price}
      />
     <InputText
        labelName={'Цена на заказ'}
        type={'text'}
        name={'order'}
        placeholder={goods.order}
      />
    <InputText
        labelName={'Скидка из наличия'}
        type={'text'}
        name={'discount'}
        placeholder={goods.discount}
      />
    <InputText
        labelName={'Скидка на заказ'}
        type={'text'}
        name={'orderdiscount'}
        placeholder={goods.orderdiscount}
      />
      <InputText
        labelName={'Описание'}
        type={'text'}
        name={'description'}
        placeholder={goods.description}
      />
          <InputText
          labelName={'Каркас'}
          type={'text'}
          name={'carcas'}
          placeholder={goods.carcas}
        />
        <InputText
          labelName={'Механизм'}
          type={'text'}
          name={'mech'}
          placeholder={goods.mech}
        />
        <InputText
          labelName={'Наполнение'}
          type={'text'}
          name={'inside'}
          placeholder={goods.inside}
        />
          <InputText
          labelName={'Габариты'}
          type={'text'}
          name={'gab'}
          placeholder={goods.gab}
        />
          <InputText
          labelName={'Спальное место'}
          type={'text'}
          name={'sleep'}
          placeholder={goods.sleep}
        />
         <InputText
          labelName={'В наличии или под заказ'}
          type={'text'}
          name={'nalichie'}
          placeholder={goods.nalichie}
        />
      <h1 className='mb-2 cursor-default'>
        CATEGORY:{' '}
        <span className='uppercase text-gray-400'>{goods.category}</span>
      </h1>
      <label className='mb-2'>
          <span className='dark:text-white'>Категория товара:</span> 
          <select
            name='category'
            className='px-6 py-4 bg-slate-100 w-full rounded-full'
          >
            {allCategories?.map((item) => {
              return (
                <option key={uuidv4()} value={item.name}>
                  {item.visibleName}
                </option>
              );
            })}
          </select>
        </label>
      {/* <label className='mb-2 '>
          <span className='dark:text-white'>Изображения товара:</span>
          {img?.map((item) => {
            return (
              <input
                key={uuidv4()}
                type='text'
                name={`img${item}`}
                className='w-full bg-slate-100 px-6 py-2 rounded-full mb-2 '
                placeholder='URL изображения'
              />
            );
          })}
        </label> */}
      <AddButton text={'Изменить'} />
    </form>
  );
};

export default FormEdidGoods;
