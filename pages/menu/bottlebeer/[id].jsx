import { clientMenu } from "../../../libs/client";
// import { client } from "../../../libs/client";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/[id].module.scss";
import HeaderAnother from "../../../components/Header/headerAnother";
import { AiOutlineRollback } from "react-icons/ai";

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

export default function MoreInformation({ bottlebeer }) {
  return (
    <div className={styles.body}>
      <HeaderAnother />
      <mdiv className={styles.barrelMain}>
        <div className={styles.pageTitle}>
          <h1>All Menu - Bottle Beer -</h1>
        </div>
        <main>
          <div className={styles.box}>
            {/* 🟥🟥🟥 */}
            <h1 className={styles.title}>{bottlebeer.title}</h1>
            {/* 🟦🟦🟦 */}
            <div className={styles.aboutBox}>
              <p className={styles.price}>{bottlebeer.price}</p>
              <div
                className={styles.product}
                dangerouslySetInnerHTML={{
                  __html: `${bottlebeer.product}`,
                }}
              />
            </div>

            {/* 🟩🟩🟩 */}
            <div
              className={styles.detail}
              dangerouslySetInnerHTML={{
                __html: `${bottlebeer.detail}`,
              }}
            />

            {/* 🟧🟧🟧*/}
            <div className={styles.image}>
              <Image
                src={bottlebeer.image.url}
                layout="fill"
                objectFit="contain"
                alt="image"
              />
            </div>
          </div>
        </main>

        <div className={styles.buttonBox}>
          <Link href="/menu/all-menu/#barrel">
            <a>
              <AiOutlineRollback size={20} className={styles.icon} />
              Back
            </a>
          </Link>
        </div>
      </mdiv>

      <footer>
        <p>No Beer No Life Tokyo 2022</p>
      </footer>
    </div>
  );
}
