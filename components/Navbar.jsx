'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import images from "../constants/images";
import * as styles from "../styles/Navbar.module.css";
import { Sling as Hamburger } from "hamburger-react";
import Banner from "./Banner";

const Navbar = () => {
	
	const [hidden, setHidden] = useState(true);

	return (
		<nav>
			<div className={`margin-on-side row ${styles.navContainer}`}>
				<Image
					src={images.logo}
					alt="Health is Wealth"
					className="text-white overflow-hidden w-[180px] h-[180px]"
				/>

				<ul
					className={`row ${styles.navLinks} ${hidden ? styles.hide : styles.show}`}
					onClick={() => setHidden(true)}
				>
					<div className={`${styles.navMenuButton} ${styles.insideContainer}`}>
						<Hamburger
							toggled={!hidden}
							toggle={() => setHidden(prev => !prev)}
							size={20}
							color="white"
						/>
					</div>
					<li className={`${styles.activeNavLink} text-dark-gray ${styles.navLink}`} onClick={e => e.stopPropagation()}>
						<Link href="/">Home</Link>
					</li>
					<li className={`text-dark-gray ${styles.navLink}`}>
						<Link href="/gtcservices">Services</Link>
					</li>
					<li className={`text-dark-gray ${styles.navLink}`}>
						<Link href="/contact">Contact Us</Link>
					</li>
					<li className={`text-dark-gray ${styles.navLink}`}>
						<Link href="#testimonials">Testimonials</Link>
					</li>
					<li className={`text-dark-gray ${styles.navLink}`}>
						<Link href="/about">About us</Link>
					</li>
				</ul>

				<div className={`${styles.navMenuButton}`}>
					<Hamburger
						toggled={!hidden}
						toggle={() => setHidden(prev => !prev)}
						size={20}
						color="white"
					/>
				</div>
			</div>
			<Banner />
		</nav>
	);
};

export default Navbar;
