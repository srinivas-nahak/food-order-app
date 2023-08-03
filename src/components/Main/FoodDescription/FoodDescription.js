import styles from "./FoodDescription.module.css";
import foodImage from "../../../assets/images/food_image.jpg";
import Card from "../../UI/Card/Card";

const FoodDescription = (props) => {
  return (
    <section className={styles["food-description-holder"]}>
      <img src={foodImage} />
      <Card className={styles["food-description-card"]}>
        <h1>Delicious Food, Delivered To You</h1>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </Card>
    </section>
  );
};

export default FoodDescription;
