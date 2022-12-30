import styles from "./Spinner.module.css";

type Props = {
  isLoading: boolean;
  setIsLoading: Function;
};

export default function Spinner({ isLoading, setIsLoading }: Props) {
  return (
    <div
      className={
        isLoading ? `${styles.spinner} ${styles.show}` : styles.spinner
      }
    >
      <div className={styles.lds_roller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
