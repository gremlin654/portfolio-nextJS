import { useState } from 'react';

import { useMediaQuery } from '@/hooks/hooks';
import MainTitle from '../MainTitle/MainTitle';
import PortfolioTabControl from './PortfolioTabControl/PortfolioTabControl';
import PortfolioTabContent from './PortfolioTabContent/PortfolioTabContent';
import PortfolioSlider from './PortfolioSlider/PortfolioSlider';
import { IProject } from '@/types/types';

import styles from './Portfolio.module.scss';

interface IPortfolioProps {
  projects: IProject[] | null;
}

const Portfolio = ({ projects }: IPortfolioProps) => {
  const [tab1, setTab1] = useState<boolean>(true);
  const [tab2, setTab2] = useState<boolean>(false);
  const [tab3, setTab3] = useState<boolean>(false);

  const isMobile = useMediaQuery(1080);

  const handleShowItems1 = () => {
    setTab1(true);
    setTab2(false);
    setTab3(false);
  };
  const handleShowItems2 = () => {
    setTab1(false);
    setTab2(true);
    setTab3(false);
  };
  const handleShowItems3 = () => {
    setTab1(false);
    setTab2(false);
    setTab3(true);
  };

  const portfolioControls = [
    { id: 1, title: 'Сайты', isActive: tab1, handler: handleShowItems1 },
    {
      id: 2,
      title: 'Разные проекты',
      isActive: tab2,
      handler: handleShowItems2,
    },
    { id: 3, title: 'Все проекты', isActive: tab3, handler: handleShowItems3 },
  ];

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
              {tab1 && projects && (
                <PortfolioTabContent
                  tabItems={projects.filter((item) => item.type === 'site')}
                />
              )}
              {tab2 && projects && (
                <PortfolioTabContent
                  tabItems={projects.filter((item) => item.type === 'other')}
                />
              )}
              {tab3 && projects && <PortfolioTabContent tabItems={projects} />}
            </ul>
          </>
        )}
      </div>
      {isMobile && (
        <div className={styles.portfolio__list__mobile}>
          <div className={styles.portfolio__list__mobile__container}>
            {tab1 && projects && (
              <PortfolioSlider
                tabItems={projects.filter((item) => item.type === 'site')}
              />
            )}
            {tab2 && projects && (
              <PortfolioSlider
                tabItems={projects.filter((item) => item.type === 'other')}
              />
            )}
            {tab3 && projects && <PortfolioSlider tabItems={projects} />}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
