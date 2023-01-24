import Image from 'next/image';

import { useMediaQuery } from '@/hooks/hooks';

import ArrowSvg from '../ArrowSvg/ArrowSvg';
import MainTitle from '../MainTitle/MainTitle';
import SocialList from './SocialList/SocialList';
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
            <p>
              Расположенный в Хартфорде, штат Коннектикут. В настоящее время я работаю по
              совместительству Удаленным младшим веб-разработчиком для Coolor, расположенного в
              Лас-Вегасе.
            </p>
            <p>
              Я ищу, чтобы взять на себя больше работы и повысить свои навыки в качестве
              веб-разработчика.
            </p>
          </div>
          {!isMobile1080 && <SocialList />}
        </div>
      </div>
      <div className="sub-container">{isMobile1080 && <SocialList />}</div>
    </section>
  );
};

export default About;
