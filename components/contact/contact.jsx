import styles from "./contact.module.scss";
import { AiOutlineSend } from "react-icons/ai";

export default function Contact() {
  return (
    <div className={styles.body} id="contact">
      <main className={styles.main}>
        <div className={styles.titleBox}>
          <h4>お問合せ</h4>
          <h1>Contact</h1>
        </div>

        <form action="https://api.staticforms.xyz/submit" method="post">
          <input
            type="hidden"
            name="accessKey"
            value="7adf81ec-942f-4a70-b8d5-e01074e1b7d4"
          />
          <input
            type="hidden"
            name="redirectTo"
            value="https://beer-site-pied.vercel.app/contact-done"
          />

          <div className={styles.contactItem}>
            <label className={styles.label}>お名前</label>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="お名前"
              required
            />
          </div>
          <div className={styles.contactItem}>
            <label className={styles.label}>メールアドレス</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="メールアドレス"
              required
            />
          </div>
          <div className={styles.contactItem}>
            <label className={styles.label}>ご質問</label>
            <textarea
              name="message"
              className={`${styles.input} ${styles.textarea}`}
              placeholder="ご質問はこちら"
              required
              maxLength="300"
            />
          </div>

          <div className={styles.buttonBox}>
            <input id="modalOpen" type="submit" value="送信" />
            <input type="reset" value="リセット" />
          </div>
        </form>
      </main>
    </div>
  );
}
