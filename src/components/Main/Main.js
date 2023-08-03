import FoodDescription from "./FoodDescription/FoodDescription.js";
import FoodList from "./FoodList/FoodList.js";
import styles from "./Main.module.css";

const Main = (props) => {
  return (
    <main className={styles.Main}>
      <FoodDescription />
      <FoodList />
    </main>
  );
};

export default Main;
