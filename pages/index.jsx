import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Contact from "../components/contact/contact";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Image
          className={styles.image}
          src="/image/mainHeader.jpg"
          width="2500px"
          height="400px"
          alt="main-image"
          priority="false"
        />
      </header>
      <section className={styles.articleBox}>
        <article className={styles.article}>
          <p>コンセプト</p>
          <h1>Concept</h1>
          <p>
            コンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプト
          </p>
        </article>
        <article className={styles.article}>
          <p>オーナーからのメッセージ</p>
          <h1>Message from the owner</h1>
          <p>
            メッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージ
          </p>
        </article>
      </section>
      <section className={styles.section}>
        <div className={styles.imageBox}>
          <div className={styles.imageItem}>
            <Link href="/menu/all-menu">
              <Image
                className={styles.image}
                src="/image/menu.jpg"
                width="300"
                height="300"
                alt="menu-image"
              />
            </Link>

            <Link href="/menu/all-menu">
              <p className={styles.imageTitle}>Menu</p>
            </Link>
            {/* <p className={styles.imageTitle}>Menu</p> */}
          </div>
          <div className={styles.imageItem}>
            <Link href="/news">
              <Image
                className={styles.image}
                src="/image/news.jpg"
                width="300"
                height="300"
                alt="menu-image"
              />
            </Link>
            <Link href="/news">
              <p className={styles.imageTitle}>News</p>
            </Link>
          </div>
          <div className={styles.imageItem}>
            <Link href="/access">
              <Image
                className={styles.image}
                src="/image/access.jpg"
                width="300"
                height="300"
                alt="menu-image"
              />
            </Link>
            <Link href="/access">
              <p className={styles.imageTitle}>Access</p>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.access}>
        <p>アクセス</p>
        <h1>Access</h1>
        <div className={styles.main}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.2294450324493!2d139.7078890156115!3d35.64671823947073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b4046e3f71d%3A0x85ab1d92ef294edf!2z5oG15q-U5a-_6aeF!5e0!3m2!1sja!2sjp!4v1664439285186!5m2!1sja!2sjp"
            width="500"
            height="400"
            style={{ border: 0 }}
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className={styles.address}>
            <div className={styles.addressItem}>
              <p className={styles.addressTitle}>住所</p>
              <p>〒150-0000 東京都渋谷区恵比寿◯-◯-◯ ◯◯ビル1F</p>
            </div>

            <div className={styles.addressItem}>
              <p className={styles.addressTitle}>電話番号</p>
              <p>000-1234-5678</p>
            </div>

            <div className={styles.addressItem}>
              <p className={styles.addressTitle}>営業時間</p>
              <p>平日 15:00~23:00　土日祝13:00~23:00</p>
            </div>

            <div className={styles.addressItem}>
              <p className={styles.addressTitle}>最寄駅</p>
              <div>
                <p>JR山手線・埼京線・湘南新宿ライン「恵比寿駅」徒歩3分</p>
                <p>東京メトロ日比谷線「恵比寿駅」徒歩3分</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
}
