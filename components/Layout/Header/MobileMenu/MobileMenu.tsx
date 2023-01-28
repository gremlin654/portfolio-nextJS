import { useState } from 'react';

import { Link } from 'react-scroll';

import styles from './MobileMenu.module.scss';

interface IMenuListProps {
  menuList: {
    id: number;
    section: string;
    text: string;
  }[];
}

const MobileMenu = ({ menuList }: IMenuListProps) => {
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
          {menuList.map((item) => (
            <li className={styles.menuMobile__item} key={item.id}>
              <Link
                className={styles.header__nav__list__item__link}
                href="/"
                to={item.section}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={closeMenu}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
