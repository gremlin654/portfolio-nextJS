import ArrowSvg from '@/components/ArrowSvg/ArrowSvg';
import styles from '../Portfolio.module.scss';

interface IPortfolioTabControlProps {
  title: string;
  isActive: boolean;
  handler: () => void;
}

const PortfolioTabControl = ({ title, isActive, handler }: IPortfolioTabControlProps) => {
  return (
    <li className={styles.portfolio__item}>
      <button className={styles.portfolio__item__btn} onClick={handler}>
        <span
          className={`${styles.portfolio__item__btn__text} 
          ${isActive ? styles.portfolio__item__btn__text_active : ''}`}
        >
          {title}
        </span>
        {isActive && (
          <span className={styles.portfolio__item__btn__arrow}>
            <ArrowSvg />
          </span>
        )}
        <span
          className={`${styles.portfolio__item__btn__border} 
          ${isActive ? styles.portfolio__item__btn__border_active : ''}`}
        />
      </button>
    </li>
  );
};

export default PortfolioTabControl;
