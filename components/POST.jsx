import Image from 'next/image'
import React from 'react'

const Post = () => {
  return (
    <div className='md:grid md:grid-row-2 md:gap-y-5'>

      <div className='md:col-span-1'>
        <div className='flex justify-center font-[Roboto] bg-gray-50 items-center flex-col'>
          <div className='md:w-[700px] xl:w-[900px] mx-auto flex flex-col items-center justify-center'>
            <h1 className='text-4xl'>Our Story</h1>
            <p className='text-2xl hidden md:block'>
            At Glorified Touch Care, we started with a simple idea: to provide reliable and compassionate personal care services to those in need. Over the years, we have grown into a trusted provider of quality care, serving the needs of our clients with dedication and professionalism 
            </p>
          </div>
        </div>
      </div>

      <div className='md:col-span-1'>
        <div className='flex justify-around md:flex-row bg-white rounded space-y-10 md:space-y-2 flex-col py-16 mt-10 md:min-w-[700px] mx-auto md:shadow-2xl items-center'>
          <div className='space-y-2 px-10'>
            <div className='flex flex-row items-center gap-x-2 pb-2'> <h1>Mission Statement</h1></div>
            <div className='flex text-gray-400 flex-row items-center gap-x-2'> <p>Providing seniors with compassionate and dedicated care, ensuring their golden years are marked by comfort, joy, and unwavering dignity.</p></div>
          </div>
          <div className='space-y-2 px-10'>
            <div className='flex flex-row items-center gap-x-2 p-2'> <h1>Vision Statement</h1></div>
            <div className='flex text-gray-400 flex-row items-center gap-x-2'> <p> We aspire to be a beacon of excellence, redefining aging by fostering joy, comfort, and meaningful connections in the lives of those we serve </p></div>
          </div>
        </div>
      </div>
</div>

    // <div className=' flex justify-center font-[Roboto] bg-gray-50 items-center flex-col'>
    //     <div className='md:w-[700px] xl:w-[900px] mx-auto flex flex-col items-center justify-center'>
    //     <h1 className='text-4xl '>Our Story</h1>
    //      <p className='text-2xl hidden md:block '>At Glorified Touch Care, we started with a simple idea: to provide reliable and compassionate personal care services to those in need. Over the years, we have grown into a trusted provider of quality care, serving the needs of our clients with dedication and professionalism </p>
    //     </div>
    //     <div className='flex justify-around md:flex-row bg-white rounded space-y-10 md:space-y-2 flex-col  py-16 mt-10 md:min-w-[700px] mx-auto md:shadow-2xl items-center'>
    //         <div className='space-y-2 px-10'>
    //             <div className='flex flex-row items-center gap-x-2 pb-2'> <h1>Mission Statement</h1></div>
    //             <div className='flex text-gray-400  flex-row items-center gap-x-2'>  <p>Providing seniors with compassionate and dedicated care, ensuring their golden years are marked by comfort, joy, and unwavering dignity. </p></div>
    //         </div>
    //         <div className='space-y-2 px-10'>
    //             <div className='flex flex-row items-center gap-x-2 p-2'> <h1>Vision Statement</h1></div>
    //             <div className='flex text-gray-400  flex-row items-center gap-x-2'>  <p>We aspire to be a beacon of excellence, redefining aging by fostering joy, comfort, and meaningful connections in the lives of those we serve </p></div>
                
    //         </div>
    //     </div>
    // </div>
  )
}

export default Post