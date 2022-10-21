import styles from "./App.module.css";

export const App = () => {
  const ipcExample = window.app.exampleFunction();
  return (
    <div>
      <h1 className={styles.testStyle}>Hello from React!</h1>
      <h2>{ipcExample}</h2>
    </div>
  );
};
