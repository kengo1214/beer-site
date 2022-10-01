import styles from "./layout.module.scss";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <h1>No Beer No Life Tokyo</h1>
      </header>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/menu/all-menu">
              <a>Menu</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="news">
              <a>News</a>
            </Link>
          </li>
          {/* <li className={styles.li}>
            <Link href="access">
              <a>Access</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="contact">
              <a>Contact</a>
            </Link>
          </li> */}
        </ul>
      </nav>
      <div className={styles.main}>{children}</div>
      <div className={styles.footer}>
        <p>No Beer No Life Tokyo 2022</p>
      </div>
    </div>
  );
}
