import React from "react";
import images from "../constants/images";
import * as styles from "../styles/Advantages.module.css";
import SingleAdvantage from "./SingleAdvantage";

const advantageData = [
	{
		title: "GlorifiedTouchCare Care-Givers",
		image: images.leadingHealthProvider,
		description:
			"Our caregivers are some of the most experienced and compassionate professionals in the industry. They are carefully screened and trained to ensure they provide the highest level of care to our clients.",
		buttonText: "Learn More",
	},
	{
		title: "The GlorifiedTouchCare Story",
		image: images.downloadApp,
		description:
			"At Glorified Touch Care, we started with a simple idea: to provide reliable and compassionate home health care services to those in need. Over the years, we have grown into a trusted provider of quality care, serving the needs of our clients with dedication and professionalism",
		buttonText: "Learn more",
	},
];

const Advantages = () => {
	return (
		<section className={`${styles.advContainer} margin-on-side`}>
			<SingleAdvantage data={advantageData[0]} />
			<SingleAdvantage data={advantageData[1]} direction="rev" />
		</section>
	);
};

export default Advantages;
