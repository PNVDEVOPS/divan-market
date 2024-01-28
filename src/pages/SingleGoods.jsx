import { useNavigate, useParams, useLocation } from 'react-router';
import Spinner from '../ui/Spinner/Spinner';
import { useGetSingleGoodsQuery } from '../redux/goodsApi';
import GoBackBtn from '../ui/Button/GoBackBtn/GoBackBtn';
import CarouselImages from '../components/SingleGoods/CarouselImages/CarouselImages';
import MainInformation from '../components/SingleGoods/MainInformation/MainInformation';
import ProductPage from '../components/ProductPage/ProductPage';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import OneGood from '../components/Goods/OneGood/OneGood';
import BasicExample from '../components/Card/Card'

const SingleGoods = () => {
  let dataLocation = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data = [], isLoading } = useGetSingleGoodsQuery(id);
  const { title, price, images, description, carcas, mech, nalichie, inside, sleep, gab, order, oldprice, discount, orderdiscount, schema, colorone, colortwo, colortree, colortextone, colortexttwo,colortexttree } = data;
  const [activeImg, setActiveImage] = useState(images);

  if (isLoading) return <Spinner />;

  const goGoods = () => navigate('/goods');
  const goBack = () => navigate(-1);

  return (
    
    <div className='my-8 flex-wrap justify-center inline-flex xl:w-[100%] lg:[90%] font-body'>
      <div className= ' justify-center flex absolute left-20'>
      {dataLocation.state != null ? (
        <GoBackBtn onClick={goBack} />
      ) : (
        <GoBackBtn onClick={goGoods} />
      )}
      </div>
      <div className='my-5 flex flex-col justify-between h-fit sm:w-fit lg:flex-col lg:w-[100vw] md:w-[100vw] xl:w-[62%] gap-6 items-top py-6'>
           <div className='flex xl:flex-row flex-col gap-4'>
               <img src={activeImg} alt="" className='xl:w-[100%] lg:w-[100%] xl:min-w-[400px] xl:h-[600px] object-contain rounded-xl border-solid border-[1px] border-neutral-200'/>
               <div className='justify-between xl:flex-col flex h-36 xl:w-[30%]'>
                   <img src={images[0]} alt="" className='xl:min-w-[100px] lg:min-w-[300px]  md:min-w-[200px] sm:min-w-[100px] xl:h-[200px] w-76 h-36 rounded-md aspect-square hover:border-neutral-400 duration-200 object-contain cursor-pointer border-solid border-[1px] border-neutral-200' onClick={() => setActiveImage(images[0])}/>
                  <img src={images[1]} alt="" className='xl:min-w-[100px] lg:min-w-[300px]  md:min-w-[200px] sm:min-w-[100px] xl:h-[200px] w-76 h-36 rounded-md cursor-pointer hover:border-neutral-400 duration-200 aspect-square object-contain border-solid border-[1px] border-neutral-200' onClick={() => setActiveImage(images[1])}/>
                   <img src={images[2]} alt="" className='xl:min-w-[100px] lg:min-w-[300px]  md:min-w-[200px] sm:min-w-[100px] xl:h-[200px] w-76 h-36 rounded-md cursor-pointer hover:border-neutral-400 duration-200 aspect-square object-contain border-solid border-[1px] border-neutral-200' onClick={() => setActiveImage(images[2])}/>
              </div>   
          </div>
          <div className='container mx-auto flex justify-between h-auto m-0 xl:w-[100%] lg:w-[100%] sm:flex-col xl:flex-row lg:flex-row flex-col gap-4 items-top'>
              <img src={images[3]} alt="" className='flex object-contain md:w-auto  lg:w-[48%] xl:w-[48%] aspect-video rounded-xl border-solid border-[1px] border-neutral-200'/>
              <img src={images[4]} alt="" className='flex object-cover md:w-auto  lg:w-[48%] xl:w-[48%] aspect-video rounded-xl border-solid border-[1px] border-neutral-200'/>
          </div> 
        </div>
      <div className='xl:w-[35%] sm:w-full md:w-full'>
      <MainInformation title={title}
      nalichie={nalichie}
      description={description}
      oldprice={oldprice}
      price={price}
      discount={discount}
      order={order} 
      orderdiscount={orderdiscount}
      id={id} 
      data={data}
      schema={schema}
      color1={colorone}
      color2={colortwo}
      color3={colortree}
      colortext1={colortextone}
      colortext2={colortexttwo}
      colortext3={colortexttree}
      />    
      
       <div className='text-[20px] flex-col my-3 px-8 justify-right max-w-[825px]'>
       <h2 className=' text-[20px] my-2 font-medium'>Характеристики:</h2>
              <table>
                <thead>
                  <tr className='bg-neutral-200'>
                    <td  className='text-neutral-600'>Каркас:</td>
                    <td>{carcas}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='text-neutral-600'>Механизм:</td>
                    <td>{mech}</td>
                  </tr>
                  <tr  className='bg-neutral-200'>
                    <td className='text-neutral-600'>Наполнение:</td>
                    <td>{inside}</td>
                  </tr>
                  <tr>
                    <td className='text-neutral-600'>Размеры (ДхВхШ,см):</td>
                    <td>{gab}см</td>
                  </tr>
                  <tr  className='bg-neutral-200'>
                    <td className='text-neutral-600'>Спальное место (ДхВ,см):</td>
                    <td>{sleep}см</td>
                  </tr>
                </tbody>
              </table>

              </div>
              
      </div>
      {/* <div className='gap-4 flex my-4'>
      <BasicExample/>   
      <BasicExample/>   

      <BasicExample/>   

      <BasicExample/>   

      <BasicExample/>   
      </div> */}
  </div>
    
  );
  
};

export default SingleGoods;
