'use client';
import React from 'react';
import { reviews } from '@/components/ReviewsData';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image'

const Testimonials = () => {
  return (
    <section className="testimonial-container">
      <div className=" flex justify-center text-3xl">
        <p>What members are saying.</p>
      </div>

      <div className="slider-container">
        {/* <blockquote>
          <Image className="top-quote quote" src='/images/article-2.png' alt="quote"  width={80} height={80}/>
          <Image className="bottom-quote quote" src='/images/article-1.png' alt="quote"  width={800} height={80}/>
        </blockquote> */}

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
            type:"fade",
            heightRatio:0,
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id} className="flex items-center">
              <div className="flex justify-center items-center w-1/2  rounded-full overflow-hidden transition-opacity duration-100 ease-in-out">
                <Image  src={review.image} width={200} height={200} alt="" className="rounded-full h-16 w-16 object-cover" />
              </div>
              <div >
                <div className="w-1/2 ml-8">
                  <p className=" text-2xl font-semibold mb-2">{review.name}</p>
                  <p className=" text-gray-600">{review.text}</p>
                  <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonials;
