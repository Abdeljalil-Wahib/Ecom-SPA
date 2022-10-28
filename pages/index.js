import Head from "next/head";
import Carousel from "../src/components/Carousel/Carousel"
import BestSelling from "../src/components/BestSelling/BestSelling"
import Spotlights from "../src/components/Spotlight/Spotlights";
import Newsletter from "../src/components/newsletter/Newsletter";
import Membership from "../src/components/MembershipForm/Membership";


export default function Home() {
  return (
    <>
      <Head>
        <title>E-com</title>
      </Head>
      <Carousel />
      <BestSelling />
      <Spotlights />
      <Membership />
      <Newsletter />
    </>    
  );
}
