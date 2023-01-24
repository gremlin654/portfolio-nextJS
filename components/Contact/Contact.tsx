import ArrowSvg from '../ArrowSvg/ArrowSvg';
import MainTitle from '../MainTitle/MainTitle';
import SocialListContact from './SocialList/SocialListContact';
import ContactForm from './ContactForm/ContactForm';
import { useMediaQuery } from '@/hooks/hooks';

import styles from './Contact.module.scss';

const Contact = () => {
  const isMobile485 = useMediaQuery(485);

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <MainTitle text="обратная связь" />
      </div>
      <div className="sub-container">
        <div className={styles.contact__inner}>
          <div className={styles.contact__left}>
            <p className={styles.contact__text}>
              Вы работаете над чем-то великим? Я с удовольствием помогу вам в
              этом! Напишите мне письмо и мы начнем проект прямо сейчас!
            </p>
            <p className={styles.contact__text}>Просто сделай это</p>
            {!isMobile485 && (
              <>
                <h3 className={styles.contact__title}>
                  <span className={styles.contact__title__text}>
                    Я в соцсетях:
                  </span>
                  <span className={styles.contact__title__arrow}>
                    <ArrowSvg />
                  </span>
                  <span className={styles.contact__title__border} />
                </h3>
                <SocialListContact />
              </>
            )}
          </div>
          <div className={styles.contact__right}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
