import dynamic from 'next/dynamic';  // <-- add this import
import Advantages from "../components/Advantages";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
// import Testimonials from "./testimonials";  <-- remove this import
import data from "../constants/data";
import Head from "next/head";
import DriftWidget from "@/components/DriftWidget";

// Dynamically import Testimonials with SSR disabled (client-side only)
const Testimonials = dynamic(() => import('./testimonials'), { ssr: false });

export default function Home(props) {
	return (
		<div>
			<Head>
				<title>GLORIFIED TOUCH CARE - Your Trusted Health Partner</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>

			{/* <Navbar /> */}

			<div>
				<DriftWidget
					appId="tmumngnvac5d"
					userId="USER_ID_IF_AVAILABLE" // optional
					attributes={{
						email: "stanleyokyemanarthur@gmail.com",
						company: "Glorified Touch Care",
					}}
					eventHandlers={[]}
					style={{
						backgroundColor: "#0a0a23",
						color: "#ffffff",
						borderRadius: "8px",
					}}
				/>
			</div>

			{/* Hero Section */}
			<Hero />
			{/* Our Services Section */}
			<Services services={data.services} />
			{/* Advantages */}
			<Advantages />
			
			{/* Testimonials Section - now client-side only */}
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
