import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as styles from "../styles/ArticleCard.module.css";
const ArticleCard = ({ data }) => {
	return (
		<div className={styles.cardContainer}>
			{/* Image */}
			<div className={styles.imageContainer}>
				<Image src={data.picture} alt="Health is Wealth" />
			</div>
			{/* Info */}
			<div className={`${styles.infoContainer}`}>
				<h3 className={`${styles.articleHeading}`}>{data.title}</h3>
				<p className={`${styles.articleText} text-light-gray`}>
					{data.description}
				</p>
				<Link href="/about">Learn More</Link>
			</div>
		</div>
	);
};

export default ArticleCard;
