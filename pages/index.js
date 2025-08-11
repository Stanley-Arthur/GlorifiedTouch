'use client'

import dynamic from 'next/dynamic';
import Advantages from "../components/Advantages";
import Articles from "../components/Articles";
import Hero from "../components/Hero";
import Services from "../components/Services";
import data from "../constants/data";
import Head from "next/head";

// Dynamically import components with client-only rendering
const Testimonials = dynamic(() => import('../components/testimonials'), { ssr: false });
const DriftWidget = dynamic(() => import('@/components/DriftWidget'), { ssr: false });

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>GLORIFIED TOUCH CARE - Your Trusted Health Partner</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      {/* Navbar and Footer can be added here or in Layout */}

      <DriftWidget
        appId="tmumngnvac5d"
        userId="USER_ID_IF_AVAILABLE"
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

      <Hero />
      <Services services={data.services} />
      <Advantages />
      
      <div id="testimonials">
        <Testimonials />
      </div>

      <Articles articles={data.articles} />
      {/* <Footer /> */}
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
