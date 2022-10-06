import Head from "next/head";
import Carousel from "../src/components/Carousel/Carousel"

export default function Home() {
  return (
    <>
      <Head>
        <title>E-com</title>
      </Head>
      <Carousel />
    </>    
  );
}
