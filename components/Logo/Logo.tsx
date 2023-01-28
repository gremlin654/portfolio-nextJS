import Image from 'next/image';
import Link from 'next/link';

import styles from './Logo.module.scss';

interface ILogoProps {
  marginBottom?: number;
}

const Logo = ({ marginBottom }: ILogoProps) => {
  return (
    <Link href="/">
      <Image
        className={styles.logo}
        src="/assets/images/svg/logo.svg"
        alt="logo"
        width={85}
        height={40}
        style={{ marginBottom }}
      />
    </Link>
  );
};

export default Logo;
