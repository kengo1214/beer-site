import styles from "./menu-nav.module.scss";
import { Link as Scroll } from "react-scroll";

export default function MenuNav() {
  return (
    <div className={styles.body}>
      <main>
        <div className={styles.title}>
          <h4>全てのメニュー</h4>
          <h1>All-Menu</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Scroll
                to="barrel"
                smooth={true}
                duration={800}
                offset={-230}
                className={styles.list}
              >
                <h4>樽ビール</h4>
                <h1>Barrel Beer</h1>
              </Scroll>
            </li>
            <li>
              <Scroll
                to="bottle"
                smooth={true}
                duration={800}
                offset={-230}
                className={styles.list}
              >
                <h4>ボトルビール</h4>
                <h1>Bottle Beer</h1>
              </Scroll>
            </li>
            <li>
              <Scroll
                to="cocktail"
                smooth={true}
                duration={800}
                offset={-230}
                className={styles.list}
              >
                <h4>カクテル</h4>
                <h1>Cocktail</h1>
              </Scroll>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}
