import { useState } from 'react';

import { Link } from 'react-scroll';

import styles from './BurgerMenu.module.scss';

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

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
    <>
      <button
        className={`${styles.burger__menu} ${menuOpen ? styles.open : ''}`}
        onClick={handleToggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav
        className={`${styles.menuMobile} 
          ${menuOpen ? styles.menuMobile__open : ''}`}
      >
        <ul className={`${styles.list__reset}`}>
          <li className={styles.menuMobile__item}>
            <Link
              className={styles.header__nav__list__item__link}
              href="/"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              Обо мне
            </Link>
          </li>
          <li className={styles.menuMobile__item}>
            <Link
              className={styles.header__nav__list__item__link}
              href="/"
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              Навыки
            </Link>
          </li>
          <li className={styles.menuMobile__item}>
            <Link
              className={styles.header__nav__list__item__link}
              href="/"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              Портфолио
            </Link>
          </li>
          <li className={styles.menuMobile__item}>
            <Link
              className={styles.header__nav__list__item__link}
              href="/"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              Обратная связь
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default BurgerMenu;
