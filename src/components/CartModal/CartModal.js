import styles from "./CartModal.module.css";
import Card from "../UI/Card/Card.js";
import Button from "../UI/Button/Button.js";
import CartItem from "./CartItem/CartItem";
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import AuthContext from "../../store/auth-context.js";

const CartModal = (props) => {
  const authContext = useContext(AuthContext);

  console.log(authContext.foodList);

  if (authContext.foodList.length === 0) {
    authContext.onCloseCartModal(true);
  }

  const closeClickHandler = (event) => {
    //authContext.onCloseCartModal(true);
    authContext.onCloseCartModal(true);
  };

  const cartModal = (
    <Card className={styles["cart-modal"]}>
      {authContext.foodList.map((food, index) => (
        <CartItem foodItem={food} itemIndex={index} key={food.id} />
      ))}
      <ul className={styles["cart-modal__total-amount"]}>
        <li>Total Amount</li>
        <li>${authContext.totalAmount}</li>
      </ul>
      <ul className={styles["cart-modal__buttons"]}>
        <li>
          <Button
            className={styles["cart-modal__buttons-close"]}
            onClick={closeClickHandler}
          >
            Close
          </Button>
        </li>
        <li>
          <Button className={styles["cart-modal__buttons-order"]}>Order</Button>
        </li>
      </ul>
    </Card>
  );

  const backdrop = <div className={styles["cart-modal-backdrop"]}></div>;

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        backdrop,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(cartModal, document.getElementById("modal-root"))}
    </React.Fragment>
  );
};

export default CartModal;
