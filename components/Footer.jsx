'use client';


import React from "react";
import * as styles from "../styles/Footer.module.css";
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail, AiOutlineClockCircle } from 'react-icons/ai';
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center justify-around flex-col md:flex-row text-white bg-gray-900 min-h-96 md:h-96 mt-10 relative">
      
      {/* Map Section */}
      <div className="w-86 h-96 pt-10 pb-10">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="342"
              height="326"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=hampton, ga&t=&z=9&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="md:space-y-10 pt-5 hover:cursor-default">
        <div className="flex items-center text-yellow-300 justify-center h-12 w-full">
          <div className={styles.branding}>
            <div className="logoFooter h-8 w-8 rounded-full bg-white text-blue-500 flex items-center justify-center font-bold">GTC</div>
            <h3>GlorifiedTouchCare</h3>
          </div>
        </div>

        <div className="flex text-gray-500 hover:text-white">
          <GoLocation size={25} className="pr-2 text-yellow-300" />
          <p>1934 Pair Rd SW, Marietta. GA 30008</p>
        </div>

        <div className="flex text-gray-500 hover:text-white">
          {/* Add phone number here if needed */}
        </div>

        <div className="flex text-gray-500 hover:text-white">
          <AiOutlineMail size={25} className="pr-2 text-yellow-300" />
          <p>glorifiedtouchcare@gmail.com</p>
        </div>

        <div className="flex text-gray-500 hover:text-white">
          <AiOutlineClockCircle size={25} className="pr-2 text-yellow-300" />
          <p>Mon - Fri: 8:30am - 5:00pm</p>
        </div>
      </div>

      {/* Info Links Section */}
      <div className="pt-5 space-y-10 hover:cursor-default pb-8">
        <div className="flex items-center text-yellow-300 justify-center h-12 w-full">
          <h4>INFORMATION</h4>
        </div>

        <div className="text-gray-500 hover:text-white">
          <Link href="/contact">CRITICAL INFORMATION</Link>
        </div>

        <div className="text-gray-500 hover:text-white">
          <Link href="/contact">COMPLAINTS HANDLING</Link>
        </div>

        <div className="text-gray-500 hover:text-white">
          <Link href="/contact">WHAT YOU NEED TO KNOW</Link>
        </div>

        <div className="text-gray-500 hover:text-white">
          <Link href="#">TERMS AND CONDITIONS</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
