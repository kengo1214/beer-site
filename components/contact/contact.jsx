import styles from "./contact.module.scss";

export default function Contact() {
  return (
    // <div className={styles.body}>
    //   <main className={styles.main}>
    //     <h1>Contact</h1>
    //   </main>
    // </div>
    <section className={styles.body}>
      <div className={styles.background}>
        <div className={styles.contactMain}>
          <div className={styles.contactTitle}>
            <p>お問合せ</p>
            <h1>Contact</h1>
          </div>

          <form
            action="https://api.staticforms.xyz/submit"
            method="post"
            className={styles.form}
          >
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
                type="text"
                className={styles.input}
                name="name"
                placeholder="お名前" 
                required
              />
            </div>
            <div className={styles.contactItem}>
              <label className={styles.label}>メールアドレス</label>
              <input
                type="email"
                className={styles.input}
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
                maxlength="300"
              ></textarea>
            </div>
            <div className={styles.buttonArea}>
              <input
                id="modalOpen"
                className={styles.button}
                type="submit"
                value="送信"
              />
              <input className={styles.button} type="reset" value="リセット" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
