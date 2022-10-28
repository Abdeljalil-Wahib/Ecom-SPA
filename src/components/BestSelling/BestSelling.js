import React from "react";
import classes from "./BestSelling.module.css";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard/ProductCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const BestSelling = () => {
  const [products, setProducts] = useState();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=12")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  }, []);

  let length = slide;

  const leftSlide = () => {
    if (slide < 0) {
      setSlide(prev => prev + 100);
    }
  };

  const rightSlide = () => {
    if ((slide > (-100 * (products.length - 4)))) {
      setSlide(prev => prev - 100);
    } 
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Best Selling</h1>
      <Link href="/bestselling">
        <a className={classes.viewLink}>VIEW ALL</a>
      </Link>
      <div className={classes.carouselContainer}>
        <button
          style={
            slide === 0 ? { visibility: "hidden" } : { visibiliy: "visible" }
          }
          onClick={leftSlide}
          className={classes.navBtn + " " + classes.btnLeft}
        >
          <FaChevronLeft className={classes.chLeft} />
        </button>
        <div
          style={{ transform: `translateX(${slide}%)`, transition: `all 0.5s`  }}
          className={classes.carousel}
        >
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {-25 * (products?.length - 4)  != slide && <button
          onClick={rightSlide}
          className={classes.navBtn + " " + classes.btnRight}
        >
          <FaChevronRight className={classes.chRight} />
        </button>}
      </div>
    </div>
  );
};

export default BestSelling;
