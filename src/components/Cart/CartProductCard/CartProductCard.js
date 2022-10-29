import classes from "./CartProductCard.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { IoTrashBinOutline } from "react-icons/io5";

const CartProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const inputHandler = (event) => {
    setItemQuantity(event.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.imgWrapper}>
        <img className={classes.pdctImg} src={product.image} alt="" />
      </div>
      <div className={classes.pdctInfo}>
        <div className={classes.df}>
          <span className={classes.pdctTitle}>{product.title}</span>
          <span
            onClick={() => dispatch(cartActions.removeProduct(product))}
            className={classes.binIcon}
          >
            <IoTrashBinOutline size={20} />
          </span>
        </div>
        <span>S/{product.colorChosen}</span>
        <span>${(product.price * product.quantity).toFixed(2)}</span>
        <div className={classes.itemsQuantity}>
          <button
            onClick={() => dispatch(cartActions.decreaseProductQty(product))}
            className={classes.decreaseQtty}
          >
            -
          </button>
          <input
            onChange={inputHandler}
            value={product.quantity}
            className={classes.input}
            type="number"
          />
          <button
            onClick={() => dispatch(cartActions.addProduct(product))}
            className={classes.increaseQtty}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartProductCard;
