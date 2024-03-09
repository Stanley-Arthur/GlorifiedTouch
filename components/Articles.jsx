import React from "react";
// import * as styles from "../styles/Articles.module.css";
import ArticleCard from "./ArticleCard";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
const Articles = ({ articles }) => {
	return (
		<section className={"margin-on-side"}>
			<SectionHeading headingTitle={"Check out our latest Articles"} />
			<div className={`row aside`} style={{ margin: "3rem 0" }}>
				{articles.map((item) => {
					return <ArticleCard key={item.id} data={item} />;
				})}
			</div>
			<div className="row center">
				<Button text={"Contact  US"} />
			</div>
		</section>
	);
};

export default Articles;
