import { useMediaQuery } from '@/hooks/hooks';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import PortfolioSliderItem from '../PortfolioSliderItem/PortfolioSliderItem';

interface IPortfolioSliderProps {
  tabItems: {
    id: number;
    img: string;
    link: string;
    title: string;
  }[];
}

const PortfolioSlider = ({ tabItems }: IPortfolioSliderProps) => {
  const isMobile800 = useMediaQuery(800);
  const isMobile485 = useMediaQuery(485);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Carousel
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={isMobile485 ? 71.4 : isMobile800 ? 48 : 40.1}
      >
        {tabItems.map((item) => (
          <PortfolioSliderItem key={item.id} title={item.title} img={item.img} link={item.link} />
        ))}
      </Carousel>
    </motion.div>
  );
};

export default PortfolioSlider;
