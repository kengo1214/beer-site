import { clientMenu } from "../../../libs/client";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/[id].module.scss";
import HeaderAnother from "../../../components/Header/headerAnother";
import { AiOutlineRollback } from "react-icons/ai";

//getStaticPaths(パスの指定)
export async function getStaticPaths() {
  const data = await clientMenu.get({ endpoint: "barrel-beer" });
  const paths = data.contents.map(
    (content) => `/menu/barrelbeer/${content.id}`
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
  const data = await clientMenu.get({ endpoint: "barrel-beer", contentId: id });

  return {
    props: {
      barrelbeer: data,
    },
  };
}

export default function MoreInformation({ barrelbeer }) {
  return (
    <div className={styles.body}>
      <HeaderAnother />
      <main className={styles.barrelMain}>
        <div className={styles.pageTitle}>
          <h1>All Menu - Barrel Beer -</h1>
        </div>

        {/* 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥 */}
        <div className={styles.box}>
          {/* 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦 */}

          <div className={styles.sentence}>
            <h1 className={styles.title}>{barrelbeer.title}</h1>

            <div className={styles.aboutBox}>
              <p className={styles.price}>{barrelbeer.price}</p>
              <div
                className={styles.product}
                dangerouslySetInnerHTML={{
                  __html: `${barrelbeer.product}`,
                }}
              />
            </div>
          </div>

          {/* 🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧 */}

          <div className={styles.detailBox}>
            <div
              className={styles.detail}
              dangerouslySetInnerHTML={{
                __html: `${barrelbeer.detail}`,
              }}
            />
          </div>

          {/* 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩 */}

          <div className={styles.image}>
            <Image
              src={barrelbeer.image.url}
              layout="fill"
              objectFit="contain"
              alt="image"
            />
          </div>
        </div>

        <div className={styles.buttonBox}>
          <Link href="/menu/all-menu/#barrel">
            <a>
              <AiOutlineRollback size={20} className={styles.icon} />
              Back
            </a>
          </Link>
        </div>
      </main>

      <footer>
        <p>No Beer No Life Tokyo 2022</p>
      </footer>
    </div>
  );
}
