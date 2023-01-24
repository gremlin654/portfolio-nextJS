import Link from 'next/link';

import Logo from '../../Logo/Logo';
import SocialListFooter from './SocialListFooter/SocialListFooter';
import { useMediaQuery } from '@/hooks/hooks';

import styles from './Footer.module.scss';

const Footer = () => {
  const isMobile725 = useMediaQuery(725);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__container}`}>
        <span className={styles.footer__border} />
        <div className={styles.footer__inner}>
          <div className={styles.footer__left}>
            {isMobile725 && <SocialListFooter marginBottom={25} />}
            <Logo marginBottom={45} />
            <p className={styles.footer__copyright}>
              © 2023 <br />
              «Андрей»
            </p>
          </div>
          <div className={styles.footer__right}>
            <div className={styles.footer__right__top}>
              <p className={styles.footer__right__top__text}>
                Поделитесь сайтом с друзьями:
              </p>
              {!isMobile725 && <SocialListFooter />}
            </div>
            <div className={styles.footer__right__bottom}>
              <ul className={styles.footer__right__bottom__list}>
                <li className={styles.footer__right__bottom__item}>
                  <Link
                    href="/cookie-policy"
                    className={styles.footer__right__bottom__item__link}
                  >
                    Политика использования файлов cookie
                  </Link>
                </li>
                <li className={styles.footer__right__bottom__item}>
                  <Link
                    href="/privacy-policy"
                    className={styles.footer__right__bottom__item__link}
                  >
                    Политика конфиденциальности
                  </Link>
                </li>
                <li className={styles.footer__right__bottom__item}>
                  <Link
                    href="/personal-data-privacy"
                    className={styles.footer__right__bottom__item__link}
                  >
                    Политика обработки персональных данных
                  </Link>
                </li>
                <li className={styles.footer__right__bottom__item}>
                  <Link
                    href="/personal-data-privacy"
                    className={styles.footer__right__bottom__item__link}
                  >
                    Согласие на обработку персональных данных клиентов -
                    физических лиц
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
