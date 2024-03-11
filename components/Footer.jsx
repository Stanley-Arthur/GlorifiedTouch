import React from "react";
import * as styles from "../styles/Footer.module.css";
import { GoLocation, GoMailRead } from 'react-icons/go';
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai'
import Link from "next/link";

const Footer = () => {
	return (
		<div className='flex items-center justify-around flex-col md:flex-row text-white bg-gray-900 min-h-96 md:h-96 mt-10 relative'>
		<div className='w-86 h-96 pt-10 pb-10'>
			{/* <iframe className='w-full  h-full' src="https://maps.google.com/maps?width=644&amp;height=797&amp;hl=en&amp;q=Achimota, 
				saint johns &amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
			</iframe> */}
			<div class="mapouter">
				<div class="gmap_canvas"><iframe width="342" height="326" id="gmap_canvas" src="https://maps.google.com/maps?q=hampton, ga&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2yu.co"></a><a href="https://embedgooglemap.2yu.co"></a></div>
			</div>
		</div>
		<div className='md:space-y-10 pt-5 hover:cursor-default'>
			<div className='flex items-center text-yellow-300 justify-center h-12 w-full'>
				<div className={styles.branding}>
		 				{/* logo */}
					<div className="logoFooter h-8 w-8 rounded-full bg-white text-blue-500 flex items-center justify-center font-bold">GTC</div>
		 				{/* Name */}
					<h3>GlorifiedTouchCare</h3>
				</div>
			</div>
			<div className='flex text-gray-500 hover:text-white '> 
				<GoLocation size={25} className='pr-2 text-yellow-300'/>
				<p>	1934 Pair Rd SW, Marietta. GA 30008 </p>
			</div>
			<div className='flex  text-gray-500 hover:text-white '>
				{/* <AiFillPhone size={25} className='pr-2 text-yellow-300'/> */}
				<p ></p>
			</div>
			<div className='flex  text-gray-500 hover:text-white '>
				<AiOutlineMail size={25} className='pr-2 text-yellow-300'/>
					<p> glorifiedtouchcare@gmail.com</p>
			</div>
			<div className='flex  text-gray-500 hover:text-white '>
				<AiOutlineClockCircle size={25} className='pr-2 text-yellow-300'/>
				<p>	Mon - Fri: 8:30am - 5:00pm</p>
			</div>
		</div>
		<div className='pt-5 space-y-10 hover:cursor-default pb-8'>
			<div className='flex items-center text-yellow-300 justify-center h-12 w-full'>
			<h4>INFORMATION</h4>

			</div>
			<div className=' text-gray-500  hover:text-white '>
			<Link href='/contact'>CRITICAL INFORMATION</Link>
			</div>
			<div className=' text-gray-500 hover:text-white '>
			<Link href='/contact'>COMPLAINTS HANDLING</Link>
			</div>
			<div className=' text-gray-500 hover:text-white '>
			<Link href='/contact'>WHAT YOU NEED TO KNOW</Link>
			</div>
			<div className=' text-gray-500 hover:text-white '>
			<Link href='#'>TERMS AND CONDITIONS</Link>
			</div>
			
		</div>
	
	</div>
			
		// <footer className=" mt-10 flex items-center justify-around flex-col md:flex-row bg-gradient-to-r px-5 from-blue-500 via-blue-400 to-blue-800 py-4 text-white" >
		// 	<div className="flex items-start w-full flex-wrap h-36 ">
		// 		{/* Company Info */}
		// 		<div className={`${styles.companyInfo}`}>
					
		// 			<div className={styles.branding}>
		// 				{/* logo */}
		// 				<div className={styles.logoFooter}>GTC</div>
		// 				{/* Name */}
		// 				<h3>GlorifiedTouchCare</h3>
		// 			</div>
		// 			{/* description */}
		// 			<p className={`${styles.companyDes}`}> 
		// 			Glorified Touch Care ensures comprehensive and compassionate healthcare 
		// 			services tailored to the unique requirements of the aging population.
		// 			 We prioritize the well-being and comfort of seniors, offering specialized care to promote a 
		// 			healthy and fulfilling life in their golden years.
		// 			</p>
		// 			<p  className="text-sm">©2024 GLORIFIEDTOUCHCARE LLC -ALL RIGHTS RESERVED</p>
		// 		</div>
		// 	</div>

		// 	<div className='md:space-y-10 pt-5 hover:cursor-default'>
        //         <div className='flex items-center text-yellow-300 justify-center h-12 w-full'>
        //              <h4>GET IN TOUCH</h4>
        //         </div>
        //         <div className='flex text-gray-500 hover:text-white '> 
        //             <GoLocation size={25} className='pr-2 text-yellow-300'/>
        //             <p>	Hampton Ga 30228</p>
        //         </div>
        //         <div className='flex  text-gray-500 hover:text-white '>
        //             {/* <AiFillPhone size={25} className='pr-2 text-yellow-300'/> */}
        //             <p >770-686-7390 </p>
        //         </div>
        //         <div className='flex  text-gray-500 hover:text-white '>
        //             {/* <GoMailRead size={25} className='pr-2 text-yellow-300'/> */}
        //                 <p>info@smartitbs.com</p>
        //         </div>
        //         <div className='flex  text-gray-500 hover:text-white '>
        //             {/* <AiOutlineClockCircle size={25} className='pr-2 text-yellow-300'/> */}
        //             <p>	Mon - Fri: 8:30am - 5:00pm</p>
        //         </div>
        //     </div>


		// 	<div className="w-96 h-96 pt-10 pb-10 mx-auto">
        //      {/* Map Container */}
        //     <div className="relative w-full h-full">
        //       {/* Google Map Embed */}
        //       <div className="mapouter absolute top-0 left-0 w-full h-full">
        //         <div className="gmap_canvas w-full h-full">
        //           <iframe width="100%" height="100%" id="gmap_canvas"src="https://maps.google.com/maps?q=hampton, ga&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0"scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2yu.co"></a><a href="https://embedgooglemap.2yu.co"></a>
        //        </div>
        //     </div>
        //     </div>
        //     </div>
		// </footer>
		
	);
};

export default Footer;
