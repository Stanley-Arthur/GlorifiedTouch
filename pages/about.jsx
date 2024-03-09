import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Post from '@/components/POST'
import images from '@/constants/images'

const About= () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <div className="flex flex-col   pt-20 h-full w-full relative">
        <Image alt='' src={images.stan} className=' object-cover  w-full h-screen  ' width={1000} height={1000} />
        <span className=' bg-gradient-to-r from-purple-500/50 to-pink-500/50 h-screen  w-full absolute'/>
       
        <div className='absolute space-y-8 top-[40%] left-[25%] '>
          <div className='flex flex-col space-y-2 justify-center items-center'>
            <h2 className='text-white text-4xl font-bold  font-sans '>Expertly Trained, Professional Home Care Providers</h2>
            <p className='text-white text-xl font-semibold '>We firmly believe that caregivers form the cornerstone of a positive home care experience.</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Link href="/contact" legacyBehavior >
              <a href="/contact" target="_blank" rel="noopener noreferrer">
              <button className=' text-md  bg-gray-500 shadow-md w-[200px] text-white py-5 rounded font-semibold'>Contact US</button>
              </a>
            </Link>
          </div>
          
        
        </div>
      
      </div>
      <Post/>

      <div className='gap-y-5'>

        <div className='flex flex-1 items-center  justify-center mx-10 flex-col md:flex-row  h-screen mt-5'>
            <div className='md:w-[50%]  w-full flex  mx-3 items-center flex-col'>
          
              <h1 className='text-3xl font-bold  '>Our Holistic Care Approach</h1>
              <p className='text-gray-500 mt-5 mb-5'>Understanding the factors that contribute to a longer and 
              healthier life is a complex task, and there isn&apos;t a singular explanation for why some individuals 
              experience more active years than others. However, one extraordinary place stands out as having a
               higher concentration of individuals living longer and healthier lives than anywhere else: Okinawa, Japan. 
               Scientists have recently delved into studying this community of seniors in search of insights that could 
               guide us towards a longer and more productive life.
               Drawing inspiration from the findings of these centenarian studies, Home Care Assistance 
               has pioneered a revolutionary and proprietary approach to senior care. Our methodology is rooted
                in the wisdom gathered from Okinawa, aiming to provide not just assistance but a comprehensive strategy for promoting longevity and well-being among seniors.</p>
              <p className='text-gray-500'>The foundation of the Balanced Care Method is derived from extensive studies conducted on the remarkably long-lived elders in Okinawa, Japan. In this region, life spans exceeding 100 years are not uncommon, and what&apos;s even more noteworthy is the exceptional health and independence enjoyed by individuals well into their 70s, 80s, and beyond. The studied elders in Okinawa commonly exhibit excellent physical health, mental acuity, and inner tranquility.
               The Balanced Care Method aims to distill the lifestyle factors that contribute to the creation of such long-lived and healthy individuals. At its core, the philosophy of this method can be encapsulated in two key words, moderation and variety. By emphasizing these principles, we strive to enhance the well-being, vitality, and independence of our seniors.</p>
            
            </div>
            <div className='md:w-[50%] w-full'>
              <Image alt='' className='w-[500px] h-80 object-cover' src={images.stan2} width={500} height={500}  />
            </div>
          </div>

          <div className='flex flex-1 items-center justify-center mx-10 flex-col md:flex-row  h-screen mt-5'>
            <div className='md:w-[50%] w-full'>
              <Image alt='' className='w-[500px] h-80 object-cover' src={images.stanley} width={500} height={500}  />
            </div>
            <div className='md:w-[50%]  w-full flex  mx-3 items-center flex-col'>
          
              <h1 className='text-3xl font-bold  '>Exceptional Caregivers</h1>
              <p className='text-gray-500 mt-5 mb-5'>At Glorified Touch Care, we hold the firm belief that caregivers play a pivotal role in shaping a positive home care experience. The caregiver you select becomes an integral part of your elderly loved one&apos;s daily life and a valuable resource for your family. Our meticulous hiring process is designed to identify the most dependable, compassionate, and seasoned in-home caregivers, ensuring that your loved ones receive the highest standard of care and support.</p>
              <p className='text-gray-500'>With Glorified Touch Care by your side, your family can trust in the quality of care your loved one receives. We prioritize your peace of mind by being bonded and insured, providing workers&apos; compensation for all employees, and handling their salaries and tax forms. Our qualified caregivers receive industry-leading 
              wages and top-notch benefits. We pride ourselves on not imposing long-term contracts, 
              and all our senior care services are backed by a 100% satisfaction guarantee.
               Your loved one&apos;s well-being is our priority, and we strive to exceed expectations in every aspect of our service.
               </p>
               <p>To connect with a friendly and knowledgeable Care Manager promptly, please dial <span className='text-blue-300 underline'>(678) 643-6636</span> . Our dedicated staff members are available 24/7, ready to assist you with any inquiries and provide immediate support. Your well-being is our priority, and we are here to ensure you receive the assistance you need when you need it.</p>
            
            </div>
          </div>

          <div className='flex flex-1 items-center justify-center mx-10 flex-col md:flex-row  h-screen mt-5'>
            <div className='md:w-[50%]  w-full flex  mx-3 items-center flex-col'>
          
              <h1 className='text-3xl font-bold  '>Rigorous Training for Top-Quality Caregivers</h1>
              <p className='text-gray-500 mt-5 mb-5'>At Glorified Touch Care, the safety and security of our clients are paramount. To ensure this, every caregiver undergoes a meticulous background check and screening process. Our selection process is highly selective, with only 1 in every 25 applicants successfully making it through.

