import React, { useState } from 'react';
import { useAddGoodsMutation, useGetCategoryQuery } from '../../../redux/goodsApi';
import { v4 as uuidv4 } from 'uuid';
import Spinner from '../../../ui/Spinner/Spinner';
import { successAddGoods, errorAddGoods } from '../../../utils/list';
import AddButton from '../../../ui/Button/AddButton/AddButton';
import InputText from '../../../ui/Input/InputText';

const FormAddGoods = () => {
  const [addGoods, isLoading] = useAddGoodsMutation();

  const { data = [] } = useGetCategoryQuery();
  let allCategories = data.slice(2);

  const [img] = useState([1, 2, 3, 4, 5]);

  const handleAddGoods = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    let title = e.target.title.value;
    let price = Number(e.target.price.value);
    let oldprice = Number(e.target.oldprice.value);
    let order = Number(e.target.order.value);
    let discount = e.target.discount.value;
    let orderdiscount = e.target.orderdiscount.value;
    let description = e.target.description.value;
    let category = e.target.category.value;
    let img1 = e.target.img1.value;
    let img2 = e.target.img2.value;
    let img3 = e.target.img3.value;
    let img4 = e.target.img4.value;
    let img5 = e.target.img5.value;
    // let nalichie = e.target.nalichie;
    let carcas = e.target.carcas.value;
    let mech = e.target.mech.value;
    let inside = e.target.inside.value;
    let gab = e.target.gab.value;
    let sleep = e.target.sleep.value;
    if (
      title === '' ||
      price === 0 ||
      order === 0 ||
      discount === 0 ||
      orderdiscount === 0 ||
      description === '' ||
      category === '' ||
      img1 === '' ||
      img2 === '' ||
      img3 === '' ||
      img4 === '' ||
      img5 ==='' ||
      // nalichie === ''||
      carcas ===  '' ||
      mech === '' ||
      inside === '' ||
      gab === '' ||
      sleep === '' 

    ) {
      errorAddGoods();
    } else {
      successAddGoods();
      let images = [];
      images.push(img1, img2, img3, img4, img5);
      await addGoods({
        title: title,
        price: price,
        oldprice: oldprice,
        discount: discount,
        order: order,
        orderdiscount: orderdiscount,
        description: description,
        category: category,
        images: images,
        // nalichie: nalichie,
        carcas: carcas,
        mech: mech,
        inside: inside,
        gab: gab,
        sleep: sleep
      }).unwrap();
      e.target.title.value = '';
      e.target.price.value = '';
      e.target.oldprice.value = '';
      e.target.order.value = '';
      e.target.orderdiscount.value = '';
      e.target.description.value = '';
      e.target.category.value = '';
      // e.target.nalichie='';
      e.target.carcas.value='';
      e.target.mech.value='';
      e.target.inside.value='';
      e.target.gab.value='';
      e.target.sleep.value ='';
      e.target.img1.value = '';
      e.target.img2.value = '';
      e.target.img3.value = '';
      e.target.img4.value = '';
      e.target.img5.value = '';
    }
  };

  if (!isLoading) return <Spinner />;

  return (
    <div className='flex flex-col items-center'>
      <div className='mb-6 text-[20px] dark:text-white'>Форма для добавления товара</div>
      <form
        onSubmit={handleAddGoods}
        className='flex flex-col max-w-[500px] border-2 p-6'
      >
        <InputText
          labelName={'Название товара'}
          type={'text'}
          name={'title'}
          placeholder={'Введите название товара'}
        />
         <InputText
          labelName={'Старая цена'}
          type={'number'}
          name={'oldprice'}
          placeholder={'Введите стоимость числом в рублях'}
        />
          <InputText
          labelName={'Стоимость товара со скидкой'}
          type={'number'}
          name={'price'}
          placeholder={'Введите стоимость числом в рублях'}
        />
        <InputText
          labelName={'Цена на заказ'}
          type={'number'}
          name={'order'}
          placeholder={'Введите цену на заказ'}
        />
        <InputText
          labelName={'Скидка из наличия'}
          type={'number'}
          name={'discount'}
          placeholder={'Введите скидку'}
        />
        <InputText
          labelName={'Скидка на заказ'}
          type={'number'}
          name={'orderdiscount'}
          placeholder={'Введите скидку на заказ'}
        />
        <InputText
          labelName={'Описание товара'}
          type={'text'}
          name={'description'}
          placeholder={'Введите описание товара'}
        />
        <InputText
          labelName={'Каркас'}
          type={'text'}
          name={'carcas'}
          placeholder={'Каркас'}
        />
        <InputText
          labelName={'Механизм'}
          type={'text'}
          name={'mech'}
          placeholder={'Механизм'}
        />
        <InputText
          labelName={'Наполнение'}
          type={'text'}
          name={'inside'}
          placeholder={'Опишите внутреннее наполнение'}
        />
          <InputText
          labelName={'Внешние габариты'}
          type={'text'}
          name={'gab'}
          placeholder={'Опишите внешние габариты'}
        />
          <InputText
          labelName={'Спальное место'}
          type={'text'}
          name={'sleep'}
          placeholder={'спальное место'}
        />
         {/* <InputText
          labelName={'Наличие'}
          type={'text'}
          name={'nalichie'}
          placeholder={'В наличии, Под заказ'}
        /> */}
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
        <label className='mb-2 '>
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
        </label>
        
        <AddButton text={'Добавить товар'} />
      </form>
    </div>
  );
};

export default FormAddGoods;
