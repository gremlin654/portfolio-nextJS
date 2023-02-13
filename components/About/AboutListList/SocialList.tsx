import Image from 'next/image';

import styles from './AboutList.module.scss';

const AboutList = () => {
  return (
    <div className={styles.about__list}>
      <div className={styles.about__item}>
        <a
          className={styles.about__item__link}
          href="https://drive.google.com/file/d/1yJ0hkgqwwtmBu8SPxPNUudIpthWR2Kx7/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.about__item__link__text}>Моё резюме</span>
          <span
            className={`${styles.about__item__link__icon}  ${styles.about__item__link__icon__cv}`}
          >
            <Image
              className={styles.about__item__link__img}
              src="/assets/images/svg/cv.svg"
              alt="my-cv"
              width={26}
              height={26}
            />
          </span>
        </a>
      </div>
    </div>
  );
};

export default AboutList;
