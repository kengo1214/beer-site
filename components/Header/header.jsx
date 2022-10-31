import styles from "./header.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>No Beer No Life Tokyo</h1>
        </div>
        <div className={styles.nothing}></div>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/menu/all-menu">
                <a>Menu</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.container}>
          <div className={styles.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            {/* <p className={openMenu ? styles.open : undefined}>Menu</p> */}
          </div>
        </div>
      </header>
      <div
        className={`${styles.drawerMenu} ${openMenu ? styles.open : undefined}`}
      >
        <ul>
          <div className={styles.close} onClick={() => menuFunction()}>
            <div className={styles.border}>
              <div className={styles.closeBox}>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <li>
            <Link href="/">
              <a>
                <h1 className={styles.mainTitle}>Home</h1>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/menu/all-menu">
              <a>
                <h1 className={styles.mainTitle}>Menu</h1>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>
                <h1 className={styles.mainTitle}>Blog</h1>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
