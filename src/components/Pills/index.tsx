// ------------ import internal dependencies -----------
import styles from "./style.module.css";

interface Props {
  text: string;
}

function Pills({ text }: Props) {
  return <div className={styles.pills}>{text}</div>;
}

export default Pills;
