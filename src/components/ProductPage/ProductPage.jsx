// import React, { useState } from 'react'

// const ProductPage = () => {

//     const {id} = useState({
//         img1,
//         img2,
//         img3
//     })

//     const [activeImg, setActiveImage] = useState(images.img1)

//     const [amount, setAmount] = useState(1);


//     return (
//         <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
//             <div className='flex flex-col gap-6 lg:w-2/4'>
//                 <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
//                 <div className='flex flex-row justify-between h-24'>
//                     <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
//                     <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
//                     <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
//                 </div>
//             </div>
//             {/* ABOUT */}
      
//         </div>
//     )
// }

// export default ProductPage