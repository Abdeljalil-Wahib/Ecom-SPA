import Head from "next/head";
import Carousel from "../src/components/Carousel/Carousel"
import BestSelling from "../src/components/BestSelling/BestSelling"

export default function Home() {
  return (
    <>
      <Head>
        <title>E-com</title>
      </Head>
      <Carousel />
      <BestSelling />
    </>    
  );
}
