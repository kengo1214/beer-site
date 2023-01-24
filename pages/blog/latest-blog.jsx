import { clientBlog } from "../../libs/client";
import { groupBy } from "../../libs/util";
import styles from "../../styles/latest-blog.module.scss";
import Link from "next/link";
import Image from "next/image";
import HeaderAnother from "../../components/Header/headerAnother";
import BlogNav from "../../components/BlogNav/BlogNav";

import dayjs from "dayjs";

import { BsChevronDoubleLeft } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";

import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export const getStaticProps = async () => {
  const data = await clientBlog.get({ endpoint: "beer-blog" });

  const timeBefore = data.contents.publishedAt;
  // console.log(timeBefore); //🔥🔥🔥

  const timeAfter = dayjs.utc(timeBefore).tz("Asia/Tokyo").format("YYYY-MM-DD");

  // console.log(timeAfter);

  // const timeAfter = dayjs(timeBefore).format()

  const monthlyIndex = groupBy(data.contents);

  return {
    props: {
      blog: data.contents,
      monthlyIndex: monthlyIndex,
    },
  };
};

export default function LatestBlog({ blog, monthlyIndex }) {
  return (
    <>
      <HeaderAnother />
      <div className={styles.body}>
        <BlogNav />

        <main>
          <section className={styles.mainSection}>
            <div className={styles.sectionTitle}>
              <div className={styles.title}>
                <h4>最新のブログ</h4>
                <h1>Latest Blog</h1>
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
                <Link href={`/archive/${index}`}>
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
