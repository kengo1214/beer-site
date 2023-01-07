import styles from "../../styles/archive.module.scss";
import Link from "next/link";
import Image from "next/image";
import { clientBlog } from "../../libs/client";
import { groupBy } from "../../libs/util";
import HeaderAnother from "../../components/Header/headerAnother";
import BlogNav from "../../components/BlogNav/BlogNav";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { BsChevronDoubleUp } from "react-icons/bs";

//（1）パスを生成
export const getStaticPaths = async () => {
  const data = await clientBlog.get({ endpoint: "beer-blog" });
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
  const data = await clientBlog.get({
    endpoint: "beer-blog",
    queries: {
      filters: filters,
    },
  });

  //（4）月別アーカイブ
  const archiveData = await clientBlog.get({
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
    <>
      <HeaderAnother />

      <div className={styles.body}>
        <BlogNav />
        <main>
          <section className={styles.mainSection}>
            <div className={styles.sectionTitle}>
              <div className={styles.title}>
                
                <h1>{title}</h1>
              </div>
            </div>

            <div className={styles.articleSection}>
              <article className={styles.articleBox} id="blog">
                {news.map((news) => (
                  <article className={styles.articleItem} key={news.id}>
                    <div className={styles.sentenceBox}>
                      <h1 className={styles.articleTitle}>{news.title}</h1>
                      <div className={styles.publishedAt}>
                        {news.publishedAt}
                      </div>
                      <div
                        className={styles.sentence}
                        dangerouslySetInnerHTML={{ __html: `${news.body}` }}
                      />
                    </div>

                    <div className={styles.imageBox}>
                      <div className={styles.image}>
                        <Image
                          src={news.image.url}
                          layout="fill"
                          objectFit="cover"
                          alt="image"
                        />
                      </div>
                    </div>
                  </article>
                ))}

                <div className={styles.buttonBox}>
                  <Link href="/">
                    <div className={styles.button}>
                      <a>Home</a>
                      <BsChevronDoubleLeft className={styles.icon} />
                    </div>
                  </Link>
                  <Link href="#blog">
                    <div className={styles.button}>
                      <a>Top</a>
                      <BsChevronDoubleUp className={styles.icon} />
                    </div>
                  </Link>
                </div>
              </article>
              <footer>No Beer No Life Tokyo 2022</footer>
            </div>
          </section>
        </main>

        {/* 💡💡💡💡💡💡💡💡💡💡💡💡💡 */}
        <section className={styles.navSection}>
          <div className={styles.navSectionTitle}>
            <div className={styles.title}>
              <h1>Archive</h1>
            </div>
          </div>
          <ul>
            {Object.keys(monthlyIndex).map((index) => (
              <li key={index}>
                <Link href={`${index}`}>
                  <a>
                    {index.split("_")[0] + "年" + index.split("_")[1] + "月"}（
                    {monthlyIndex[index].length + "件"}）
                  </a>
                </Link>
              </li>
            ))}
            <li>
              <a>HOGE1</a>
            </li>
            <li>
              <a>HOGE2</a>
            </li>
            <li>
              <a>HOGE3</a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
