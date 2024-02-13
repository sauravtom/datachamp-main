import styles from './styles.module.scss';

export default function Footer() {

  return (
    <footer className={styles.endFooter}>
    <div>
      <p>© 2024 Datachamp AI Solutions. All rights reserved.</p>
      <div>
        <a href='docs/intro'>Tutorial</a>
        <a href='/blog'>Blog</a>
      </div>
  </div>
  </footer>
  );
}
