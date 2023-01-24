import { MutableRefObject, useEffect, useRef } from 'react';

import { Link } from 'react-scroll';
import { useMediaQuery } from '@/hooks/hooks';
import gsap from 'gsap';

import styles from './Hero.module.scss';

const Hero = () => {
  const heroTitle = useRef() as MutableRefObject<HTMLHeadingElement>;

  const isMobile800 = useMediaQuery(800);
  const isMobile485 = useMediaQuery(485);

  useEffect(() => {
    const colors = gsap.to(heroTitle.current, {
      paused: true,
      duration: 20,
      repeat: -1,
      '--hue': 360,
    });

    const doRandom = () => {
      gsap
        .timeline()
        .to(heroTitle.current, {
          duration: 0.1,
          opacity: function () {
            return gsap.utils.random(0.9, 0.95);
          },
          delay: function () {
            return gsap.utils.random(0.1, 2);
          },
        })
        .to(heroTitle.current, {
          duration: 0.1,
          opacity: 1,
          onComplete: function () {
            doRandom();
          },
        });
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!mediaQuery || !mediaQuery.matches) {
      colors.play();
      doRandom();
    }
  }, []);

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: isMobile485
          ? ''
          : `url('/assets/images/png/hero${isMobile800 ? '768' : ''}.png')`,
      }}
    >
      <div className="sub-container">
        <div className={styles.hero__wrapper}>
          <h1 className={styles.hero__title} ref={heroTitle}>
            Web development
          </h1>
          <div className={styles.hero__description}>
            <p>Вы работаете над чем-то великим?</p>
            <p>
              Я с удовольствием помогу вам в этом! Напишите мне письмо и мы
              начнем проект прямо сейчас!
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
          {!isMobile800 && (
            <Link
              className={styles.hero__arrow}
              to="about"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
