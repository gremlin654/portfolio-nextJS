import React, { useState } from 'react';
import Link from 'next/link';

import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { PropagateLoader } from 'react-spinners';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from '../Contact.module.scss';

type FormSignInData = {
  name: string;
  company: string;
  email: string;
  message: string;
  acceptWithRules: boolean;
};

const ContactForm = () => {
  const [spinner, setSpinner] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSignInData>({
    defaultValues: {
      name: '',
      company: '',
      email: '',
      message: '',
      acceptWithRules: false,
    },
  });

  const onSubmit: SubmitHandler<FormSignInData> = (formData, e) => {
    setSpinner(true);
    emailjs
      .sendForm(
        'service_p79ngcu',
        'template_ye5yl1w',
        e?.target,
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
    reset();
  };

  return (
    <form className={styles.contact__form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.contact__form__label}>
        <p className={styles.contact__form__label__text}>Ваше Имя*</p>
        <input
          className={styles.contact__form__label__input}
          {...register('name', {
            required: 'Это обязательное поле',
            pattern: {
              value: /^[a-zA-Zа-яёА-ЯЁ]+$/u,
              message: 'Имя должно содержать только буквы',
            },
            minLength: {
              value: 2,
              message: 'Поле должно содеражать минимум 2 буквы',
            },
            maxLength: {
              value: 30,
              message: 'Поле может содержать максимум 30 буквы',
            },
          })}
          name="name"
        />
        {errors.name && (
          <p className={styles.contact__form__label__input__error}>
            {errors.name.message}
          </p>
        )}
      </label>
      <label className={styles.contact__form__label}>
        <p className={styles.contact__form__label__text}>
          Компания / Должность*
        </p>
        <input
          className={styles.contact__form__label__input}
          {...register('company')}
          name="company"
        />
      </label>
      <label className={styles.contact__form__label}>
        <p className={styles.contact__form__label__text}>Email*</p>
        <input
          className={styles.contact__form__label__input}
          {...register('email', {
            required: 'Это обязательное поле',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Укажите пожалуйста корректный email',
            },
            maxLength: {
              value: 35,
              message: 'Поле может содержать максимум 35 символов',
            },
          })}
          name="email"
        />
        {errors.email && (
          <p className={styles.contact__form__label__input__error}>
            {errors.email.message}
          </p>
        )}
      </label>
      <label className={styles.contact__form__label}>
        <p className={styles.contact__form__label__text}>Сообщение*</p>
        <textarea
          className={styles.contact__form__label__textarea}
          {...register('message', {
            required: 'Это обязательное поле',
            minLength: {
              value: 3,
              message: 'Поле может содержать минимум 3 символа',
            },
            maxLength: {
              value: 150,
              message: 'Поле может содержать максимум 150 символов',
            },
          })}
          name="message"
        />
        {errors.message && (
          <p className={styles.contact__form__label__input__error}>
            {errors.message.message}
          </p>
        )}
      </label>

      <button className={styles.contact__form__btn} type="submit">
        {spinner ? <PropagateLoader color="#fff" /> : 'Отправить заявку'}
      </button>

      <label className={styles.contact__checkbox}>
        <input
          className={styles.contact__checkbox__input}
          type="checkbox"
          {...(register('company'), { required: true })}
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
