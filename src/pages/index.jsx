import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import styles from '@/styles/home.module.scss';

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.home}>
      <Header />
      <div className={styles.home__section0}>
        <div className={styles.home__section0__content}>
          <div className={styles.home__section0__content__text}>
            <p className={styles.home__section0__content__text__title}>AI로 만드는 3D 모델</p>
            <p className={styles.home__section0__content__text__description}>
              인공지능으로 자동 생성되는 3D 모델과
              <br />
              손쉬운 편집을 경험해보세요.
            </p>
            <button
              className={styles.home__section0__content__text__button}
              onClick={() => router.push('/register')}
            >
              무료로 시작하기
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
