import { clientMenu } from "../../../libs/client";
// import { client } from "../../../libs/client";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/[id].module.scss";

export default function MoreInformation({ bottlebeer }) {
  return (
    <div className={styles.body}>
      <div className={styles.main}>
        <div>{bottlebeer.id}</div>
        <h1>{bottlebeer.title}</h1>
        <p>{bottlebeer.product}</p>
        <p className={styles.detail}>{bottlebeer.detail}</p>

        <Image
          className={styles.image}
          src={bottlebeer.image.url}
          width="300px"
          height="300px"
          alt="beer"
        />
      </div>
      <div className={styles.button}>
        <Link href="/menu/all-menu">
          <a className={styles.a}>戻る</a>
        </Link>
        <Link href="/">
          <a className={styles.a}>ホームに戻る</a>
        </Link>
      </div>
    </div>
  );
}

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
