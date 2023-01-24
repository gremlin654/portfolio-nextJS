import styles from '../../Contact.module.scss';

interface IContactInputProps {
  type: string;
  text: string;
  placeholder: string;
  name: string;
}

const ContactInput = ({ type, text, placeholder, name }: IContactInputProps) => {
  return (
    <label className={styles.contact__form__label}>
      <span className={styles.contact__form__label__text}>{text}</span>
      <input
        className={styles.contact__form__label__input}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </label>
  );
};

export default ContactInput;
