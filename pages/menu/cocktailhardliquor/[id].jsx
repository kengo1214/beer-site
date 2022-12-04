import { clientMenu } from "../../../libs/client";
// import { client } from "../../../libs/client";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/[id].module.scss";
import HeaderAnother from "../../../components/Header/headerAnother";
import { AiOutlineRollback } from "react-icons/ai";

//getStaticPaths(パスの指定)
export async function getStaticPaths() {
  const data = await clientMenu.get({ endpoint: "cocktail-and-hard-liquor" });
  const paths = data.contents.map(
    (content) => `/menu/cocktailhardliquor/${content.id}`
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
  const data = await clientMenu.get({
    endpoint: "cocktail-and-hard-liquor",
    contentId: id,
  });

  return {
    props: {
      cocktail: data,
    },
  };
}

export default function MoreInformation({ cocktail }) {
  return (
    <div className={styles.body}>
      <HeaderAnother />
      <main className={styles.barrelMain}>
        <div className={styles.pageTitleCocktail}>
          <h1>All Menu </h1>
          <h1>- Cocktail and Hardliquor -</h1>
        </div>

        {/* 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥 */}
        <div className={styles.box}>
          {/* 🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦 */}

          <div className={styles.sentence}>
            <h1 className={styles.title}>{cocktail.title}</h1>

            <div className={styles.aboutBox}>
              <p className={styles.price}>{cocktail.price}</p>
              <div
                className={styles.product}
                dangerouslySetInnerHTML={{
                  __html: `${cocktail.product}`,
                }}
              />
            </div>
          </div>

          {/* 🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧 */}

          <div className={styles.detailBox}>
            <div
              className={styles.detail}
              dangerouslySetInnerHTML={{
                __html: `${cocktail.detail}`,
              }}
            />
          </div>

          {/* 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩 */}

          <div className={styles.image}>
            <Image
              src={cocktail.image.url}
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
// export default function MoreInformation({ cocktail }) {
//   return (
//     <div className={styles.body}>
//       <HeaderAnother />
//       <main className={styles.cocktailMain}>
//         <div className={styles.pageTitleCocktail}>
//           <h1>All Menu </h1>
//           <h1>- Cocktail and Hardliquor -</h1>
//         </div>
//         <div className={styles.box}>
//           <div className={styles.sentence}>
//             <h1 className={styles.title}>{cocktail.title}</h1>

//             <div className={styles.aboutBox}>
//               <p className={styles.price}>{cocktail.price}</p>
//               <div
//                 className={styles.product}
//                 dangerouslySetInnerHTML={{
//                   __html: `${cocktail.product}`,
//                 }}
//               />
//             </div>

//             <div
//               className={styles.detail}
//               dangerouslySetInnerHTML={{
//                 __html: `${cocktail.detail}`,
//               }}
//             />
//           </div>

//           <div className={styles.image}>
//             <Image
//               src={cocktail.image.url}
//               layout="fill"
//               objectFit="contain"
//               alt="image"
//             />
//           </div>
//         </div>

//         <div className={styles.buttonBox}>
//           <Link href="/menu/all-menu/#cocktail">
//             <a>
//               <AiOutlineRollback size={20} className={styles.icon} />
//               Back
//             </a>
//           </Link>
//         </div>
//       </main>

//       <footer>
//         <p>No Beer No Life Tokyo 2022</p>
//       </footer>
//     </div>
//   );
// }
