import { clientMenu } from "../../../libs/client";
// import { client } from "../../../libs/client";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/[id].module.scss";

//getStaticPaths(パスの指定)
export async function getStaticPaths() {
  const data = await clientMenu.get({ endpoint: "cocktail-and-hard-liquor" });
  const paths = data.contents.map(
    (content) => `/menu/cocktailhardliquor/${content.id}`
  );

  return {
    paths,
    fallback: false,
  };
}

//getStaticProps（情報取得）
export async function getStaticProps(context) {
  const id = context.params.id;
  // console.log(id, "動的なidの取得に成功");
  const data = await clientMenu.get({
    endpoint: "cocktail-and-hard-liquor",
    contentId: id,
  });

  return {
    props: {
      cocktail: data,
    },
  };
}

export default function MoreInformation({ cocktail }) {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <h1>All Menu -Bottle Beer- </h1>
      </div>
      <div className={styles.section}>
        <div className={styles.main}>
          <div className={styles.sentenceBox}>
            <h1 className={styles.title}>{cocktail.title}</h1>
            <div className={styles.price}>{cocktail.price}</div>
            <div
              className={styles.product}
              dangerouslySetInnerHTML={{
                __html: `${cocktail.product}`,
              }}
            />
            <div
              className={styles.detail}
              dangerouslySetInnerHTML={{
                __html: `${cocktail.detail}`,
              }}
            />
          </div>
          <div className={styles.imageBox}>
            <div className={styles.image}>
              <Image
                src={cocktail.image.url}
                alt="image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={styles.buttonBox}>
            <Link href="/menu/all-menu">
              <a>Back</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

