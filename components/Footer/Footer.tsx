import styles from "./Footer.module.css";

type Props = {
  translations: any;
};

export default function Footer({ translations }: Props) {
  return (
    <footer className={styles.footer}>
      <div className={`box`}>
        <div className={`myBox ${styles.footer_inner}`}>
          <div className={styles.footer_text_div}>
            <p>
              Copyright &copy; {new Date().getFullYear()} AR-GLOBAL-LOGISTICS.
            </p>
            <p>{translations.copyright}.</p>
          </div>
          <p className={styles.ndc}>
            {translations.developed}:{" "}
            <a href="https://ndc.uz" target={"_blank"} rel="noreferrer">
              NDC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
