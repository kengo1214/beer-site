import Image from "next/image";
import Link from "next/link";
import { clientBlog } from "../libs/client";
import { groupBy } from "../libs/util";
import styles from "../styles/blog.module.scss";
import HeaderAnother from "../components/Header/headerAnother";
import BlogNav from "../components/BlogNav/BlogNav";

import { BsChevronDoubleLeft } from "react-icons/bs";

import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

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

export default function Blog({ news, monthlyIndex }) {
  return (
    <>
      <HeaderAnother />
      <div className={styles.body}>
        <BlogNav />
        <main>
          <section className={styles.mainSection}>
            <div className={styles.sectionTitle}>
              <div className={styles.title}>
                <h1>Latest Blog</h1>
              </div>
            </div>

            <div className={styles.articleSection}>
              <article className={styles.outLine} id="top">
                <div className={styles.articleBox}>
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
                        <BsChevronDoubleLeft
                          className={styles.icon}
                          size={20}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                {/* 💊💊💊💊💊💊💊💊💊💊 */}
                <div className={styles.scrollSection}>
                  <div className={styles.scrollBox}>
                    <Link href="#top">
                      <BsFillArrowUpCircleFill
                        className={styles.scrollTop}
                        size={36}
                      />
                    </Link>
                    <Link href="#down">
                      <BsFillArrowDownCircleFill
                        className={styles.scrollDown}
                        size={36}
                      />
                    </Link>
                  </div>
                </div>
                {/* 💊💊💊💊💊💊💊💊💊💊 */}

                {/* ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️ */}

                <div className={styles.scrollSectionSecond}>
                  <div className={styles.scrollBox}>
                    <Link href="#top">
                      <BsFillArrowUpCircleFill
                        className={styles.scrollTop}
                        size={32}
                      />
                    </Link>
                    <Link href="#down">
                      <BsFillArrowDownCircleFill
                        className={styles.scrollDown}
                        size={32}
                      />
                    </Link>
                  </div>
                </div>
                {/* ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️ */}
              </article>
              <footer id="down">No Beer No Life Tokyo 2022</footer>
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
                <Link href={`archive/${index}`}>
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