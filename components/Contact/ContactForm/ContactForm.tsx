import React, { MutableRefObject, useRef, useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { PropagateLoader } from 'react-spinners';

import ContactInput from './ContactInput/ContactInput';

import styles from '../Contact.module.scss';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

type FormSignInData = {
  name: string;
  company: string;
  email: string;
  message: string;
  acceptWithRules: boolean;
};

const ContactForm = () => {
  // const [acceptWithRules, setAcceptWithRules] = useState<boolean>(false);
  // const [spinner, setSpinner] = useState<boolean>(false);
  // const formRef = useRef() as MutableRefObject<HTMLFormElement>;

  // const toggleAcceptWithRules = () => setAcceptWithRules(!acceptWithRules);

  // const SendEmail = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setSpinner(true);
  //   emailjs
  //     .sendForm(
  //       'service_p79ngcu',
  //       'template_ye5yl1w',
  //       formRef.current,
  //       '3_78TQr21XSUDmVLe'
  //     )
  //     .then(
  //       (result) => {
  //         setSpinner(false);
  //         toast(`Данные отправлены ${result.text}`);
  //       },
  //       (error) => {
  //         setSpinner(false);
  //         toast.error(`Данные отправлены ${error.text}`);
  //       }
  //     );
  //   formRef.current.reset();
  //   setAcceptWithRules(false);
  // };

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

  // const onSubmitData  = handleSubmit(({ name, password })) => {
  //   const formData = {
  //     login: name,
  //     password: password,
  //   };
  //   alert(formData);
  // };
  const onSubmit = handleSubmit(
    ({ name, company, email, message, acceptWithRules }) => {
      console.log(name, company, email, message, acceptWithRules);
      // setValue('name', '');
      // setValue('company', '');
      // setValue('message', '');
      // setValue('email', '');
      // setValue('acceptWithRules', false);
      reset();
    }
  );

  return (
    <form className={styles.contact__form} onSubmit={onSubmit}>
      {/* <label>First Name</label>
      <input {...register('name')} />
      <label>Last Name</label>
      <input {...register('company')} />
      <input {...register('email')} />
      <input {...register('checkbox')} type="checkbox" /> */}
      {/* <textarea
        {...register('message')}
        rows={3}
        cols={50}
        style={{ resize: 'none' }}
      /> */}

      <label className={styles.contact__form__label}>
        <p className={styles.contact__form__label__text}>Ваше Имя*</p>
        <input
          className={styles.contact__form__label__input}
          {...register('name', {
            required: 'Это поле обязательное',
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
        />
      </label>
      <label className={styles.contact__form__label}>
        <p className={styles.contact__form__label__text}>Email*</p>
        <input
          className={styles.contact__form__label__input}
          {...register('email', {
            required: 'Это поле обязательное',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Укажите коректно email',
            },
            maxLength: {
              value: 35,
              message: 'Поле может содержать максимум 35 символов',
            },
          })}
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
            required: 'Это поле обязательное',
            minLength: {
              value: 3,
              message: 'Поле может содержать минимум 3 символа',
            },
            maxLength: {
              value: 150,
              message: 'Поле может содержать максимум 150 символов',
            },
          })}
        />
        {errors.message && (
          <p className={styles.contact__form__label__input__error}>
            {errors.message.message}
          </p>
        )}
      </label>

      <input className={styles.contact__form__btn} type="submit" />

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
    // <form className={styles.contact__form} onSubmit={SendEmail} ref={formRef}>
    //   <ContactInput
    //     text="Ф.И.О.*"
    //     placeholder="Укажите ваши Ф.И.О."
    //     type="text"
    //     name="fullName"
    //   />
    //   <ContactInput
    //     text="Должность/компания"
    //     placeholder="Укажите вашу должность/компанию"
    //     type="text"
    //     name="company"
    //   />
    //   <ContactInput
    //     text="E-mail*"
    //     placeholder="Укажите ваш E-mai"
    //     type="email"
    //     name="email"
    //   />
    //   <ContactInput
    //     text="Телефон*"
    //     placeholder="Укажите ваш телефон"
    //     type="tel"
    //     name="phone"
    //   />
    //   <button className={styles.contact__form__btn} disabled={!acceptWithRules}>
    //     {spinner ? <PropagateLoader color="#fff" /> : 'Отправить заявку'}
    //   </button>
    //   <label className={styles.contact__checkbox}>
    //     <input
    //       className={styles.contact__checkbox__input}
    //       type="checkbox"
    //       onChange={toggleAcceptWithRules}
    //     />
    //     <span className={styles.contact__checkbox__span} />
    //     <span className={styles.contact__checkbox__text}>
    //       Нажимая на кнопку «Отправить заявку», я соглашаюсь с{' '}
    //       <Link
    //         className={styles.contact__checkbox__link}
    //         href={'/privacy-policy'}
    //       >
    //         Политикой конфиденциальности
    //       </Link>{' '}
    //       и даю{' '}
    //       <Link
    //         className={styles.contact__checkbox__link}
    //         href={'/personal-data-of-clients'}
    //       >
    //         Согласие на обработку персональных данных.
    //       </Link>
    //     </span>
    //   </label>
    // </form>
  );
};

export default ContactForm;
