import Image from 'next/image';

import styles from '../Portfolio.module.scss';

interface IPortfolioTabItemProps {
  title: string;
  img: string;
  link: string;
}

const PortfolioTabItem = ({ title, img, link }: IPortfolioTabItemProps) => (
  <div className={styles.portfolio__project__item__container}>
    <a href={link} target="_blank" rel="noreferrer">
      <Image
        className={styles.portfolio__project__item__img}
        src={img}
        alt={title}
        width={555}
        height={422}
      />
      <h3 className={styles.portfolio__project__item__title}>{title}</h3>
    </a>
  </div>
);

export default PortfolioTabItem;
