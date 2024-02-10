import clsx from "clsx";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={clsx("",styles.footer)}>
      <p>© 2024 Datachamp AI Solutions. All rights reserved.</p>
    </footer>
  );
}
