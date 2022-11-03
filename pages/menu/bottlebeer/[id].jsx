import { clientMenu } from "../../../libs/client";
// import { client } from "../../../libs/client";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/[id].module.scss";

//getStaticPaths(パスの指定)
export async function getStaticPaths() {
  const data = await clientMenu.get({ endpoint: "bottle-beer" });
  const paths = data.contents.map(
    (content) => `/menu/bottlebeer/${content.id}`
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
  const data = await clientMenu.get({ endpoint: "bottle-beer", contentId: id });

  return {
    props: {
      bottlebeer: data,
    },
  };
}

export default function MoreInformation({ bottlebeer }) {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <h1>All Menu -Bottle Beer- </h1>
      </div>
      <div className={styles.section}>
        <div className={styles.main}>
          <div className={styles.sentenceBox}>
            <h1 className={styles.title}>{bottlebeer.title}</h1>
            <div className={styles.price}>{bottlebeer.price}</div>
            <div
              className={styles.product}
              dangerouslySetInnerHTML={{
                __html: `${bottlebeer.product}`,
              }}
            />
            <div
              className={styles.detail}
              dangerouslySetInnerHTML={{
                __html: `${bottlebeer.detail}`,
              }}
            />
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
            <Link href="/menu/all-menu">
              <a>Back</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
