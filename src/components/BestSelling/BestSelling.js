import React from "react";
import classes from "./BestSelling.module.css";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard/ProductCard";


const BestSelling = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=4")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Best Selling</h1>
      <Link href="/bestselling">
        <a className={classes.viewLink}>VIEW ALL</a>
      </Link>
      <div className={classes.carousel}>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
