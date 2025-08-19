import React, { useState } from "react";
import classes from "./ProductCard.module.css";
import Link from "next/link";
import ProductColor from "../../UI/ProductColor/ProductColor";
import Rating from "../../UI/ProductColor/Rating/Rating";
import Button from "../../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

const ProductCard = ({ product }) => {
  const [currentColorId, setCurrentColorId] = useState("");
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);

  const colors = [
    {
      color: "black",
      quantity: 20,
      id: 1,
    },
    {
      color: "darkcyan",
      quantity: 10,
      id: 2,
    },
  ];

  const addProduct = () => {
    const colorChosen = colors.find(
      (color) => color.id === currentColorId
    )?.color;
    let addedProduct = {
      ...product,
      colorChosen,
    };

    dispatch(cartActions.addProduct(addedProduct));
  };

  return (
    <div className={classes.container}>
      <div className={classes.imgWrapper}>
        <img className={classes.img} src={product.image} alt="" />
        <Button
          onClick={addProduct}
          className={classes.addToCartBtn}
          type="button"
          body="ADD TO CART"
        />
      </div>
      <div className={classes.productDetails}>
        <Link href="" className={classes.pdctTitle}>
          {product.title}
        </Link>
        <div className={classes.df}>
          <ProductColor setColor={setCurrentColorId} colors={colors} />
          <span className={classes.sizeTxt}>MORE SIZES AVAILABLE</span>
        </div>
        <span className={classes.pdctPrice}>${product.price}</span>
        <Rating stars={product.rating.rate} />
      </div>
    </div>
  );
};

export default ProductCard;
