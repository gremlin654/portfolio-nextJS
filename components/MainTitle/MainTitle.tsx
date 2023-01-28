import { FC } from 'react';

import styles from './MainTitle.module.scss';

export type MainTitleProps = {
  text: string;
};

const MainTitle: FC<MainTitleProps> = ({ text }) => (
  <h2 className={styles.title}>
    {text.toUpperCase()}
    <span className={styles.title__border}></span>
  </h2>
);

export default MainTitle;
