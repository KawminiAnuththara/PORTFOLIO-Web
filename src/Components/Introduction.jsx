import React from 'react'
import { AppText, aboutSection } from '../constant'
import { laptop, wave } from '../assests'

function Introduction() {
  return (
    <div className='mt-36'>
      <img src={wave} className='w-screen absolute'/>
      <img src={laptop} className='absolute mt-[-130px] md:mt-[-180px] w-[220px] md:w-[300px]'/>
      <div className='h-[300px] bg-blue-500 items-center w-full mt-5'>
         <h2 className='text-[50px] font-bold text-center text-white pt-10'>{AppText.About}<span className='text-black'>{AppText.Me}</span></h2> 
         <h2 className='text-white mt-10 text-center px-10  md:px-64 lg:px-80'>{AppText.aboutMeDescripion}</h2>
      </div>
      <div className='md:flex-row justify-around flex flex-col w-full items-center px-32 mt-[-40px]'>
        {
          aboutSection.map((item,index)=>(
            <div className=' group hover:bg-blue-500 mb-4 p-7 rounded-2xl'>
              <img src={item.image} className='w-[230px] h-[190px] object-cover rounded-lg'/>
              <div className='w-[230px] pb-[20px]'>
              <h2 className='font-bold text-center group-hover:text-white'>{item.title}</h2>
              <h2 className='text-[12px] text-center text-gray-500 group-hover:text-gray-50 '>{item.desc}</h2>
              </div>
              
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Introduction
