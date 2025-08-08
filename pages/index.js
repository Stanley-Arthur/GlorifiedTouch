
import Advantages from "../components/Advantages";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Testimonials from "./testimonials";
import data from "../constants/data";
import Head from "next/head";
import DriftWidget from "@/components/DriftWidget";

export default function Home(props) {
	return (
		<div>
			<Head>

				<title>GLORIFIED TOUCH CARE - Your Trusted Health Partner</title>

				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<link rel="shortcut icon" href="/public/favicon.ico" />





			</Head>
			{/* <Navbar /> */}

			<div>

				{/* <Drift
				appId="hhgg7b7c3tag"
				userId="USER_ID_IF_AVAILABLE"
				attributes={{ email: "glorifiedtouchcare@gmail.com", company: "Glorified Touch Care" }}

				eventHandlers={[  ]}
				style={{
					backgroundColor: "#0000ff",
					color: "#333333", 
					borderRadius: "8px", 
					
				  }}
			/> */}

				<DriftWidget
					appId="tmumngnvac5d"
					userId="USER_ID_IF_AVAILABLE" // optional
					attributes={{
						email: "stanleyokyemanarthur@gmail.com",
						company: "Glorified Touch Care"
					}}
					eventHandlers={[
						/* { event: 'ready', handler: () => {} } */
					]}
					style={{
						backgroundColor: "#0a0a23", // blue-black shade
						color: "#ffffff", // make text visible on dark background
						borderRadius: "8px"
					}}
				/>

			</div>

			{/* Hero Section */}
			<Hero />
			{/* Our Services Section */}
			<Services services={data.services} />
			{/* Advantages */}
			<Advantages />
			{/* To do - Carousel */}
			<div id="testimonials">
				<Testimonials />
			</div>
			{/* Articles */}
			<Articles articles={data.articles} />
			{/* Footer */}
			{/* <Footer /> */}
		</div>
	);


}
export async function getStaticProps(context) {
	return {
		props: {}, // will be passed to the page component as props
	};
}
