import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/header.module.scss';
import LogoSvg from '@/assets/svg/Logo';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__logo}>
          <Link href="/">
            <LogoSvg color="white" />
          </Link>
        </div>
        <ul className={styles.header__menu}>
          <li className={styles.header__menu__price}>
            <Link href="/pricing">가격정책</Link>
          </li>
          <li className={styles.header__menu__kor}>KOR</li>
          <li className={styles.header__menu__login}>
            <Link href="/login">로그인</Link>
          </li>
          <li className={styles.header__menu__start}>
            <Link href="/register">무료로 시작하기</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
