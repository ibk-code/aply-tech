// ------------ import internal dependencies -------------
import styles from "./style.module.css";

interface Props {
  section: string;
  content: string;
}

const SkipToContent = ({ section, content }: Props) => {
  return (
    <>
      <a className={styles.skip} href={`#${section}`} aria-label={content}>
        {content}
      </a>
    </>
  );
};

export default SkipToContent;
