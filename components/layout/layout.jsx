import styles from "./layout.module.scss";
import Header from "../Header/header";

export default function Layout({ children }) {
  return (
    <div className={styles.body}>
      <Header className={styles.header} />
      <div className={styles.main}>{children}</div>
      <div className={styles.footer}>
        <p>No Beer No Life Tokyo 2022</p>
      </div>
    </div>
  );
}
