export default function News() {
  return (
    <div>
      <h1>Coming soon ...</h1>
    </div>
  );
}

//＃＃＃＃＃＃＃＃初期状態に戻したい場合は以下＃＃＃＃＃＃＃＃

// import styles from "../styles/news.module.scss";
// import Image from "next/image";
// import Link from "next/link";
// import { client00 } from "../libs/client";
// import { groupBy } from "../libs/util";

// export async function getStaticProps() {
//   const news00 = await client00.get({ endpoint: "news" });
//   const monthlyIndex = groupBy(news00.contents);

//   // console.log(news00.contents);

//   return {
//     props: {
//       News: news00.contents,
//       monthlyIndex: monthlyIndex,
//     },
//   };
// }

// export default function News({ News, monthlyIndex }) {
//   // console.log(News.id);
//   console.log(News[0].image);
//   return (
//     <div>
//       {News.map((News) => (
//         <div key={News.id} className={styles.main}>
//           <div>{News.title}</div>
//           <div>{News.body}</div>
//           {/* <Image src={News.image.url} width="300px" height="300px" alt="news" /> */}
//         </div>
//       ))}
//     </div>
//   );
// }
