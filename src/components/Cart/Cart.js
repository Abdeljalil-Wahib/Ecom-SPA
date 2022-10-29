import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./Cart.module.css";
import CartProductCard from "./CartProductCard/CartProductCard";
import { IoExitOutline } from "react-icons/io5";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <div className={classes.container}>
      <div className={classes.df}>
        <span className={classes.heading}>Shopping Cart</span>
        <span
          className={classes.closeBtn}
          onClick={() => dispatch(uiActions.toggleCart())}
        >
          <IoExitOutline />
        </span>
      </div>
      <span className={classes.itemQty}>{}Items</span>
      {products.map((product, idx) => (
        <CartProductCard key={idx} product={product} />
      ))}
      <hr style={{ margin: "15px 0" }} />
      <div className={classes.totalPrice}>
        <span>{+totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Cart;
