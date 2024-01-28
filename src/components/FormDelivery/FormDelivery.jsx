import React from 'react';
import InputText from '../../ui/Input/InputText';
import AddButton from '../../ui/Button/AddButton/AddButton';
import { Link, useNavigate } from 'react-router-dom';
import { errorAddGoods } from '../../utils/list';
import { useAddUserMutation } from '../../redux/goodsApi';
import Spinner from '../../ui/Spinner/Spinner';
import { Checkbox } from 'antd';
import { useState } from 'react';

const FormDelivery = () => {
  const navigate = useNavigate();
  const [addUser, { isLoading }] = useAddUserMutation();
  const [checked, setChecked] = useState(true);
  const [checker, setChecker] = useState(true);


  const onSubmit = async (event) => {
    event.preventDefault();
    let phone = event.target.phone.value;
    let adress = event.target.adress.value;
    let pod = event.target.pod.value;
    let floor = event.target.floor.value;
    let kv = event.target.kv.value;
    let sborka = event.target.sborka.value;
    let com = event.target.com.value;

    if (
      phone == '' ||
      adress == '' ||
      pod == '' ||
      floor == '' ||
      kv == '' ||
      sborka == '' ||
      com == ''
      
    ) {
      errorAddGoods();
    } else {
      await addUser({
        phone: phone,
        adress: adress,
        pod: pod,
        floor: floor,
        kv: kv,
        sborka: sborka,
        com: com
      }).unwrap();
      navigate('/login');
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <div className='items-top flex-col my-10 xl:w-[50vw]'>
        <InputText
          labelName={'Номер телефона'}
          name={'phone'}
          placeholder={'+7'}
        />
        <InputText
          labelName={'Адрес'}
          name={'adress'}
          placeholder={'Улица, дом'}
        />
        <InputText
          labelName={'Подъезд'}
          name={'pod'}
          placeholder={'Подъезд'}
        />
        <InputText
          labelName={'Этаж'}
          name={'floor'}
          placeholder={'Этаж'}
        />
            <InputText
          labelName={'Кв'}
          name={'kv'}
          placeholder={'Кв'}
        />
        <h1 className='text-[18px]'></h1>
        <InputText
          labelName={'Сборка'}
          name={'sborka'}
          placeholder={'Сборка'}
        />
        <InputText
          labelName={'Комментарий'}
          name={'com'}
          placeholder={'Комментарий'}
        />
        <AddButton className='w-[50vw]' type={'submit'} text={'Подтвердить'} />
  </div>
    
  );
};

export default FormDelivery;
