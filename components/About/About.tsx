import Image from 'next/image';

import { useMediaQuery } from '@/hooks/hooks';

import ArrowSvg from '../ArrowSvg/ArrowSvg';
import MainTitle from '../MainTitle/MainTitle';
import AboutList from './AboutListList/SocialList';
import AvatarImg from '../../public/assets/images/jpg/avatar_portfolio.jpg';

import styles from './About.module.scss';

const About = () => {
  const isMobile1080 = useMediaQuery(1080);

  return (
    <section className={styles.about} id="about">
      <div className="container">
        <MainTitle text="обо мне" />
      </div>
      <div className={`sub-container ${styles.about__sub_container}`}>
        <Image className={styles.about__img} src={AvatarImg} alt="avatar" />
        <div className={styles.about__text__container}>
          <h3 className={styles.about__title}>
            Андрей Сидельников
            <span className={styles.about__title__border}>
              <span className={styles.about__title__border__arrow}>
                <ArrowSvg />
              </span>
              <span className={styles.about__title__border__line} />
            </span>
          </h3>
          <div className={styles.about__text}>
            <p>Я JavaScript Front-end Developer.</p>
            <p>
              У меня более 3 лет опыта разработки веб-приложений. Владею
              английским языком на уровне B1. Я обладаю хорошими аналитическими
              способностями, самоорганизацией, работаю в команде,
              коммуникабельный. Всегда открыт к изучению чего-то нового и даётся
              это легко. Всегда к себя требователен и работаю на результат.
            </p>
          </div>
          {!isMobile1080 && <AboutList />}
        </div>
      </div>
      <div className="sub-container">{isMobile1080 && <AboutList />}</div>
    </section>
  );
};

export default About;
