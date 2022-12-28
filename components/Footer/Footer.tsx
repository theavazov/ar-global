import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`box`}>
        <div className={`myBox ${styles.footer_inner}`}>
          <div className={styles.footer_text_div}>
            <p>
              Copyright &copy; {new Date().getFullYear()} AR-GLOBAL-LOGISTICS.
            </p>
            <p>All rights reserved.</p>
          </div>
          <p className={styles.ndc}>
            Developed by:{" "}
            <a href="https://ndc.uz" target={"_blank"} rel="noreferrer">
              NDC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
