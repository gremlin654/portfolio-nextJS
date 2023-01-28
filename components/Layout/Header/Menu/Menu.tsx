import { Link } from 'react-scroll';

import styles from '../Header.module.scss';

interface IMenuProps {
  menuList: {
    id: number;
    section: string;
    text: string;
  }[];
}

const Menu = ({ menuList }: IMenuProps) => {
  return (
    <nav className={`${styles.header__nav}`}>
      <ul className={`${styles.header__nav__list}`}>
        {menuList.map((item) => (
          <li className={styles.header__nav__list__item} key={item.id}>
            <Link
              className={styles.header__nav__list__item__link}
              href="/"
              to={item.section}
              spy={true}
              smooth={true}
              offset={140}
              duration={500}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
