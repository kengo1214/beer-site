import styles from "./header.module.scss";
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
      <div className={styles.section}>
        <Link href="/">
          <h1>No Beer No Life Tokyo</h1>
        </Link>
        <ul className={styles.normal}>
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
          <li>
            <Link href="/#contact">
              <a className={styles.orangeButton}>Contact</a>
            </Link>
          </li>
        </ul>
        {/* モバイル用のボタン */}
        <div className={styles.button} onClick={handleNav}>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          {/* <AiOutlineMenu size={30} /> */}
        </div>

        {/* モバイル用のメニュー */}
        <div className={nav ? styles.menu : styles.menu00}>
          {/* <div className={styles.menu}> */}
          <ul>
            <li onClick={handleNav}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li onClick={handleNav}>
              <Link href="/menu/all-menu">
                <a>Menu</a>
              </Link>
            </li>
            <li onClick={handleNav}>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li onClick={handleNav}>
              <Link href="/#contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
