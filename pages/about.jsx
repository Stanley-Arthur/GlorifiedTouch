import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import Post from '@/components/POST'
import images from '@/constants/images'

// Dynamically import Testimonials with no SSR (client-only)
// const Testimonials = dynamic(() => import('./testimonials'), { ssr: false })

const About = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col pt-20 h-full w-full relative">
        <Image
          alt=""
          src={images.stan}
          className="object-cover w-full h-screen"
          width={1000}
          height={1000}
        />
        <span className="bg-gradient-to-r from-purple-500/50 to-pink-500/50 h-screen w-full absolute" />

        <div className="absolute space-y-8 top-[40%] left-[25%]">
          <div className="flex flex-col space-y-2 justify-center items-center">
            <h2 className="text-white text-4xl font-bold font-sans">
              Expertly Trained, Professional Home Care Providers
            </h2>
            <p className="text-white text-xl font-semibold">
              We firmly believe that caregivers form the cornerstone of a positive home care experience.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link href="/contact" legacyBehavior>
              <a href="/contact" target="_blank" rel="noopener noreferrer">
                <button className="text-md bg-gray-500 shadow-md w-[200px] text-white py-5 rounded font-semibold">
                  Contact US
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Post />

      <div className="md:grid md:grid-cols-2 md:gap-y-5">
        {/* ... all your other sections remain unchanged ... */}
        <div className="md:col-span-1 md:mt-10 md:mx-10">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">Our Holistic Care Approach</h1>
            <p className="text-gray-500 mt-5 mb-5">
              Understanding the factors that contribute to a longer and healthier life is a complex task, and
              there isn&apos;t a singular explanation for why some individuals experience more active years than
              others. However, one extraordinary place stands out as having a higher concentration of individuals
              living longer and healthier lives than anywhere else: Okinawa, Japan. Scientists have recently
              delved into studying this community of seniors in search of insights that could guide us towards a
              longer and more productive life. Drawing inspiration from the findings of these centenarian studies,
              Home Care Assistance has pioneered a revolutionary and proprietary approach to senior care. Our
              methodology is rooted in the wisdom gathered from Okinawa, aiming to provide not just assistance but
              a comprehensive strategy for promoting longevity and well-being among seniors.
            </p>
            <p className="text-gray-500">
              The foundation of the Balanced Care Method™ is derived from extensive studies conducted on the
              remarkably long-lived elders in Okinawa, Japan. In this region, life spans exceeding 100 years are not
              uncommon, and what&apos;s even more noteworthy is the exceptional health and independence enjoyed by
              individuals well into their 70s, 80s, and beyond. The studied elders in Okinawa commonly exhibit
              excellent physical health, mental acuity, and inner tranquility. The Balanced Care Method™ aims to
              distill the lifestyle factors that contribute to the creation of such long-lived and healthy
              individuals. At its core, the philosophy of this method can be encapsulated in two key words:
              moderation and variety. By emphasizing these principles, we strive to enhance the well-being,
              vitality, and independence of our seniors.
            </p>
          </div>
          <div className="md:col-span-1">
            <Image
              alt=""
              className="w-[500px] h-80 object-cover"
              src={images.stan2}
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* ... include all other sections exactly as before ... */}

      </div>

      {/* Client-only Testimonials */}
      {/* <Testimonials /> */}
    </div>
  )
}

export default About
