import Head from "next/head";
import Carousel from "../src/components/Carousel/Carousel"
import BestSelling from "../src/components/BestSelling/BestSelling"
import Spotlights from "../src/components/Spotlight/Spotlights";
import Newsletter from "../src/components/Newsletter/Newsletter";
import Membership from "../src/components/MembershipForm/Membership";


export default function Home() {
  return (
    <>
      <Head>
        <title>Sneakers</title>
      </Head>
      <Carousel />
      <BestSelling />
      <Spotlights />
      <Membership />
      <Newsletter />
    </>    
  );
}
