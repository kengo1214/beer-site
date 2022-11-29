import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/all-menu.module.scss";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { clientMenu } from "../../libs/client";
import HederAnother from "../../components/Header/headerAnother";
import MenuNav from "../../components/Menu-Nav/menu-nav";

export default function AllMenu({
  barrelbeer,
  bottlebeer,
  cocktailhardliquor,
}) {
  return (
    <div className={styles.body}>
      <HederAnother />
      <MenuNav className={styles.menuNav} />

      {/* 🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺 */}
      <section className={styles.barrel} id="barrel">

        <div className={styles.titleSection}>
          <h1>Barrel Beer</h1>
        </div>
        
        <div className={styles.menuSection}>
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
                <div className={styles.image}>
                  <Image
                    src={barrelbeer.image.url}
                    alt="image"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.buttonBox}>
                <Link href={`/menu/barrelbeer/${barrelbeer.id}`}>
                  <a>
                    More
                    <AiOutlineDoubleRight size={18} className={styles.icon} />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻 */}

      <section className={styles.bottle} id="bottle">
        <div className={styles.titleSection}>
          <h1>Bottle Beer</h1>
        </div>
        <div className={styles.menuSection}>
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
                <div className={styles.image}>
                  <Image
                    src={bottlebeer.image.url}
                    alt="image"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.buttonBox}>
                <Link href={`/menu/bottlebeer/${bottlebeer.id}`}>
                  <a>
                    More
                    <AiOutlineDoubleRight size={18} className={styles.icon} />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🍷🍷🍷🍷🍷🍷🍷🍷🍷🍷🍷🍷🍷🍷🍷🍷 */}
      <section className={styles.cocktail} id="cocktail">
        <div className={styles.titleSection}>
          <h1>Cocktail and Hardliquor</h1>
        </div>
        <div className={styles.menuSection}>
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
                <div className={styles.image}>
                  <Image
                    src={cocktailhardliquor.image.url}
                    alt="image"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.buttonBox}>
                <Link
                  href={`/menu/cocktailhardliquor/${cocktailhardliquor.id}`}
                >
                  <a>
                    More
                    <AiOutlineDoubleRight size={18} className={styles.icon} />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>No Beer No Life Tokyo</p>
      </footer>
    </div>
  );
}

//SSG(getStaticProps)
export async function getStaticProps() {
  const data01 = await clientMenu.get({ endpoint: "barrel-beer" });
  const data02 = await clientMenu.get({ endpoint: "bottle-beer" });
  const data03 = await clientMenu.get({ endpoint: "cocktail-and-hard-liquor" });

  return {
    props: {
      barrelbeer: data01.contents,
      bottlebeer: data02.contents,
      cocktailhardliquor: data03.contents,
    },
  };
}