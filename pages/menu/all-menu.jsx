import styles from "../../styles/all-menu.module.scss";
import { client } from "../../libs/client";
import Image from "next/image";
import Link from "next/link";

//SSG(getStaticProps)
export async function getStaticProps() {
  const data01 = await client.get({ endpoint: "barrel-beer" });
  const data02 = await client.get({ endpoint: "bottle-beer" });
  const data03 = await client.get({ endpoint: "cocktail-and-hard-liquor" });

  return {
    props: {
      barrelbeer: data01.contents,
      bottlebeer: data02.contents,
      cocktailhardliquor: data03.contents,
    },
  };
}

export default function AllMenu({
  barrelbeer,
  bottlebeer,
  cocktailhardliquor,
}) {
  // console.log(barrelbeer);
  return (
    <div className={styles.body}>
      <div className={styles.pageTitle}>
        <h1>All Menu</h1>
      </div>

      {/* 🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺 */}

      <section className={styles.barrel}>
        <div className={styles.titleSection}>
          <h1>Barrel Beer</h1>
        </div>
        <div className={styles.menuSection}>
          {/* 🔥map関数 */}
          {barrelbeer.map((barrelbeer) => (
            <div key={barrelbeer.id} className={styles.menuItem}>
              <div className={styles.aboutBox}>
                <div className={styles.titleBox}>
                  <div className={styles.title}>{barrelbeer.title}</div>
                </div>
                <div className={styles.sentenceBox}>
                  <div className={styles.price}>{barrelbeer.price}</div>
                  <div
                    className={styles.product}
                    dangerouslySetInnerHTML={{
                      __html: `${barrelbeer.product}`,
                    }}
                  />
                </div>
              </div>
              <div className={styles.imageBox}>
                <Image
                  className={styles.image}
                  src={barrelbeer.image.url}
                  alt="image"
                  width="200"
                  height="200"
                />
              </div>
              <div className={styles.buttonBox}>
                <Link href={`/menu/barrelbeer/${barrelbeer.id}`}>
                  <a>More</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻 */}

      <section className={styles.bottle}>
        <div className={styles.titleSection}>
          <h1>Bottle Beer</h1>
        </div>
        <div className={styles.menuSection}>
          {/* 🔥map関数 */}
          {bottlebeer.map((bottlebeer) => (
            <div key={bottlebeer.id} className={styles.menuItem}>
              <div className={styles.aboutBox}>
                <div className={styles.titleBox}>
                  <div className={styles.title}>{bottlebeer.title}</div>
                </div>
                <div className={styles.sentenceBox}>
                  <div className={styles.price}>{bottlebeer.price}</div>
                  <div
                    className={styles.product}
                    dangerouslySetInnerHTML={{
                      __html: `${bottlebeer.product}`,
                    }}
                  />
                </div>
              </div>
              <div className={styles.imageBox}>
                <Image
                  className={styles.image}
                  src={bottlebeer.image.url}
                  alt="image"
                  width="200"
                  height="200"
                />
              </div>
              <div className={styles.buttonBox}>
                <Link href={`/menu/bottlebeer/${bottlebeer.id}`}>
                  <a>More</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🍷🍷🍷🍷🍷🍷🍷🍷🍷🍷🍷🍷🍷🍷🍷🍷 */}
      <section className={styles.cocktail}>
        <div className={styles.titleSection}>
          <h1>Barrel Beer</h1>
        </div>
        <div className={styles.menuSection}>
          {/* 🔥map関数 */}
          {cocktailhardliquor.map((cocktailhardliquor) => (
            <div key={cocktailhardliquor.id} className={styles.menuItem}>
              <div className={styles.aboutBox}>
                <div className={styles.titleBox}>
                  <div className={styles.title}>{cocktailhardliquor.title}</div>
                </div>
                <div className={styles.sentenceBox}>
                  <div className={styles.price}>{cocktailhardliquor.price}</div>
                  <div
                    className={styles.product}
                    dangerouslySetInnerHTML={{
                      __html: `${cocktailhardliquor.product}`,
                    }}
                  />
                </div>
              </div>
              <div className={styles.imageBox}>
                <Image
                  className={styles.image}
                  src={cocktailhardliquor.image.url}
                  alt="image"
                  width="200"
                  height="200"
                />
              </div>
              <div className={styles.buttonBox}>
                <Link
                  href={`/menu/cocktailhardliquor/${cocktailhardliquor.id}`}
                >
                  <a>More</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
