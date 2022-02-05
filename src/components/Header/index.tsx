import { SingInButton } from '../SingInButton';
import styles from './styles.module.scss';
import Image from 'next/image';
import logoImg from '../../../public/images/logo.svg';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoImg} alt="Logo ig.news" />
        <nav>
          <a href="#" className={styles.active}>Home</a>
          <a href="">Posts</a>
        </nav>
        <SingInButton/>
      </div>
    </header>
  )
}