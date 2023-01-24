import { motion } from 'framer-motion';

import styles from '../Portfolio.module.scss';
import PortfolioTabItem from '../PortfolioTabItem/PortfolioTabItem';

interface IPortfolioTabContentProps {
  tabItems: {
    id: number;
    img: string;
    link: string;
    title: string;
  }[];
}

const PortfolioTabContent = ({ tabItems }: IPortfolioTabContentProps) => {
  return (
    <>
      {tabItems.map((item) => (
        <motion.li
          className={styles.portfolio__project__item}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={item.id}
        >
          <PortfolioTabItem key={item.id} img={item.img} link={item.link} title={item.title} />
        </motion.li>
      ))}
    </>
  );
};

export default PortfolioTabContent;
