import FoodItem from "./FoodItem/FoodItem.js";
import Card from "../../UI/Card/Card";
import styles from "./FoodList.module.css";
import { useEffect, useState } from "react";

const FoodList = (props) => {
  const foodList = [
    {
      id: "f1",
      title: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "f2",
      title: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "f3",
      title: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "f4",
      title: "Green Bowl",
      description: "Healthy...and...green...",
      price: 18.99,
    },
  ];

  return (
    <section>
      <Card className={styles["food-list-container"]}>
        {foodList.map((food) => (
          <FoodItem foodDetails={food} key={food.id} />
        ))}
      </Card>
    </section>
  );
};

export default FoodList;
