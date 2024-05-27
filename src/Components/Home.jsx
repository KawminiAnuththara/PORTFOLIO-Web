import React from 'react'
import { AppText } from '../constant/index';
import { homeImage } from '../assests';

function Home() {
  return (
    <div className='mt-7  px-4  md:px-20 items-center flex flex-col md:flex-row'>

      <div>
        <h1 className='text-[40px] font-bold'>{AppText.hello}</h1>
        <h1 className='text-[40px] font-bold'>{AppText.Iam}<span className='text-blue-500'>{AppText.KawminiAnuththara}</span></h1>
        <h1 className='text-gray-400 mt-3'>{AppText.aboutMeDescripion}</h1>
        <button className='bg-blue-500 mt-3 p-2 px-3 transition-all ease-in-out hover:scale-110 text-white rounded-md'>Resume</button>
      </div>
        
        <img src={homeImage} alt='home image' className='w-[300px] md:w-[400px]'/>
    </div>
  )
}

export default Home
