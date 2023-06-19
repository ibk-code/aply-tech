// ------------ import external dependencies -----------
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

// ------------ import external dependncies ------------
import styles from "./style.module.css";

interface BtnProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
  text?: string;
  size?: string;
}

function Btn({ children, text, size = "md", ...rest }: BtnProps) {
  return (
    <button {...rest} className={`${styles[size]} ${styles.btn}`}>
      {children ? children : text}
    </button>
  );
}

export default Btn;
