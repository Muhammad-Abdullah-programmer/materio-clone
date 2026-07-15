import React from 'react'
import  '../assets/Style.css'

import {AiFillPieChart} from '../assets/Icons'


const HomeCards = () => {
  return (
    <div className='grid grid-cols-3 w-[80%] mx-auto gap-4'>
      
      {/* Card 1  */}
<div className="card-1 bg-white flex items-center gap-4 relative py-4 min-h-[29vh] rounded-2xl shadow-2xl ">

   <div className="text flex flex-col justify-evenly pl-4 h-[100%]">
     <p className=''>Ratings</p>
     <p className='font-semibold text-2xl'>13k <span className='text-xl text-[var(--green-colour)] font-normal'>+15.6%</span></p>
     <span className='text-[#8C57FF] bg-blue-400/40 rounded-3xl text-center w-[100%] px-2 py-1 text-sm font-semibold'>Year of 2026</span>

   </div>

   <div className="image ">
    <img src="/1.png" alt="" className='absolute -top-8 right-2 w-30 object-cover'/>
   </div>

</div>

{/* Card 2  */}
<div className="card-1 bg-white flex items-center gap-4 relative py-4 min-h-[29vh] rounded-2xl shadow-2xl ">

   <div className="text flex flex-col justify-evenly pl-4 h-[100%]">
     <p className=''>Sessions</p>
     <p className='font-semibold text-2xl'>24.5k <span className='text-xl text-[#FF4C51] font-normal'>-20%</span></p>
     <span className='text-gray-500 bg-gray-300 rounded-3xl text-center w-[100%] px-2 py-1 text-sm font-semibold'>Last Week</span>

   </div>

   <div className="image ">
    <img src="/2.png" alt="" className='absolute -top-8 right-2  h-48 object-cover'/>
   </div>

</div>

{/* Card 3  */}
<div className="card-1 bg-white flex flex-col gap-4 relative py-4 px-4 min-h-[29vh] rounded-2xl shadow-2xl ">

 <div className="heading">
    <p className='text-lg font-semibold'>Transections</p>
    <p className='text-sm'>Total 48.5% Growth 😎 this month</p>
 </div>

 {/* Icons  */}
 <div className="icons flex">
<div className='bg-[#8C57FF] text-white p-2 rounded'>
    <AiFillPieChart/>
   
</div>
 <div className="text flex flex-col">
        <span>Sales</span>
        <span>245K</span>
    </div>

 </div>

 

</div>

    </div>
  )
}

export default HomeCards
