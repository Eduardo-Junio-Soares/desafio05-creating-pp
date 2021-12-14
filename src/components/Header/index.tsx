import Logo from '../../assets/icons/logo';

import styles from './header.module.scss'

export default function Header() {
  return (
    <div className={styles.logoTitle}>
      <Logo />
    </div>
  );
}
