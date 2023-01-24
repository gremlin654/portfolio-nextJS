import React, { MutableRefObject, useRef, useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { PropagateLoader } from 'react-spinners';

import ContactInput from './ContactInput/ContactInput';

import styles from '../Contact.module.scss';

const ContactForm = () => {
  const [acceptWithRules, setAcceptWithRules] = useState<boolean>(false);
  const [spinner, setSpinner] = useState<boolean>(false);
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;

  const toggleAcceptWithRules = () => setAcceptWithRules((prev) => !prev);

  const SendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSpinner(true);
    emailjs
      .sendForm(
        'service_p79ngcu',
        'template_ye5yl1w',
        formRef.current,
        '3_78TQr21XSUDmVLe'
      )
      .then(
        (result) => {
          setSpinner(false);
          toast(`Данные отправлены ${result.text}`);
        },
        (error) => {
          setSpinner(false);
          toast.error(`Данные отправлены ${error.text}`);
        }
      );
    formRef.current.reset();
  };

  return (
    <form className={styles.contact__form} onSubmit={SendEmail} ref={formRef}>
      <ContactInput
        text="Ф.И.О.*"
        placeholder="Укажите ваши Ф.И.О."
        type="text"
        name="fullName"
      />
      <ContactInput
        text="Должность/компания"
        placeholder="Укажите вашу должность/компанию"
        type="text"
        name="company"
      />
      <ContactInput
        text="E-mail*"
        placeholder="Укажите ваш E-mai"
        type="email"
        name="email"
      />
      <ContactInput
        text="Телефон*"
        placeholder="Укажите ваш телефон"
        type="tel"
        name="phone"
      />
      <button className={styles.contact__form__btn} disabled={!acceptWithRules}>
        {spinner ? <PropagateLoader color="#fff" /> : 'Отправить заявку'}
      </button>
      <label className={styles.contact__checkbox}>
        <input
          className={styles.contact__checkbox__input}
          type="checkbox"
          onChange={toggleAcceptWithRules}
        />
        <span className={styles.contact__checkbox__span} />
        <span className={styles.contact__checkbox__text}>
          Нажимая на кнопку «Отправить заявку», я соглашаюсь с{' '}
          <Link
            className={styles.contact__checkbox__link}
            href={'/privacy-policy'}
          >
            Политикой конфиденциальности
          </Link>{' '}
          и даю{' '}
          <Link
            className={styles.contact__checkbox__link}
            href={'/personal-data-of-clients'}
          >
            Согласие на обработку персональных данных.
          </Link>
        </span>
      </label>
    </form>
  );
};

export default ContactForm;
