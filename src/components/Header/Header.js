import React, { useContext, useEffect, useState } from "react";
import styles from "./Header.module.css";
import cart_icon from "../../assets/icons/cart_icon.svg";
import AuthContext from "../../store/auth-context.js";
import CartModal from "../CartModal/CartModal.js";

const Header = (props) => {
  const [cartModal, setCartModal] = useState(null);
  const [scaleAnimationClass, setScaleAnimationClass] = useState("");

  const authContext = useContext(AuthContext);

  const animationClassName = "scale-animation";

  useEffect(() => {
    if (authContext.foodQuantityCounter > 0) {
      setScaleAnimationClass(animationClassName);
      const timer = setTimeout(() => {
        setScaleAnimationClass("");
      }, 350);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [authContext.foodQuantityCounter]);

  const cartClickHandler = (event) => {
    if (authContext.foodQuantityCounter > 0) {
      setCartModal(<CartModal />);
    }
  };

  //on Close Button Click of Cart Modal
  if (authContext.closeCartModalStatus && cartModal !== null) {
    setCartModal(null);
    authContext.onCloseCartModal(false);
  }

  return (
    <React.Fragment>
      {cartModal}
      <header className={styles.header}>
        <h1>React Meals</h1>
        <div
          className={`${styles["header-cart"]} ${styles[scaleAnimationClass]}`}
          onClick={cartClickHandler}
        >
          <embed id={styles["header-cart__icon"]} src={cart_icon} />
          <p id={styles["header-cart__title"]}>Your Cart</p>
          <p id={styles["header-cart__quantity"]}>
            {authContext.foodQuantityCounter}
          </p>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
