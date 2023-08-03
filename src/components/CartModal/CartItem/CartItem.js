import { useContext } from "react";
import styles from "./CartItem.module.css";
import AuthContext from "../../../store/auth-context";

const CartItem = (props) => {
  //const [receivedQuantity, setQuantity] = useState(props.foodItem.quantity);
  const authContext = useContext(AuthContext);

  const quantityControlHandler = (type) => {
    if (type === "subtract") {
      authContext.onQuantityChange(--props.foodItem.quantity, props.itemIndex);

      return;
    }

    authContext.onQuantityChange(++props.foodItem.quantity, props.itemIndex);
  };

  return (
    <div className={styles["cart-item"]}>
      <ul className={styles["cart-item__details"]}>
        <li className={styles["cart-item__details-title"]}>
          <h2>{props.foodItem.title}</h2>
        </li>
        <li className={styles["cart-item__details-price"]}>
          ${props.foodItem.price}
        </li>
        <li className={styles["cart-item__details-quantity"]}>
          x{props.foodItem.quantity}
        </li>
      </ul>
      <ul className={styles["cart-item__quantity-control"]}>
        <li
          onClick={(_) => {
            quantityControlHandler("subtract");
          }}
        >
          -
        </li>
        <li
          onClick={(_) => {
            quantityControlHandler("add");
          }}
        >
          +
        </li>
      </ul>
    </div>
  );
};

export default CartItem;
