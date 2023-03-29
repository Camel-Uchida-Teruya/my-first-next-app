import Link from "next/link";
import styles from "../../styles/layouts/_header.module.scss"

export const Header = () => {
  return (
    <header className={styles['l-header']}>
      <button className={styles['l-header__btn']}>
        <span></span>
      </button>
      <nav className={styles['l-header__menu']}>

      </nav>
      <h1 className={styles['l-header__title']}>
        <Link href='/'>ブログ</Link>
      </h1>
    </header>
  );
};
