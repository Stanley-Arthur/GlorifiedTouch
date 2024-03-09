// 'use client'

// import React, { useCallback, useEffect, useState,useRef } from "react";
// import * as styles from "../styles/Testimonials.module.css";
// import SectionHeading from "./SectionHeading";
// import Image from "next/image";
// import Autoplay from "embla-carousel-autoplay";
// import useEmblaCarousel from 'embla-carousel-react'
// import { DotButton, NextButton, PrevButton } from "./CarouselButtons";
// const Testimonials = ({ testimonial }) => {
// 	const [selectedIndex, setselectedIndex] = useState(0);
//   const testimonialArray = Array(3).fill(testimonial);

//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: true,
//   });

//   const autoplay = Autoplay({
//     delay: 3000,
//     stopOnInteraction: false,
//   });

//   useEffect(() => {
//     if (!emblaApi) return;

//     emblaApi.on("select", onSlideChange);

//     autoplay.init(emblaApi);
//     autoplay.start();

//     return () => {
//       autoplay.stop();
//     };
//   }, [emblaApi]);

//   const scrollPrev = useCallback(() => {
//     if (!emblaApi) return;
//     emblaApi.scrollPrev();
//     autoplay.reset();
//   }, [emblaApi, autoplay]);

//   const scrollNext = useCallback(() => {
//     if (!emblaApi) return;
//     emblaApi.scrollNext();
//     autoplay.reset();
//   }, [emblaApi, autoplay]);

//   const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

//   const onSlideChange = useCallback(() => {
//     setselectedIndex(emblaApi.selectedScrollSnap);
//   }, [emblaApi]);

// 	// const [selectedIndex, setselectedIndex] = useState(0);
// 	// const testimonialArray = Array(3).fill(testimonoal);
// 	// const autoplay = useRef(

// 	// 	Autoplay(
// 	// 		{delay:3000, stopOnInteraction: false},
// 	// 		(emblaRoot) => emblaRoot.parentElement
// 	// 	)
// 	// );
// 	// const [emblaRef, emblaApi] = useEmblaCarousel({
// 	// 	loop: true,
		
// 	// });

// 	// useEffect(() => {
// 	// 	if (!emblaApi) return;
// 	// 	emblaApi.on("select", onSlideChange);
// 	// }, [emblaApi]);
// 	// useEffect(() => {
// 	// 	if (emblaApi) return;
// 	// 	onSelect();
// 	// 	emblaApi.on("select", onSelect);
// 	//   }, [emblaApi, onSelect]);
// 	// const scrollPrev =  useCallback(
// 	// 	() => {
// 	// 		if(!emblaApi)return
// 	// 		 emblaApi.scrollPrev();
// 	// 		 autoplay.current.reset()}
// 	// 	   ,[emblaApi]
// 	// );
// 	// const scrollNext = useCallback(
// 	// 	() => {
// 	// 		if(!emblaApi)return
// 	// 		 emblaApi.scrollNext();
// 	// 		 autoplay.current.reset()}
// 	// 	   ,[emblaApi]
// 	// );
// 	// const scrollTo = useCallback(
// 	// 	(index) => emblaApi && emblaApi.scrollTo(index),
// 	// 	[emblaApi]
// 	// );
// 	// const onSlideChange = useCallback(() => {
// 	// 	setselectedIndex(emblaApi.selectedScrollSnap);
// 	// }, [emblaApi]);

// 	const renderSingleTestimonial = (item, key) => {
// 		if( !item || !item.userName)
// 		return (
// 			<div className={`row embla__slide ${styles.testimonial}`} key={key}>
// 				{/* Image */}
// 				<div style={{ flex: 1 }} className="row">
// 					<div className={styles.avatar}>
// 						<Image src={item.userImage} alt="Health is Wealth" />
// 					</div>
// 					{/* Name */}
// 					<div className={styles.userInfoUnit}>
// 					{item.userName && <h3>{item.userName}</h3>}
// 					{item.userSubHeading && <p>{item.userSubHeading}</p>}
// 					</div>
// 				</div>
// 				{/* Text */}
// 				<div className={`${styles.testimonialText}`}>
// 					<p>{`" ${item.reviewText} "`}</p>
// 				</div>
// 			</div>
// 		);
// 	};
// 	const renderDots = () => {
// 		return (
// 			<div className={`row ${styles.dotContainer}`}>
// 				{testimonialArray.map((_, index) => {
// 					return (
// 						<DotButton
// 							key={index}
// 							selected={index == selectedIndex}
// 							clickHandler={() => scrollTo(index)}
// 						/>
// 					);
// 				})}
// 			</div>
// 		);
// 	};
// 	return (
// 		<section className={"margin-on-side"} style={{ marginBottom: "4rem" }}>
// 			<div className={`${styles.testimonialContainer}`}>
// 				{/* Heading */}
// 				<div className="row center">
// 					<SectionHeading
// 						headingTitle="What our customer are saying"
// 						color={"#fff"}
// 					/>
// 				</div>
// 				<div className="embla" ref={emblaRef}>
// 					<div className="embla__container">
// 						{testimonialArray.map((item, index) =>
// 							renderSingleTestimonial(item, index)
// 						)}
// 					</div>
// 				</div>
// 			</div>
// 			<div className={`${styles.carouselNavContainer} row center`}>
// 				<PrevButton clickHandler={scrollPrev} />
// 				{renderDots()}

// 				<NextButton clickHandler={scrollNext} />
// 			</div>
// 		</section>
// 	);
// };

// export default Testimonials;



// import Image from 'next/image';
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/effect-fade';
// import 'swiper/css/effect-cube';
// import 'swiper/css/effect-flip';
// import 'swiper/css/effect-coverflow';


// const Testimonials = () => {
	//   return (
		//     <div className="max-w-screen-xl mx-auto py-12">
		//       <Swiper
		//         spaceBetween={30}
		//         slidesPerView={1}
		//         navigation
		//         pagination={{ clickable: true }}
		// 		autoplay={{
			// 			delay: 4000,
			// 			disableOnInteraction: false,
			// 			effect: 'fade', // or 'slide' based on your preference
			// 		  }}
			
			//         loop={true}
			//       >
			//         {reviews.map((item, index) => (
				//           <SwiperSlide key={index} className="flex items-center">
				//             <div className="flex justify-center items-center w-1/2">
				//               {/* Image */}
//               <img
//                 src={item.image}
//                 alt={null}
//                 className="rounded-full h-16 w-16 object-cover"
//               />
//             </div>
//             <div className="w-1/2 ml-8">
//               {/* Name */}
//               <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
//               {/* Message */}
//               <p className="text-gray-600">{item.text}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Testimonials;
// import { reviews } from './ReviewsData';

// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';

// const Testimonials = () => {
//   return (
//     <section className="testimonial-container">
//       <div className=" flex justify-center mb-10 text-3xl">
//         <p>What members are saying.</p>
//       </div>

//       <div className="slider-container">
        {/* <blockquote>
          <Image className="top-quote quote" src='/images/article-2.png' alt="quote"  width={80} height={80}/>
          <Image className="bottom-quote quote" src='/images/article-1.png' alt="quote"  width={800} height={80}/>
        </blockquote> */}
{/* 
        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id} className="flex items-center">
              <div className="flex justify-center items-center w-1/2  rounded-full overflow-hidden">
			   <img  src={review.image} alt="" className="rounded-full h-16 w-16 object-cover" />
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

export default Testimonials; */}