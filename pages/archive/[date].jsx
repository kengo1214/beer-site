import styles from "../../styles/archive.module.scss";
import Link from "next/link";
import Image from "next/image";
import { clientBlog } from "../../libs/client";
import { groupBy } from "../../libs/util";
import HeaderAnother from "../../components/Header/headerAnother";
import BlogNav from "../../components/BlogNav/BlogNav";

import { BsChevronDoubleLeft } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import dayjs from "dayjs";

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

  // const english = dayjs(month).format("MMMM YYYY"); //🔥🔥🔥
  // console.log(english); //🔥🔥🔥

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
  });

  const monthlyIndex = groupBy(archiveData.contents);

  const titleEnglish = dayjs(month).format("MMMM"); //🔥🔥🔥

  return {
    props: {
      title: `${year}年${month}月`,
      titleEnglish: ` ${titleEnglish} ${year}`,
      blog: data.contents,
      monthlyIndex: monthlyIndex,
    },
  };
};

export default function BlogId({ title, titleEnglish, blog, monthlyIndex }) {
  return (
    <>
      <HeaderAnother />
      <div className={styles.body}>
        <BlogNav />

        <main>
          <section className={styles.mainSection}>
            <div className={styles.sectionTitle}>
              <div className={styles.title}>
                <h4>{title}</h4>
                <h1>{titleEnglish}</h1>
              </div>

              {/* 💊💊💊💊💊💊💊💊💊 */}
              <div className={styles.scrollButtonHidden}>
                <Link href="#top">
                  <BsFillArrowUpCircleFill
                    className={styles.scrollTop}
                    size={25}
                  />
                </Link>
                <Link href="#down">
                  <BsFillArrowDownCircleFill
                    className={styles.scrollDown}
                    size={25}
                  />
                </Link>
              </div>
              {/* 💊💊💊💊💊💊💊💊💊 */}
            </div>

            <div className={styles.articleSection}>
              <article className={styles.outLine} id="top">
                <div className={styles.articleBox}>
                  {blog.map((blog) => (
                    <article className={styles.articleItem} key={blog.id}>
                      <div className={styles.sentenceBox}>
                        <div className={styles.items}>
                          <h1 className={styles.articleTitle}>{blog.title}</h1>
                          <div className={styles.publishedAt}>
                            {blog.publishedAt}
                          </div>
                        </div>

                        <div className={styles.moreButtonBox}>
                          <div className={styles.publishedAtHidden}>
                            {blog.publishedAt}
                          </div>

                          <Link href={`/blog/${blog.id}`}>
                            <div className={styles.moreButton}>
                              <a>More</a>
                              <BsChevronDoubleRight
                                className={styles.icon}
                                size={20}
                              />
                            </div>
                          </Link>

                          <Link href={`/blog/${blog.id}`}>
                            <div className={styles.moreButtonHidden}>
                              <a>More</a>
                              <BsChevronDoubleRight
                                className={styles.icon}
                                size={15}
                              />
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div className={styles.imageBox}>
                        <div className={styles.image}>
                          <Image
                            src={blog.image.url}
                            layout="fill"
                            objectFit="cover"
                            alt="image"
                          />
                        </div>
                      </div>
                    </article>
                  ))}

                  <div className={styles.homeButtonBox}>
                    <Link href="/">
                      <div className={styles.homeButton}>
                        <a>Home</a>
                        <BsChevronDoubleLeft
                          className={styles.icon}
                          size={20}
                        />
                      </div>
                    </Link>
                  </div>
                </div>

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
              </article>
              <footer id="down">
                <p>No Beer No Life Tokyo 2022</p>
              </footer>
            </div>
          </section>
        </main>

        {/* 💡💡💡💡💡💡💡💡💡💡💡💡💡 */}
        <section className={styles.navSection}>
          <div className={styles.navSectionTitle}>
            <div className={styles.title}>
              <h4>アーカイブ</h4>
              <h1>Archive</h1>
            </div>
          </div>
          <ul>
            {Object.keys(monthlyIndex).map((index) => (
              <li key={index}>
                <Link href={`${index}`}>
                  {/* <Link href={`archive/${index}`}> */}
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
