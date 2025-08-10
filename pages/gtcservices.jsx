'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GTCservicesCard from '@/components/GTCservicesCard'
import images from '@/constants/images'
import { GiLovers,GiSelfLove,GiGloves } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { PiGarageFill } from "react-icons/pi";
import { MdOutlineFamilyRestroom } from "react-icons/md";

const gtcservices = () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <div className="flex flex-col  pt-20 h-full w-full relative">
        <Image src={images.wall} className=' object-cover  w-full h-screen  ' alt='' width={1000} height={1000}  />
        <span className=' bg-gradient-to-r from-purple-500/50 to-pink-500/50 h-screen  w-full absolute'/>
       
        <div className='absolute space-y-8 top-[40%] left-[25%] '>
          <div className='flex flex-col space-y-2 justify-center items-center'>
            <h2 className='text-white text-5xl font-bold  font-sans '>BEST SERVICE DELIVERY</h2>
            <p className='text-white text-xl font-semibold '>Best Practices for Home Care Delivery </p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Link href="/contact" legacyBehavior >
              <a href="/contact" target="_blank" rel="noopener noreferrer">
              <button className=' text-md  bg-red-500 shadow-md w-[200px] text-white py-5 rounded font-semibold'>Contact US</button>
              </a>
            </Link>
          </div>
        </div>
      
      </div>

      <div className='w-full flex items-center justify-center '>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center w-[90%] justify-center min-h-screen mt-5'>
          <div className='flex justify-center items-center flex-col'>
            <div>
              <h1 className='text-3xl font-bold '> Ways to Calm a Loved One with Dementia</h1>
              <p className='font-semibold mt-5 mb-5'>BY GLORIFIED TOUCH CARE 8  AM ON DECEMBER 8, 2023</p>
              <p className='text-gray-500'>Dementia changes the way the brain works, and these changes could lead to aggressive behavior. As a family caregiver, you should remember your senior loved one’s actions and negative thoughts aren’t his or her fault and look for ways to manage the combative behavior. Continue reading to learn some things you can do to calm a loved one with dementia.</p>
              <div className='font-bold space-y-3 text-xl'>
                <p className='flex flex-row space-x-2 '>
                  <Image src={images.checkmark}  className='mr-4' alt='' width={30} height={20}/>
                  Warm Baths
                </p>
                <p className='flex flex-row space-x-2 '>
                  <Image src={images.checkmark}  className='mr-4' alt='' width={30} height={20}/>
                  Remove Distractions
                </p>
                <p className='flex flex-row space-x-2  '>
                <Image src={images.checkmark}  className='mr-4' alt='' width={30} height={20}/>
                  Remain Calm
                </p>
                <p className='flex flex-row space-x-2  '>
                <Image src={images.checkmark}  className='mr-4' alt='' width={30} height={20}/>
                Check Your Loved One’s Comfort Levels
                </p>
                <p className='flex flex-row space-x-2 '>
                  
                <Image src={images.checkmark}  className='mr-4' alt='' width={30} height={20}/>
                Breathing Exercises
                </p>
              </div>
            </div>
          
            <p className='text-gray-400'>
            Glorified Touch Care is here to help. To schedule a free in-home consultation, give us a call at (678) 643-6636 today.  
            </p>
          </div>
          <div className='flex justify-center items-center'>
            <Image className='w-[500px] h-96 object-cover' src={images.article1}  width={500} height={500} alt='' />
          </div>
        </div>

      </div>

      <div className='flex  bg-gray-100 pt-10 pb-24 flex-col w-full '>
        <div className='w-full flex justify-center items-center mb-10'><h1 className='text-2xl font-bold '>Our Services</h1></div>

        <div className='flex justify-center mt-10 items-center'>

          <div className='max-w-7xl  grid xl:grid-cols-3 gap-x-10  gap-y-10  md:grid-cols-2 grid-cols-1'>
            <div className='flex  flex-row shadow-lg  justify-center cursor-pointer px-8 hover:scale-105  duration-500 bg-white rounded-lg min-h-[200px] pb-2 w-[350px]  '>
              <div className='flex flex-col my-5'>
                <div className='  text-black rounded-full w-16 h-16 flex items-center justify-center'>  
                <GiSelfLove />
                </div>
              </div>
              <div className='flex flex-col gap-y-10 justify-center items-center w-58'>
                <div className=''>
                  <h1 className='text-xl font-bold'>
                    Hourly Care
                  </h1> 
                </div>
                <p >
                Whether it&apos;s early in the morning, late at night, or any time in between, we&apos;re available to help your elderly loved one remain healthy and happy while aging in place.
                </p>
              </div>
            </div>

            <div className='flex  flex-row shadow-lg justify-center cursor-pointer px-8 hover:scale-105  duration-500 bg-white rounded-lg min-h-[200px] pb-2 w-[350px]  '>
              <div className='flex flex-col my-5'>
                <div className='  text-black rounded-full w-16 h-16 flex items-center justify-center'>  
                  <GiLovers />
                </div>
              </div>
              <div className='flex flex-col gap-y-10 justify-center items-center w-58'>
                <div className=''>
                  <h1 className='text-xl font-bold'>
                    Hospice Support
                  </h1> 
                </div>
                <p >
                Our highly trained caregivers and expert Care Managers work together with the doctors, nurses, patient and their family members to ensure all of the care recipient&apos;s needs are met.
                </p>
              </div>
            </div>

            <div className='flex  flex-row shadow-lg justify-center cursor-pointer px-8 hover:scale-105  duration-500 bg-white rounded-lg min-h-[200px] pb-2 w-[350px]  '>
              <div className='flex flex-col my-5'>
                <div className='  text-black rounded-full w-16 h-16 flex items-center justify-center'>  
                <FaHandsHelping />
                </div>
              </div>
              <div className='flex flex-col gap-y-10 justify-center items-center w-58'>
                <div className=''>
                  <h1 className='text-xl font-bold'>
                   Cognitive Therapeutic Mathod
                  </h1> 
                </div>
                <p >
                The Cognitive Therapeutics Method™ is Glorified Touch Care&apos;s proprietary program designed to promote brain health and quality of life through cognitively stimulating activities in the familiar home environment.
                </p>
              </div>
            </div>

            <div className='flex  flex-row shadow-lg justify-center cursor-pointer px-8 hover:scale-105  duration-500 bg-white rounded-lg min-h-[200px] pb-2 w-[350px]  '>
              <div className='flex flex-col my-5'>
                <div className='  text-black rounded-full w-16 h-16 flex items-center justify-center'>  
                <PiGarageFill />
                </div>
              </div>
              <div className='flex flex-col gap-y-10 justify-center items-center w-58'>
                <div className=''>
                  <h1 className='text-xl font-bold'>
                    Post-Hospital Care
                  </h1> 
                </div>
                <p >
                Our professional and compassionate caregivers have extensive experience in caring for seniors, and are available 24 hours a day to meet the individual needs of your aging loved one.
                </p>
              </div>
            </div>

            <div className='flex  flex-row shadow-lg justify-center cursor-pointer px-8 hover:scale-105  duration-500 bg-white rounded-lg min-h-[200px] pb-2 w-[350px]  '>
              <div className='flex flex-col my-5'>
                <div className='  text-black rounded-full w-16 h-16 flex items-center justify-center'>  
                <GiGloves />
                </div>
              </div>
              <div className='flex flex-col gap-y-10 justify-center items-center w-58'>
                <div className=''>
                  <h1 className='text-xl font-bold'>
                    Care in Assisted Living Facility
                  </h1> 
                </div>
                <p >
                Our expertly trained, experienced caregivers understand the challenges of aging, and they have the expertise to help aging adults manage all aspects of everyday life in assisted living.
                </p>
              </div>
            </div>
            <div className='flex  flex-row shadow-lg justify-center cursor-pointer px-8 hover:scale-105  duration-500 bg-white rounded-lg min-h-[200px] pb-2 w-[350px]  '>
              <div className='flex flex-col my-5'>
                <div className='  text-black rounded-full w-16 h-16 overflow-hidden flex items-center justify-center'>  
                <MdOutlineFamilyRestroom  width={50} height={50}/>
                </div>
              </div>
              <div className='flex flex-col gap-y-10 justify-center items-center w-58'>
                <div className=''>
                  <h1 className='text-xl font-bold'>
                  Dementia Care
                  </h1> 
                </div>
                <p >
                Our team works with seniors and their family members to develop personalized dementia care plans that meet the exact needs of the client. By providing one-on-one care in a familiar environment, we preserve dignity, independence, and a higher quality of life.
                </p>
              </div>
            </div>
          </div>

        </div>
         
  
      </div> 
      
      <GTCservicesCard/>
    </div>





    

  )
}

export default gtcservices
