import Image from "next/image";
import Link from "next/link";
import { client00 } from "../libs/client";
import { groupBy } from "../libs/util";
import styles from "../styles/blog.module.scss";
import HeaderAnother from "../components/Header/headerAnother";

export const getStaticProps = async () => {
  //ニュース記事の取得
  const data = await client00.get({
    endpoint: "beer-blog",
  });

  //月別アーカイブ
  const monthlyIndex = groupBy(data.contents);

  return {
    props: {
      news: data.contents,
      monthlyIndex: monthlyIndex,
    },
  };
};

export default function News({ news, monthlyIndex }) {
  return (
    <div className={styles.body}>
      <HeaderAnother />
      <div className={styles.header}>
        <h1>Blog</h1>
      </div>

      <div className={styles.left}></div>
      <main className={styles.main}>
        <div className={styles.mainTitle}>
          <h1>最新のブログ</h1>
        </div>
        {news.map((news) => (
          <div className={styles.newsBox} key={news.id}>
            <article className={styles.news}>
              <h1>{news.title}</h1>
              <p className={styles.time}>{news.publishedAt}</p>
              <div
                className={styles.sentence}
                dangerouslySetInnerHTML={{ __html: `${news.body}` }}
              />
            </article>
            <div className={styles.imageBox}>
              <Image
                className={styles.image}
                src={news.image.url}
                width="800px"
                height="300px"
                alt="記事画像"
              />
            </div>
          </div>
        ))}
        <div className={styles.button}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/news">
            <a>Top</a>
          </Link>
        </div>
      </main>

      <div className={styles.archive}>
        <div className={styles.archiveTitle}>
          <h1>月別アーカイブ</h1>
        </div>

        <ul className={styles.ul}>
          {Object.keys(monthlyIndex).map((index) => (
            <li key={index} className={styles.li}>
              <Link href={`archive/${index}`} className={styles.link}>
                <a className={styles.a}>
                  {index.split("_")[0] + "年" + index.split("_")[1] + "月"}（
                  {monthlyIndex[index].length + "件"}）
                  {/* <div className={styles.borderButtom}></div> */}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}
