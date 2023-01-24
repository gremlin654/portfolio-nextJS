import Image from 'next/image';

import styles from '../Portfolio.module.scss';

interface IPortfolioSliderItemProps {
  title: string;
  img: string;
  link: string;
}

const PortfolioSliderItem = ({ title, img, link }: IPortfolioSliderItemProps) => (
  <div className={styles.portfolio__slide}>
    <a className={styles.portfolio__slide__link} href={link}>
      <span className={styles.portfolio__slide__inner}>
        <span className={styles.portfolio__slide__text}>{title}</span>
      </span>
      <Image
        className={styles.portfolio__slide__img}
        src={img}
        alt={title}
        width={386}
        height={294}
      />
    </a>
  </div>
);

export default PortfolioSliderItem;
