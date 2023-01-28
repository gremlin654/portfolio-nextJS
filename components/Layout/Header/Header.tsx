import { Link } from 'react-scroll';

import Logo from '../../Logo/Logo';
import MobileMenu from './MobileMenu/MobileMenu';
import { useMediaQuery } from '@/hooks/hooks';

import styles from './Header.module.scss';
import Menu from './Menu/Menu';

const Header = () => {
  const isMobile640 = useMediaQuery(640);

  const menuList = [
    {
      id: 1,
      section: 'about',
      text: 'Обо мне',
    },
    {
      id: 2,
      section: 'skills',
      text: 'Навыки',
    },
    {
      id: 3,
      section: 'portfolio',
      text: 'Портфолио',
    },
    {
      id: 4,
      section: 'contact',
      text: 'Обратная связь',
    },
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <Logo />
        {isMobile640 ? (
          <MobileMenu menuList={menuList} />
        ) : (
          <Menu menuList={menuList} />
        )}
      </div>
    </header>
  );
};

export default Header;
