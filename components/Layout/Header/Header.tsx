import { useMediaQuery } from '@/hooks/hooks';

import { useState } from 'react';
import { Link } from 'react-scroll';

import Logo from '../../Logo/Logo';

import styles from './Header.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const isMobile640 = useMediaQuery(640);

  const handleToggleMenu = () => {
    (document.querySelector('body') as HTMLBodyElement).classList.toggle(
      'overflow-hidden'
    );
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    (document.querySelector('body') as HTMLBodyElement).classList.remove(
      'overflow-hidden'
    );
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <Logo />
        {isMobile640 && (
          <button
            className={`${styles.burger__menu} ${menuOpen ? styles.open : ''}`}
            onClick={handleToggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
        <nav
          className={`${isMobile640 ? styles.menuMobile : styles.header__nav} 
          ${menuOpen ? styles.menuMobile__open : ''}`}
        >
          <ul
            className={`${
              isMobile640 ? styles.list__reset : styles.header__nav__list
            }`}
          >
            <li
              className={
                isMobile640
                  ? styles.menuMobile__item
                  : styles.header__nav__list__item
              }
            >
              <Link
                className={styles.header__nav__list__item__link}
                href="/"
                to="about"
                spy={true}
                smooth={true}
                offset={140}
                duration={500}
                onClick={closeMenu}
              >
                Обо мне
              </Link>
            </li>
            <li
              className={
                isMobile640
                  ? styles.menuMobile__item
                  : styles.header__nav__list__item
              }
            >
              <Link
                className={styles.header__nav__list__item__link}
                href="/"
                to="skills"
                spy={true}
                smooth={true}
                offset={140}
                duration={500}
                onClick={closeMenu}
              >
                Навыки
              </Link>
            </li>
            <li
              className={
                isMobile640
                  ? styles.menuMobile__item
                  : styles.header__nav__list__item
              }
            >
              <Link
                className={styles.header__nav__list__item__link}
                href="/"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={140}
                duration={500}
                onClick={closeMenu}
              >
                Портфолио
              </Link>
            </li>
            <li
              className={
                isMobile640
                  ? styles.menuMobile__item
                  : styles.header__nav__list__item
              }
            >
              <Link
                className={styles.header__nav__list__item__link}
                href="/"
                to="contact"
                spy={true}
                smooth={true}
                offset={140}
                duration={500}
                onClick={closeMenu}
              >
                Обратная связь
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
