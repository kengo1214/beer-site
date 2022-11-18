import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Contact from "../components/contact/contact";
import LinkSection from "../components/Link/link";
import Link from "next/link";
import Header from "../components/Header/header";

export default function Home() {
  return (
    <div className={styles.body} id="/">
      <Header />
      <section className={styles.headerSection}></section>

      <section className={styles.sentenceSection}>
        <div className={styles.sentence}>
          <div className={styles.titleBox}>
            <h4>コンセプト</h4>
            <h1>concept</h1>
          </div>
          <p>
            React
            は、インタラクティブなユーザインターフェイスの作成にともなう苦痛を取り除きます。アプリケーションの各状態に対応するシンプルなViewを設計するだけで、Reactはデータの変更を検知し、関連するコンポーネントだけを効率的に更新、描画します。宣言的なViewを用いてアプリケーションを構築することで、コードはより見通しが立ちやすく、デバッグのしやすいものになります。
          </p>
        </div>

        <div className={styles.sentence}>
          <div className={styles.titleBox}>
            <h4>メッセージ</h4>
            <h1>Message</h1>
          </div>
          <p>
            自分自身の状態を管理するカプセル化されたコンポーネントをまず作成し、これらを組み合わせることで複雑なユーザインターフェイスを構築します。コンポーネントのロジックは、TemplateではなくJavaScriptそのもので書くことができるので、様々なデータをアプリケーション内で簡単に取り回すことができ、かつDOMに状態を持たせないようにすることができます。
          </p>
        </div>
      </section>

      <LinkSection />

      <section className={styles.accessSection}>
        <div className={styles.titleBox}>
          <h4>アクセス</h4>
          <h1>Access</h1>
        </div>
        <div className={styles.accessBox}>
          <div className={styles.mapBox}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.2294450324493!2d139.7078890156115!3d35.64671823947073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b4046e3f71d%3A0x85ab1d92ef294edf!2z5oG15q-U5a-_6aeF!5e0!3m2!1sja!2sjp!4v1664439285186!5m2!1sja!2sjp"
              className={styles.mapSize}
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
          <div className={styles.addressBox}>
            <div className={styles.address}>
              <p className={styles.title}>住所</p>
              <p className={styles.item}>
                〒150-0000 東京都渋谷区恵比寿1-2-3 エビスビル1F
              </p>
            </div>
            <div className={styles.address}>
              <p className={styles.title}>電話番号</p>
              <p className={styles.item}>000-1234-5678</p>
            </div>
            <div className={styles.address}>
              <p className={styles.title}>営業時間</p>
              <p className={styles.item}>
                平日 15:00~23:00 / 土日祝13:00~23:00
              </p>
            </div>

            <div className={styles.address}>
              <p className={styles.title}>最寄駅</p>
              <div className={styles.itemBox}>
                <p className={styles.item}>
                  JR山手線・埼京線・湘南新宿ライン「恵比寿駅」徒歩3分
                </p>
                <p className={styles.item}>
                  東京メトロ日比谷線「恵比寿駅」徒歩3分
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      {/* <section className={styles.contactSection}></section> */}
    </div>
  );
}
