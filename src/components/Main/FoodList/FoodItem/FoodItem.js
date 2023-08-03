import styles from "./FoodItem.module.css";
import Button from "../../../UI/Button/Button.js";
import { useState, useContext } from "react";
import AuthContext from "../../../../store/auth-context.js";

const FoodItem = (props) => {
  const authContext = useContext(AuthContext);

  const [addedQuantity, setQuantity] = useState(0);

  const addClickHandler = (event) => {};

  const quantityHandler = (event) => {
    setQuantity(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    //Setting the foodCounter
    authContext.onFoodUpdate({
      ...props.foodDetails,
      quantity: parseInt(addedQuantity),
    });

    //setQuantity(0);
  };

  return (
    <div className={styles["food-item-container"]}>
      <ul>
        <li>
          <h2>{props.foodDetails.title}</h2>
        </li>
        <li>
          <em>{props.foodDetails.description}</em>
        </li>
        <li>
          <strong>${props.foodDetails.price}</strong>
        </li>
      </ul>
      <form onSubmit={submitHandler}>
        <label>
          <strong>Amount</strong>
        </label>
        <input
          name="food-item__quantity"
          type="number"
          value={addedQuantity}
          onChange={quantityHandler}
        />
        <Button type="submit" onClick={addClickHandler}>
          +Add
        </Button>
      </form>
    </div>
  );
};

export default FoodItem;
