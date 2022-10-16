import Head from "next/head";
import BestSelling from "../src/components/BestSelling/BestSelling";
import Carousel from "../src/components/Carousel/Carousel"
import classes from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className = {classes.container}>
      <Head>
        <title>E-com</title>
      </Head>  
      <Carousel />
			<BestSelling />
    </div>
  );
}
