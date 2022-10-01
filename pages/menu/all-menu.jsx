import styles from "../../styles/all-menu.module.scss";
import { client } from "../../libs/client";
import Image from "next/image";
import Link from "next/link";

//SSG(getStaticProps)

export async function getStaticProps() {
  const data01 = await client.get({ endpoint: "barrel-beer" });
  const data02 = await client.get({ endpoint: "bottled-beer" });
  const data03 = await client.get({ endpoint: "cocktail-and-hardliquor" });
  // console.log(data01.contents);

  return {
    props: {
      barrelbeer: data01.contents,
      bottlebeer: data02.contents,
      cocktailhardliquor: data03.contents,
    },
  };
}

export default function AllMenu({
  barrelbeer,
  bottlebeer,
  cocktailhardliquor,
}) {
  return (
    <div className={styles.body}>
      <section className={styles.section}>
        <h1 className={styles.h1}>Barrel Beer</h1>

        <div className={styles.border}>
          {barrelbeer.map((barrelbeer) => (
            <div className={styles.box} key={barrelbeer.id}>
              <div className={styles.about}>
                <div>{barrelbeer.id}</div>
                <div className={styles.aboutTitle}>{barrelbeer.title}</div>
                <p className={styles.productTitle}>{barrelbeer.product}</p>
                <p>{barrelbeer.price}</p>
              </div>
              <Image
                className={styles.image}
                src={barrelbeer.image.url}
                width="500px"
                height="500px"
                alt="beer"
              />
              <Link href={`/menu/barrelbeer/${barrelbeer.id}`}>
                <a className={styles.a}>More</a>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h1 className={styles.h1}>Bottle Beer</h1>
        <div className={styles.border}>
          {bottlebeer.map((bottlebeer) => (
            <div className={styles.box} key={bottlebeer.id}>
              <div className={styles.about}>
                <div>{bottlebeer.id}</div>
                <div>{bottlebeer.title}</div>
                <div>{bottlebeer.price}</div>
                <p className={styles.productTitle}>{bottlebeer.product}</p>
              </div>
              <Image
                className={styles.image}
                src={bottlebeer.image.url}
                width="500px"
                height="500px"
                alt="beer"
              />
              <Link href={`/menu/bottlebeer/${bottlebeer.id}`}>
                <a className={styles.a}>More</a>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h1 className={styles.h1}>Cocktail and Hardliquor</h1>
        <div className={styles.border}>
          {cocktailhardliquor.map((cocktailhardliquor) => (
            <div className={styles.box} key={cocktailhardliquor.id}>
              <div className={styles.about}>
                <div>{cocktailhardliquor.id}</div>
                <div>{cocktailhardliquor.title}</div>
                <div>{cocktailhardliquor.price}</div>
                <p className={styles.productTitle}>
                  {cocktailhardliquor.product}
                </p>
              </div>
              <Image
                className={styles.image}
                src={cocktailhardliquor.image.url}
                width="500px"
                height="500px"
                alt="beer"
              />
              <Link href={`/menu/cocktailhardliquor/${cocktailhardliquor.id}`}>
                <a className={styles.a}>More</a>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// import styles from "../../styles/all-menu.module.scss";
// import { client } from "../../libs/client";
// import Image from "next/image";

// //SSG(getStaticProps)

// export async function getStaticProps() {
//   const data01 = await client.get({ endpoint: "barrel-beer" });
//   const data02 = await client.get({ endpoint: "bottled-beer" });
//   const data03 = await client.get({ endpoint: "cocktail-and-hardliquor" });
//   // console.log(data01);
//   return {
//     props: {
//       barrelbeer: data01.contents,
//       bottlebeer: data02.contents,
//       cocktailhardliquor: data03.contents,
//     },
//   };
// }

// export default function AllMenu({
//   barrelbeer,
//   bottlebeer,
//   cocktailhardliquor,
// }) {
//   return (
//     <div className={styles.body}>
//       <section className={styles.section}>
//       <h1>Barrel Beer</h1>
//       <div></div>
//         {barrelbeer.map((barrelbeer) => (
//           <div className={styles.box} key={barrelbeer.id}>
//             <div className={styles.about}>
//               <div>{barrelbeer.id}</div>
//               <div>{barrelbeer.title}</div>
//               <div>{barrelbeer.price}</div>
//             </div>
//             <Image
//               className={styles.image}
//               src={barrelbeer.image.url}
//               width="500px"
//               height="500px"
//               alt="beer"
//             />
//           </div>
//         ))}
//       </section>
//       <h1>Bottle Beer</h1>
//       <section className={styles.section}>
//         {bottlebeer.map((bottlebeer) => (
//           <div className={styles.box} key={bottlebeer.id}>
//             <div className={styles.about}>
//               <div>{bottlebeer.id}</div>
//               <div>{bottlebeer.title}</div>
//               <div>{bottlebeer.price}</div>
//             </div>
//             <Image
//               className={styles.image}
//               src={bottlebeer.image.url}
//               width="500px"
//               height="500px"
//               alt="beer"
//             />
//           </div>
//         ))}
//       </section>
//         <h1>Cocktail and Hardliquor</h1>
//       <section className={styles.section}>
//         {cocktailhardliquor.map((cocktailhardliquor) => (
//           <div className={styles.box} key={cocktailhardliquor.id}>
//             <div className={styles.about}>
//               <div>{cocktailhardliquor.id}</div>
//               <div>{cocktailhardliquor.title}</div>
//               <div>{cocktailhardliquor.price}</div>
//             </div>
//             <Image
//               className={styles.image}
//               src={cocktailhardliquor.image.url}
//               width="500px"
//               height="500px"
//               alt="beer"
//             />
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }
