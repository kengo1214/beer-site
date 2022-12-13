import Image from "next/image";
import Link from "next/link";
import { clientBlog } from "../libs/client";
import { groupBy } from "../libs/util";
import styles from "../styles/blog.module.scss";
import HeaderAnother from "../components/Header/headerAnother";

export const getStaticProps = async () => {
  //ニュース記事の取得
  const data = await clientBlog.get({
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
    <>
      <HeaderAnother />
      <div className={styles.body}>
        <div className={styles.pageTitle}>
          <div className={styles.title}>
            <h4>ブログ</h4>
            <h1>Blog</h1>
          </div>
        </div>
        <section>
          <div className={styles.title}>
            <h4>最新のブログ</h4>
            <h1>Latest Blog</h1>
          </div>

          <main>
            <article>
              {news.map((news) => (
                <div key={news.id} className={styles.article}>
                  <div className={styles.sentenceBox}>
                    <h1 className={styles.ArticleTitle}>{news.title}</h1>
                    <div className={styles.publishedAt}>{news.publishedAt}</div>
                    <div
                      className={styles.sentence}
                      dangerouslySetInnerHTML={{ __html: `${news.body}` }}
                    />
                  </div>
                  <div className={styles.imageBox}>
                    <Image
                      src={news.image.url}
                      layout="fill"
                      objectFit="cover"
                      alt="image"
                    />
                  </div>
                </div>
              ))}
            </article>
            <footer>
              <p>No Beer No Life Tokyo 2022</p>
            </footer>
          </main>
          <nav>
            <div className={styles.title}>
              <h4>アーカイブ</h4>
              <h1>Archive</h1>
            </div>
            <ul>
              {Object.keys(monthlyIndex).map((index) => (
                <li key={index}>
                  <Link href={`archive/${index}`}>
                    <a>
                      {index.split("_")[0] + "年" + index.split("_")[1] + "月"}
                      （{monthlyIndex[index].length + "件"}）
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </div>
    </>
  );
}
