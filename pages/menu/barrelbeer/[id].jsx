import { clientMenu } from "../../../libs/client";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/[id].module.scss";
import HeaderAnother from "../../../components/Header/headerAnother";
import { AiOutlineRollback } from "react-icons/ai";

import { useRouter } from "next/router";

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
  const router = useRouter();

  // console.log(barrelbeer); //🔥🔥🔥

  return (
    <div className={styles.body}>
      <HeaderAnother />
      <div className={styles.barrelMain}>
        <div className={styles.pageTitle}>
          <h1>All Menu - Barrel Beer -</h1>
        </div>
        <main>
          <div className={styles.box}>
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

            <div
              className={styles.detail}
              dangerouslySetInnerHTML={{
                __html: `${barrelbeer.detail}`,
              }}
            />

            <div className={styles.image}>
              <Image
                src={barrelbeer.image.url}
                layout="fill"
                objectFit="contain"
                alt="image"
              />
            </div>
          </div>
        </main>

        <div className={styles.button} onClick={() => router.back()}>
          <AiOutlineRollback size={20} className={styles.icon} />
          Back
        </div>
      </div>

      <footer>
        <p>No Beer No Life Tokyo 2022</p>
      </footer>
    </div>
  );
}
