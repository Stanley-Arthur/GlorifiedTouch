'use client';


import React from "react";
import Image from "next/image";
import * as styles from "../styles/Hero.module.css";
import images from "../constants/images";
import Button from "./Button";
import Link from "next/link";
const Hero = () => {
	return (
		<section className={`${styles.heroContainer} row margin-on-side`}>
			{/* dot dot pattern */}
			{/* left section */}
			<div className={`${styles.heroInfo}`}>
				{/* heading */}
				<h1 className={styles.heroHeading}>
                WELCOME TO GLORIFIED TOUCH   CARE
				</h1>
				{/* details */}
				<p className={`${styles.heroDes} text-light-gray`}>
                Where compassion meets dedication in providing unparalleled care for the elderly
				</p>

				{/* Button - custom button */}
				<Link  href="/contact">
				 <Button fill="fill" text={"Contact US"}/>
				</Link>
			</div>

			{/* right section */}
			<div className={`${styles.heroImageContainer}`}>
				<Image src={images.heroImage} alt="Health is Wealth" />
			</div>
		</section>
	);
};

export default Hero;