In addition to our rigorous screening, our at-home caregivers undergo comprehensive formal training. We further mandate ongoing training through our exclusive Home Care Training. This platform provides our caregivers with regular access to specialized training, catering to diverse care needs and maintaining the gold standard of care for our clients.</p>
              <p className='text-gray-500'>At Glorified Touch Care, our devoted and empathetic caregivers undergo careful selection and precise matching to provide the highest level of senior care with utmost dignity and respect. Our objective is to cultivate long-term relationships, ensuring consistency and quality of care for our elderly clients.</p>
            
            </div>
            <div className='md:w-[50%] w-full'>
              <Image alt='' className='w-[500px] h-80 object-cover' src={images.stan3} width={500} height={500}  />
            </div>
          </div>

          <div className='flex flex-1 items-center justify-center mx-10 flex-col md:flex-row  h-screen mt-5'>
            <div className='md:w-[50%] w-full'>
              <Image alt='' className='w-[500px] h-80 object-cover' src={images.stan4} width={500} height={500}  />
            </div>
            <div className='md:w-[50%]  w-full flex  mx-3 items-center flex-col'>
          
              <h1 className='text-3xl font-bold  '>Premier Live-In and 24-Hour Care Services for Seniors</h1>
              <p className='text-gray-500 mt-5 mb-5'>While the natural aging process brings confidence and wisdom, some seniors also experience changes in health and mobility that make it difficult or dangerous to live at home independently. Fortunately, changes in a senior’s health no longer require relocation to an assisted living facility or nursing home. Live-in and 24-hour care from Glorified Touch Care provides seniors with highly trained and compassionate caregivers who deliver around-the-clock care in the comfort of home. With the help of our live-in caregivers, your elderly loved one can remain safe and comfortable while aging in place.  </p>
              <p className='text-gray-500'>Numerous seniors benefit from our live-in care services, enhancing independence and quality of life at home, especially when facing age-related conditions like dementia, Alzheimer&apos;s, or Parkinson&apos;s. Our 24-hour care services are versatile, extending support wherever and whenever your aging loved one requires assistance. Whether it&apos;s bedside at the hospital, evenings at home, or during travel on vacation, our 24-hour caregivers are just a phone call away, ensuring continuous care and support.</p>
            
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default About
