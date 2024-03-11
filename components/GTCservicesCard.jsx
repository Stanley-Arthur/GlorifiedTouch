import React from 'react'
import Image from 'next/image'
import images from '@/constants/images'


const GTCservicesCard = () => {
  return (
    <div className='flex mt-10 flex-col items-center justify-center'>
        <div className='flex w-full gap-x-5 gap-y-8 items-center justify-center  flex-col md:flex-row  min-h-[800px] mt-5'>
            <div className='md:w-[50%] gap-y-10 w-full flex justify-center  items-center flex-col'>
                <h1 className='font-bold text-4xl'>
                Glorified Touch Care: Your Trusted Partner for Respite Home Care.
                </h1>
                <p className='text-gray-500  text-2xl'>
                It&apos;s only natural to harbor concerns about the well-being of your aging loved ones as they gracefully enter their golden years. At Glorified Touch Care, we understand the challenges families face in providing round-the-clock care, ensuring proper nutrition, medication management, safe bathing and dressing, and attending crucial appointments and social events.
                </p>
                <div className='flex flex-col  w-full'>
                    <h1 className='text-2xl font-bold'>Why Choose Glorified Touch Care for Respite Home Care?</h1>
                    <p className='text-gray-500  text-xl'>Our team at Glorified Touch Care, based in Des Moines, IA, stands as a reliable beacon of support for seniors and their families. Our highly trained, dependable, and compassionate respite caregivers offer assistance on an as-needed basis. This allows seniors to receive help precisely when they need it, empowering families to take moments to relax or attend to other responsibilities.</p>
                </div>
                <div className='flex flex-col  w-full'>
                    <h1 className='text-2xl font-bold'>Available Around the Clock</h1>
                    <p className='text-gray-500  text-xl'>Whether it&apos;s the early hours of the morning, the late night, or any time in between, Glorified Touch Care is here to assist. Our goal is to help your elderly loved ones maintain a healthy and joyful life while comfortably aging in place.</p>
                </div>
                
            </div>
            <div className='md:w-[40%] flex justify-center  items-center  w-full'>
            <Image alt='' className='w-[500px] h-[500px] object-cover' src={images.respite} width={500} height={500}  />
            </div>
        </div>

        <div className='flex w-full gap-x-5 gap-y-8 items-center justify-center  flex-col md:flex-row  min-h-[800px] mt-5'>
            <div className='md:w-[40%] flex justify-center items-center w-full'>
            <Image alt='' className='w-[500px] h-[500px] object-cover' src={images.respite1} width={500} height={500}  />
            </div>
            <div className='md:w-[50%] gap-y-10 w-full flex justify-center  items-center flex-col'>
                <h1 className='font-bold text-4xl'>
                Your Trusted Partner for 24/7 Hospital Care
                </h1>
                <p className='text-gray-500  text-2xl'>
                Facing illness or recovering from an injury can be a daunting experience, especially within the hospital setting. While doctors and nurses provide essential care, the presence of unfamiliar faces and the challenges of managing multiple patients can be overwhelming. Glorified Touch Care understands the importance of around-the-clock, personalized support to expedite recovery and minimize the likelihood of re-hospitalization post-discharge. 
                </p>
                <div className='flex flex-col  w-full '>
                    <h1 className='text-2xl font-bold'>Why Choose Glorified Touch Care for Hospital Care?</h1>
                    <p className='text-gray-500  text-xl'>Recognized as the preferred provider of hospital care  families and medical professionals alike, Glorified Touch Care sets the standard for reliable and compassionate support. Our dedicated team of professional caregivers brings extensive experience in senior care, ensuring that your aging loved one receives individualized attention 24 hours a day.</p>
                </div>
                <div className='flex flex-col  w-full'>
                    <h1 className='text-2xl font-bold'>Compassionate Support, Anytime You Need</h1>
                    <p className='text-gray-500  text-xl'>Our caregivers at Glorified Touch Care are not just service providers; they are compassionate companions committed to the well-being of your loved ones. With our 24/7 availability, we aim to meet the unique needs of your aging family members, providing the comfort and care they deserve during their time of recovery.</p>
                </div>
            </div>
        </div>

        <div className='flex w-full gap-x-5 gap-y-8 items-center justify-center  flex-col md:flex-row  min-h-[800px] mt-5'>
            <div className='md:w-[50%] gap-y-10 w-full flex justify-center  items-center flex-col'>
                <h1 className='font-bold text-4xl'>
                Compassionate Dementia Care
                </h1>
                <p className='text-gray-500  text-2xl'>
                Facing a dementia diagnosis introduces uncertainty, challenging both seniors and their families. Seniors may question their ability to age in place without burdening their loved ones, while family members strive to find the best way to support their goals keeping them safe, healthy, and comfortable. In such moments, many families opt for the preferred choice of in-home dementia care.
                </p>
                <div className='flex flex-col  w-full'>
                    <h1 className='text-2xl font-bold'>Respected Dementia Care Services</h1>
                    <p className='text-gray-500  text-xl'>Glorified Touch Care stands as a respected name in the home care industry, providing dependable professional caregiver services for seniors living with dementia. Our dedicated team collaborates with seniors and their family members to craft personalized dementia care plans tailored to each client&apos;s exact needs. Through one-on-one care within a familiar environment, we aim to preserve dignity, independence, and a higher quality of life.</p>
                </div>
                
            </div>
            <div className='md:w-[40%] flex justify-center  items-center  w-full'>
            <Image alt='' className='w-[500px] h-[500px] object-cover' src={images.respite2} width={500} height={500}  />
            </div>
        </div>
    </div>
  )
}

export default GTCservicesCard


