import React, { useState } from "react";

const AuthContext = React.createContext({
  foodQuantityCounter: 0,
  totalAmount: 0,
  foodList: [],
  closeCartModalStatus: false,
  onFoodUpdate: (addedFood) => {},
  onQuantityChange: (quantity, index) => {},
  onCloseCartModal: (closeStatus) => {},
});

export const AuthContextProvider = (props) => {
  const [foodList, setFoodList] = useState([]);
  const [closeCartModal, setCloseCartModal] = useState(false);

  let foodCounter = 0; // Add foodCounter as a state

  let totalAmount = 0;

  //Updating the foodCounter when newItem added or quantity change
  if (foodList.length > 0) {
    foodCounter = 0;
    foodList.forEach((food) => {
      totalAmount += food.quantity * food.price;
      foodCounter += food.quantity;
    });
  }

  const foodUpdateHandler = (addedFood) => {
    if (foodList.length === 0) {
      setFoodList([addedFood]);
      return;
    }

    setFoodList((currentFoodList) => {
      let tempFoodList = currentFoodList.slice();

      let isItemPresent = false;
      currentFoodList.forEach((foodItem, index) => {
        if (foodItem.id === addedFood.id) {
          tempFoodList[index].quantity = addedFood.quantity;
          isItemPresent = true;
        }
      });

      //Adding the food Item only if it's a new item else increasing the quantity above
      if (!isItemPresent) {
        tempFoodList.push(addedFood);
      }

      return tempFoodList;
    });
  };

  const quantityChangeHandler = (updatedQuantity, removeIndex) => {
    setFoodList((currentFoodList) => {
      const tempFoodList = currentFoodList.slice();

      //The state is not being updated in this way
      //const tempFoodList = currentFoodList;

      if (updatedQuantity === 0) {
        tempFoodList.splice(removeIndex, 1);
        return tempFoodList;
      }

      tempFoodList[removeIndex].quantity = updatedQuantity;

      return tempFoodList;
    });
  };

  const modalCloseHandler = (closeStatus) => {
    setCloseCartModal(closeStatus);
  };

  return (
    <AuthContext.Provider
      value={{
        foodQuantityCounter: foodCounter,
        foodList: foodList,
        totalAmount: totalAmount.toFixed(2),
        closeCartModalStatus: closeCartModal,
        onFoodUpdate: foodUpdateHandler,
        onQuantityChange: quantityChangeHandler,
        onCloseCartModal: modalCloseHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
