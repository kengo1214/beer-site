import styles from "./header.module.scss";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link as Scroll } from "react-scroll";

export default function Nav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className={styles.body}>
      <div className={styles.section}>
        <Scroll
          to="/"
          smooth={true}
          duration={800}
          className={styles.link}
          offset={-130}
        >
          <h1>No Beer No Life Tokyo</h1>
        </Scroll>
        <ul className={styles.nav}>
          <li>
            <Scroll
              to="/"
              smooth={true}
              duration={800}
              className={styles.link}
              offset={-130}
            >
              Home
            </Scroll>
          </li>
          <li>
            <Link href="/menu/all-menu" className={styles.link}>
              <a>Menu</a>
            </Link>
          </li>
          <li>
            <Link href="/blog" className={styles.link}>
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Scroll
              to="contact"
              smooth={true}
              duration={800}
              className={styles.orangeButton}
              offset={-120}
            >
              Contact
            </Scroll>
          </li>
        </ul>

        {/* 🍔🍔🍔🍔🍔 */}
        <div className={styles.button} onClick={handleNav}>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        {/* 🍔🍔🍔🍔🍔 */}

        {/* ##############モバイル用のメニュー############## */}
        <div className={nav ? styles.menuOpen : styles.menuClose}>
          <ul>
            <li onClick={handleNav}>
              <Scroll
                to="/"
                smooth={true}
                duration={800}
                className={styles.link}
                offset={-130}
                onClick={handleNav}
              >
                Home
              </Scroll>
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
              <Scroll
                to="contact"
                smooth={true}
                duration={800}
                className={styles.orangeButton}
                // offset={-90}/
                offset={-120}
                onClick={handleNav}
              >
                Contact
              </Scroll>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
