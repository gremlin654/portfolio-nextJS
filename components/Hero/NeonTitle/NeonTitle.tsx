import styles from './NeonTitle.module.scss';

const NeonTitle = ({ text }: { text: string }) => (
  <h1
    className={`${styles.hero_title__neon_text} ${styles.hero_title__pulsate}`}
  >
    {text}
  </h1>
);

export default NeonTitle;
