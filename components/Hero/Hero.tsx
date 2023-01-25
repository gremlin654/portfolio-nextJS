import { Link } from 'react-scroll';

import NeonTitle from './NeonTitle/NeonTitle';

import styles from './Hero.module.scss';

const Hero = () => (
  <section className={styles.hero}>
    <div className="sub-container">
      <div className={styles.hero__wrapper}>
        <NeonTitle text="Web development" />
        <div className={styles.hero__description}>
          <p>Вы работаете над чем-то великим?</p>
          <p>
            Я с удовольствием помогу вам в этом! Напишите мне письмо и мы начнем
            проект прямо сейчас!
          </p>
        </div>
        <Link
          className={styles.hero__btn}
          to="contact"
          spy={true}
          smooth={true}
          offset={30}
          duration={500}
        >
          Связаться с разработчиком
        </Link>
        <Link
          className={styles.hero__arrow}
          to="about"
          spy={true}
          smooth={true}
          offset={30}
          duration={500}
        />
      </div>
    </div>
  </section>
);

export default Hero;
