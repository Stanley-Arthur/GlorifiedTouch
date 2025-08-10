'use client';


import React from "react";
import SectionHeading from "./SectionHeading";
import * as styles from "../styles/Services.module.css";
import ServiceCard from "./ServiceCard";
import images from "../constants/images";
import Button from "./Button";
import Link from "next/link";
const Services = ({ services }) => {
	return (
		<section className={styles.container}>
			<div className="margin-on-side">
				{/* Section Heading */}
				<SectionHeading headingTitle="Our Services" />
				{/* Section Description */}
				<p className={`${styles.servicesDes} text-light-gray`}>
                We offer a wide range of services including medication management, wound care, 
                hospice care, and more. Our team of skilled professionals will work with you and your family
                to create a personalized care plan that meets your unique needs.
				</p>
				{/* Section List - we will map through array and render a card for each item */}
				{/* <div className={`row ${styles.serviceList}`}>
					{services.map((item) => {
						return <ServiceCard service={item} key={item.id} />;
					})}
				</div> */}
				<div className="row center  pt-10">
					<Link  href="/contact">
				     <Button fill="fill" text={"Contact US"}/>
				 
				    </Link>
				</div>
			</div>
		</section>
	);
};

export default Services;
