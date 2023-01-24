import Image from 'next/image';

import styles from './SocialListFooter.module.scss';

const SocialListFooter = ({ marginBottom }: { marginBottom?: number }) => (
  <ul className={styles.social__list} style={{ marginBottom }}>
    <li className={styles.social__item}>
      <a href="#" className={styles.social__item__link}>
        <span className={styles.social__item__link__text}>facebook</span>
        <span
          className={`${styles.social__item__link__icon}  ${styles.social__item__link__icon__fb}`}
        >
          <Image
            className={styles.social__item__link__img}
            src="/assets/images/svg/facebook.svg"
            alt="facebook"
            width={14}
            height={29}
          />
        </span>
      </a>
    </li>
    <li className={styles.social__item}>
      <a href="#" className={styles.social__item__link}>
        <span className={styles.social__item__link__text}>ВКонтакте</span>
        <span
          className={`${styles.social__item__link__icon}  ${styles.social__item__link__icon__vk}`}
        >
          <Image
            className={styles.social__item__link__img}
            src="/assets/images/svg/vk.svg"
            alt="facebook"
            width={23}
            height={14}
          />
        </span>
      </a>
    </li>
    <li className={styles.social__item}>
      <a href="#" className={styles.social__item__link}>
        <span className={styles.social__item__link__text}>YouTube</span>
        <span
          className={`${styles.social__item__link__icon}  ${styles.social__item__link__icon__yt}`}
        >
          <Image
            className={styles.social__item__link__img}
            src="/assets/images/svg/youtube.svg"
            alt="facebook"
            width={22}
            height={16}
          />
        </span>
      </a>
    </li>
  </ul>
);

export default SocialListFooter;
