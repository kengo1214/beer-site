import { client } from "../../../libs/client";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/[id].module.scss";

//getStaticProps（情報取得）
export async function getStaticProps(context) {
  const id = context.params.id;
  // console.log(id, "動的なidの取得に成功");
  const data = await client.get({ endpoint: "barrel-beer", contentId: id });

  return {
    props: {
      barrelbeer: data,
    },
  };
}

//getStaticPaths(パスの指定)
export async function getStaticPaths() {
  const data = await client.get({ endpoint: "barrel-beer" });
  const paths = data.contents.map(
    (content) => `/menu/barrelbeer/${content.id}`
  );

  return {
    paths,
    fallback: false,
  };
}

export default function MoreInformation({ barrelbeer }) {
  return (
    <div className={styles.body}>
      <div className={styles.main}>
        <div>{barrelbeer.id}</div>
        <h1>{barrelbeer.title}</h1>
        <p>{barrelbeer.product}</p>
        <p className={styles.detail}>{barrelbeer.detail}</p>

        <Image
          className={styles.image}
          src={barrelbeer.image.url}
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
