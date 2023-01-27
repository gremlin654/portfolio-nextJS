import styles from './NeonTitle.module.scss';

interface IHeadingProps {
  tag?: keyof JSX.IntrinsicElements;
  text: string;
}

const NeonTitle = ({ text, tag }: IHeadingProps) => {
  const Tag = tag || 'h1';

  return (
    <Tag
      className={`${styles.hero_title__neon_text} ${styles.hero_title__pulsate}`}
    >
      {text}
    </Tag>
  );
};

export default NeonTitle;
