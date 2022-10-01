import Link from "next/link";
import styles from "../styles/contact-done.module.scss";

export default function ContactDone() {
  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <h1>送信が完了しました</h1>
        <p>お問い合わせいただきまして、誠にありがとうございます。</p>
        <p>
          追って担当者よりご連絡を差し上げますので、今しばらくお待ちくださいませ。
        </p>
        <Link href="/">
          <a className={styles.a}>戻る</a>
        </Link>
      </main>
    </div>
  );
}
