// import styles from "./header.module.scss";
import styles from "./hederAnother.module.scss";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Nav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <Link href="/">
          <h1>No Beer No Life Tokyo</h1>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <div className={styles.item}>Home</div>
            </Link>
          </li>

          <li>
            <Link href="/menu/all-menu">
              <div className={styles.item}>Menu</div>
            </Link>
          </li>

          <li>
            <Link href="/blog">
              <div className={styles.item}>Blog</div>
            </Link>
          </li>

          <li>
            <Link href="/#contact">
              <div className={styles.item}>Contact</div>
            </Link>
          </li>
        </ul>
      </nav>

      {/* 🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔 */}
      <div className={styles.hamburgerButton} onClick={handleNav}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      {/* 🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔 */}

      <div className={nav ? styles.menuOpen : styles.menuClose}>
        <ul>
          <li onClick={handleNav}>
            <Link href="/">
              <h1>Home</h1>
            </Link>
          </li>
          <li onClick={handleNav}>
            <Link href="/menu/all-menu">
              <h1>Menu</h1>
            </Link>
          </li>
          <li onClick={handleNav}>
            <Link href="/blog">
              <h1>Blog</h1>
            </Link>
          </li>
          <li onClick={handleNav}>
            <Link href="/#contact">
              <h1>Contact</h1>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
