'use client';

import { headers } from '@/next.config'
import React, { useEffect, useState } from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineMobile,AiOutlineClockCircle} from 'react-icons/ai'







const Banner = () => {
 
  return (
    <div className='hidden md:block flex justify-between font-Roboto  item-center flex-grow gap-2 max-w-full   px-20 mx-auto h-14'  >
        <div className=" sticky bg-gray-900 rounded-sm shadow-lg top-0 w-[85%] md:w-[90%] ">
          
            <div className='flex '>
                <div className='hover:scale-105 ease-in duration-300 bg-white h-10 rounded-md flex px-2 my-5 gap-2 ml-10 mr-14 justify-center items-center'>
                    <div>
                    <AiOutlineMail size={25}/>
                    </div>  
                    <div className='flex-col hover:cursor-pointer text-black text-lg'>
                        {/* <a>
                          <Link target="_blank" href="https://twitter.com/" >twitter</Link>
                        </a> */}
                        
                        <p className=' '>Email: glorifiedtouchcare@gmail.com </p>
                        {/* <a href='https://smartitbs.com/'>Website: www.smartitbs.com </a> */}
                    </div>
                </div>
                <div className=' hover:scale-105 ease-in duration-300 bg-red-500 h-10 rounded-md md:flex px-2 my-5 gap-2 ml-10 mr-14 justify-center items-center'>
                    <div className=''>
                    <AiOutlineClockCircle size={25} className='pr-2 text-yellow-300'/>
                    </div>  
                    <div className='flex-col hover:cursor-pointer text-white text-lg'>
                        <p className=''>Mon - Fri</p>
                        {/* <a href='https://smartitbs.com/'>Website: www.smartitbs.com </a> */}
                    </div>
                </div>
                <div className=' hover:scale-105 ease-in duration-300 bg-white h-10 rounded-md my-5 px-2 hover:cursor-pointer md:flex gap-2 ml-8 justify-center items-center'>
                    <div className=''>
                    <AiOutlineMobile size={25}/>
                    </div>
                    <div className='flex-col text-black text-lg'>
                        <p>Office:  (678) 643-6636</p>
                    </div>
                </div>
               
            </div>
            

        </div>
    </div>
  )
}

export default Banner
