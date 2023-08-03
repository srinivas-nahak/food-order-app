import styles from "./App.module.css";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
