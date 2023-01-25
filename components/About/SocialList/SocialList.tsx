import Image from 'next/image';

import styles from './SocialList.module.scss';

const SocialList = () => {
  return (
    <ul className={styles.social__list}>
      <li className={styles.social__item}>
        <a
          href="https://t.me/andrey_sidelnikov"
          className={styles.social__item__link}
        >
          <span className={styles.social__item__link__text}>Telegram</span>
          <span
            className={`${styles.social__item__link__icon}  ${styles.social__item__link__icon__tg}`}
          >
            <Image
              className={styles.social__item__link__img}
              src="/assets/images/svg/telegram.svg"
              alt="telegram"
              width={28}
              height={29}
            />
          </span>
        </a>
      </li>
      <li className={styles.social__item}>
        <a
          href="https://linkedin.com/in/andrey-sidelnikov"
          className={styles.social__item__link}
        >
          <span className={styles.social__item__link__text}>LinkedIn</span>
          <span
            className={`${styles.social__item__link__icon}  ${styles.social__item__link__icon__in}`}
          >
            <Image
              className={styles.social__item__link__img}
              src="/assets/images/svg/linkedin.svg"
              alt="linkedin"
              width={30}
              height={30}
            />
          </span>
        </a>
      </li>
      <li className={styles.social__item}>
        <a
          href="https://github.com/gremlin654"
          className={styles.social__item__link}
        >
          <span className={styles.social__item__link__text}>GitHub</span>
          <span
            className={`${styles.social__item__link__icon}  ${styles.social__item__link__icon__git}`}
          >
            <Image
              className={styles.social__item__link__img}
              src="/assets/images/svg/github.svg"
              alt="github"
              width={34}
              height={34}
            />
          </span>
        </a>
      </li>
    </ul>
  );
};

export default SocialList;
