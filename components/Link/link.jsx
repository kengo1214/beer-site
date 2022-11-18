import Image from "next/image";
import Link from "next/link";
import styles from "./link.module.scss";
import { Link as Scroll } from "react-scroll";

export default function LinkSection() {
  return (
    <section className={styles.linkSection}>
      <div className={styles.linkBox}>
        <div className={styles.linkItem}>
          <Link href="/menu/all-menu">
            <Image
              src={"/image/menu-link.jpg"}
              layout="fill"
              objectFit="cover"
              alt="image"
              className={styles.image}
            />
          </Link>
          <div className={styles.sentence}>
            <Link href="/menu/all-menu">
              <h1>Menu</h1>
            </Link>
          </div>
        </div>

        <div className={styles.linkItem}>
          <Link href="/blog">
            <Image
              src={"/image/blog-link.jpg"}
              layout="fill"
              objectFit="cover"
              alt="image"
              className={styles.image}
            />
          </Link>
          <div className={styles.sentence}>
            <Link href="/menu/all-menu">
              <h1>Blog</h1>
            </Link>
          </div>
        </div>

        <div className={styles.linkItem}>
          <Scroll
            to="contact"
            smooth={true}
            duration={800}
            className={styles.link}
            offset={-129}
          >
            <Image
              src={"/image/contact-link.jpg"}
              layout="fill"
              objectFit="cover"
              alt="image"
              className={styles.image}
            />
          </Scroll>

          <div className={styles.sentence}>
            {/* <Link href="/"> */}
            <Scroll
              to="contact"
              smooth={true}
              duration={800}
              className={styles.link}
              offset={-130}
            >
              <h1>Contact</h1>
            </Scroll>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
