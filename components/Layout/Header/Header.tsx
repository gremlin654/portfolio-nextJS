import { Link } from 'react-scroll';

import Logo from '../../Logo/Logo';
import BurgerMenu from './BurgerMenu/BurgerMenu';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={`container ${styles.header__container}`}>
      <Logo />
      <nav className={`${styles.header__nav}`}>
        <ul className={`${styles.header__nav__list}`}>
          <li className={styles.header__nav__list__item}>
            <Link
              className={styles.header__nav__list__item__link}
              href="/"
              to="about"
              spy={true}
              smooth={true}
              offset={140}
              duration={500}
            >
              Обо мне
            </Link>
          </li>
          <li className={styles.header__nav__list__item}>
            <Link
              className={styles.header__nav__list__item__link}
              href="/"
              to="skills"
              spy={true}
              smooth={true}
              offset={140}
              duration={500}
            >
              Навыки
            </Link>
          </li>
          <li className={styles.header__nav__list__item}>
            <Link
              className={styles.header__nav__list__item__link}
              href="/"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={140}
              duration={500}
            >
              Портфолио
            </Link>
          </li>
          <li className={styles.header__nav__list__item}>
            <Link
              className={styles.header__nav__list__item__link}
              href="/"
              to="contact"
              spy={true}
              smooth={true}
              offset={140}
              duration={500}
            >
              Обратная связь
            </Link>
          </li>
        </ul>
      </nav>
      <BurgerMenu />
    </div>
  </header>
);

export default Header;
