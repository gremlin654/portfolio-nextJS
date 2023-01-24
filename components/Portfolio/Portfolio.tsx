import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import MainTitle from '../MainTitle/MainTitle';
import PortfolioTabControl from './PortfolioTabControl/PortfolioTabControl';
import PortfolioTabContent from './PortfolioTabContent/PortfolioTabContent';

import {
  hiddenPortfolioItems,
  portfolioItems1,
  portfolioItems2,
  portfolioItems3,
  portfolioItems4,
} from './PortfolioContents/portfolioContents';

import styles from './Portfolio.module.scss';
import { useMediaQuery } from '@/hooks/hooks';
import PortfolioSlider from './PortfolioSlider/PortfolioSlider';

const Portfolio = () => {
  const [tab1, setTab1] = useState<boolean>(true);
  const [tab2, setTab2] = useState<boolean>(false);
  const [tab3, setTab3] = useState<boolean>(false);
  const [tab4, setTab4] = useState<boolean>(false);
  const [hiddenItems, setHiddenItems] = useState<boolean>(false);

  const isMobile = useMediaQuery(1080);

  const toggleHiddenItems = () => {
    setHiddenItems(!hiddenItems);
  };

  const handleShowItems1 = () => {
    setTab1(true);
    setTab2(false);
    setTab3(false);
    setTab4(false);
  };
  const handleShowItems2 = () => {
    setTab1(false);
    setTab2(true);
    setTab3(false);
    setTab4(false);
  };
  const handleShowItems3 = () => {
    setTab1(false);
    setTab2(false);
    setTab3(true);
    setTab4(false);
  };
  const handleShowItems4 = () => {
    setTab1(false);
    setTab2(false);
    setTab3(false);
    setTab4(true);
  };

  const portfolioControls = [
    { id: 1, title: 'Вэб-сайты', isActive: tab1, handler: handleShowItems1 },
    { id: 2, title: 'UI/UX дизайн', isActive: tab2, handler: handleShowItems2 },
    { id: 3, title: 'Внешний интерфейс', isActive: tab3, handler: handleShowItems3 },
    { id: 4, title: 'Все проекты', isActive: tab4, handler: handleShowItems4 },
  ];

  const renderList = () => {
    if (!isMobile) {
      return (
        <ul className={styles.portfolio__project__list}>
          {tab1 && <PortfolioTabContent tabItems={portfolioItems1} />}
          {tab2 && <PortfolioTabContent tabItems={portfolioItems2} />}
          {tab3 && <PortfolioTabContent tabItems={portfolioItems3} />}
          {tab4 && <PortfolioTabContent tabItems={portfolioItems4} />}
          <AnimatePresence>
            {hiddenItems && <PortfolioTabContent tabItems={hiddenPortfolioItems} />}
          </AnimatePresence>
        </ul>
      );
    }
  };

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className="container">
        <MainTitle text="портфолио" />
      </div>
      <div className="sub-container">
        <div className={styles.portfolio__inner}>
          <ul className={styles.portfolio__list}>
            {portfolioControls.map((item) => (
              <PortfolioTabControl
                key={item.id}
                title={item.title}
                isActive={item.isActive}
                handler={item.handler}
              />
            ))}
          </ul>
        </div>
        {!isMobile && (
          <>
            <ul className={styles.portfolio__project__list}>
              {tab1 && <PortfolioTabContent tabItems={portfolioItems1} />}
              {tab2 && <PortfolioTabContent tabItems={portfolioItems2} />}
              {tab3 && <PortfolioTabContent tabItems={portfolioItems3} />}
              {tab4 && <PortfolioTabContent tabItems={portfolioItems4} />}
              <AnimatePresence>
                {hiddenItems && <PortfolioTabContent tabItems={hiddenPortfolioItems} />}
              </AnimatePresence>
            </ul>
            <div className={styles.portfolio__more__container}>
              <button className={styles.portfolio__more} onClick={toggleHiddenItems}>
                <span className={styles.portfolio__more__text}>
                  {hiddenItems ? 'Свернуть' : 'Показать еще проекты'}
                </span>
                <span className={styles.portfolio__more__border} />
              </button>
            </div>
          </>
        )}
      </div>
      {isMobile && (
        <div className={styles.portfolio__list__mobile}>
          <div className={styles.portfolio__list__mobile__container}>
            {tab1 && <PortfolioSlider tabItems={portfolioItems1} />}
            {tab2 && <PortfolioSlider tabItems={portfolioItems2} />}
            {tab3 && <PortfolioSlider tabItems={portfolioItems3} />}
            {tab4 && <PortfolioSlider tabItems={portfolioItems4} />}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
