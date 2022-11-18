import styles from "../../styles/archive.module.scss";
import Link from "next/link";
import Image from "next/image";
import { client00 } from "../../libs/client";
import { groupBy } from "../../libs/util";
import HeaderAnother from "../../components/Header/headerAnother";

//（1）パスを生成
export const getStaticPaths = async () => {
  const data = await client00.get({ endpoint: "beer-blog" });
  const monthlyIndex = groupBy(data.contents, "publishedAt");
  const paths = Object.keys(monthlyIndex).map((index) => `/archive/${index}`);
  return { paths, fallback: false };
};

//（2）該当月のタイトル
export const getStaticProps = async (context) => {
  const date = context.params.date;
  const year = date.split("_")[0];
  const month = date.split("_")[1];

  // microCMSのfiltersクエリは >= を表現できないので開始時刻は1ミリ秒引いておく
  const startOfMonthTmp = new Date(year, month - 1, 1);
  const startOfMonth = new Date(startOfMonthTmp.getTime() - 1);
  const endOfMonth = new Date(year, month, 0);

  // filtersクエリで該当月の記事のみを取得
  const filters = `publishedAt[greater_than]${startOfMonth.toISOString()}[and]publishedAt[less_than]${endOfMonth.toISOString()}`;

  //（3）ニュース
  const data = await client00.get({
    endpoint: "beer-blog",
    queries: {
      filters: filters,
    },
  });

  //（4）月別アーカイブ

  const archiveData = await client00.get({
    endpoint: "beer-blog",
    // queries: { fields: "publishedAt", limit: 3000 },
  });
  const monthlyIndex = groupBy(archiveData.contents);

  return {
    props: {
      title: `${year}年${month}月の記事一覧`,
      news: data.contents,
      monthlyIndex: monthlyIndex,
    },
  };
};

export default function BlogId({ title, news, monthlyIndex }) {
  return (
    <div className={styles.body}>
      <HeaderAnother />
      <div className={styles.header}>
        <h1>Blog</h1>
      </div>

      <div className={styles.left}></div>
      <main className={styles.main}>
        <div className={styles.mainTitle}>
          <h1>{title}</h1>
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
              <Link href={`/archive/${index}`} className={styles.link}>
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
