'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import images from "../constants/images";
import * as styles from "../styles/Navbar.module.css";
import { HamburgerButton } from "react-hamburger-button";
import { CloudLightning } from "react-feather";
import Banner from "./Banner";

const Navbar = () => {
	const [hidden, setHidden] = React.useState(true);

	return (
		<nav>
			<div className={`margin-on-side row ${styles.navContainer}`}>
				{/* logo */}
				<Image
					src={images.logo}
					alt="Health is Wealth"
					className="text-white overflow-hidden w-[180px] h-[180px]"
				/>
				{/* nav-links */}
				<ul
					className={`row ${styles.navLinks} ${
						hidden ? styles.hide : styles.show
					}`}
					onClick={() => {
						setHidden((current) => !current);
					}}
				>
					<div className={`${styles.navMenuButton} ${styles.insideContainer}`}>
						<HamburgerButton
							strokeWidth={3}
							open={!hidden}
							animationDuration={0.5}
							onClick={(e) => {
								e.stopPropagation();
								setHidden((current) => {
									return !current;
								});
							}}
							color={"white"}
							width={20}
							height={17}
						/>
					</div>
					<li
						className={`${styles.activeNavLink} text-dark-gray ${styles.navLink}`}
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
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
					<HamburgerButton
						strokeWidth={3}
						open={!hidden}
						animationDuration={0.5}
						onClick={() =>
							setHidden((current) => {
								return !current;
							})
						}
						width={20}
						height={17}
					/>
				</div>
			</div>
			<Banner />
		</nav>
	);
};

export default Navbar;
