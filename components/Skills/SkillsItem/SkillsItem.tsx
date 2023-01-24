import styles from '../Skills.module.scss';

interface ISkillsItemProps {
  title: string;
  text: string;
  iconClass: string;
}

const SkillsItem = ({ title, text, iconClass }: ISkillsItemProps) => {
  return (
    <li className={styles.skills__item}>
      <h3 className={`${styles.skills__title} ${iconClass}`}>
        <span className={styles.skills__title__text}>{title}</span>
        <span className={styles.skills__title__border} />
      </h3>
      <p className={styles.skills__text}>{text}</p>
    </li>
  );
};

export default SkillsItem;
