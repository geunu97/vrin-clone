import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useInterval from '@/hooks/useInterval';
import Header from '@/components/Header';
import ArrowDownSvg from '@/assets/svg/ArrowDown';
import ArrowTopRightSvg from '@/assets/svg/ArrowTopRight';
import Vrin3dImage from '@/assets/images/home_C-1_PC_ko-093e56a1.png';
import Vrin3dImagePhone from '@/assets/images/home_C-3_PC-52386fbc.png';
import Vrin3dImageBag from '@/assets/images/home_C-2_PC_ko-5168634f.png';
import Vrin3dImageBag1 from '@/assets/images/home_bag_1-016e6c5c.png';
import Vrin3dImageBag2 from '@/assets/images/home_bag_2-ec220ca9.png';
import Vrin3dImageBag3 from '@/assets/images/home_bag_3-58b0e494.png';
import Vrin3dImageBag4 from '@/assets/images/home_bag_4-b1fee5e3.png';
import Vrin3dImageBag5 from '@/assets/images/home_bag_5-b77afbdd.png';
import Vrin3dImageBag6 from '@/assets/images/home_bag_6-78494c33.png';
import Vrin3dImageBag7 from '@/assets/images/home_bag_7-dc30c20d.png';
import Vrin3dImageBag8 from '@/assets/images/home_bag_8-38aed96a.png';
import Vrin3dImageBag9 from '@/assets/images/home_bag_9-5e42e9c2.png';
import Vrin3dImageBag10 from '@/assets/images/home_bag_10-3c83f6b4.png';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from '@/styles/home.module.scss';

export const getStaticProps = async ({ locale }) => ({
  props: {
    // locale 값이 undefined일 경우 기본값으로 'ko' 사용
    ...(await serverSideTranslations(locale ?? 'ko', ['common'])),
  },
});

export default function Home() {
  const router = useRouter();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImageSources = [
    Vrin3dImageBag1,
    Vrin3dImageBag2,
    Vrin3dImageBag3,
    Vrin3dImageBag4,
    Vrin3dImageBag5,
    Vrin3dImageBag6,
    Vrin3dImageBag7,
    Vrin3dImageBag8,
    Vrin3dImageBag9,
    Vrin3dImageBag10,
  ];

  useInterval(() => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % 10);
  }, 1000);

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
      <div className={styles.home__section1}>
        <div className={styles.home__section1__video__container}>
          <video
            width="100%"
            height="100%"
            loop={true}
            playsInline={true}
            autoPlay={true}
            src="/assets/videos/home_content_1_PC-3cb3a75d.mp4"
            muted={true}
          ></video>
        </div>
        <div className={styles.home__section1__content}>
          <p className={styles.home__section1__content__title}>
            모바일 기반의
            <br />
            간편한 3D 스캐닝
          </p>
          <p className={styles.home__section1__content__description}>
            스튜디오와 고가의 스캐너 없이도
            <br />
            누구나, 언제든
          </p>
        </div>
      </div>
      <div className={styles.home__section2}>
        <div className={styles.home__section2__video__container}>
          <video
            width="100%"
            height="100%"
            loop={true}
            playsInline={true}
            autoPlay={true}
            src="/assets/videos/home_content_2_PC-c0a5dbbe.mp4"
            muted={true}
          ></video>
        </div>
        <div className={styles.home__section2__content}>
          <p className={styles.home__section2__content__title}>
            AI 기술로 더욱 빠르고
            <br />
            더욱 리얼하게
          </p>
          <p className={styles.home__section2__content__description}>3D 모델을 제작하세요.</p>
        </div>
      </div>
      <div className={styles.home__section3}>
        <div className={styles.home__section3__video__container}>
          <video
            width="100%"
            height="100%"
            loop={true}
            playsInline={true}
            autoPlay={true}
            src="/assets/videos/home_content_3_PC-706ebb88.mp4"
            muted={true}
          ></video>
        </div>
        <div className={styles.home__section3__content}>
          <p className={styles.home__section3__content__title}>
            3D의 손쉬운 편집과
            <br />
            다양한 활용
          </p>
          <p className={styles.home__section3__content__description}>VRIN 3D와 함께 시작하세요.</p>
        </div>
      </div>
      <div className={styles.home__section4}>
        <div className={styles.home__section4__content}>
          <p className={styles.home__section4__content__title}>The simplest way to generate</p>
          <p className={styles.home__section4__content__subTitle}>시간도 비용도 절약하는 3D 모델 제작</p>
          <p className={styles.home__section4__content__description}>
            무겁고 비싼 3D 스캐닝 장비없이 핸드폰 하나로 완성되는 3D,
            <br />
            시간과 비용을 절약해 콘텐츠를 효율적으로 제작하세요.
          </p>
          <div className={styles.home__section4__content__box}>
            <div className={styles.home__section4__content__box__item}>
              <div className={styles.home__section4__content__box__item__header}>
                <span className={styles.home__section4__content__box__item__header__number}>80%</span>
                <ArrowDownSvg color="#3737CC" />
              </div>
              <span className={styles.home__section4__content__box__item__title}>기기비용 절감</span>
              <span className={styles.home__section4__content__box__item__description}>3D 스캐너 기준</span>
            </div>
            <div className={styles.home__section4__content__box__item}>
              <div className={styles.home__section4__content__box__item__header}>
                <span className={styles.home__section4__content__box__item__header__number}>4H</span>
                <ArrowDownSvg color="#3737CC" />
              </div>
              <span className={styles.home__section4__content__box__item__title}>시간 감축</span>
              <span className={styles.home__section4__content__box__item__description}>모델러 작업시간 기준</span>
            </div>
            <div className={styles.home__section4__content__box__item}>
              <div className={styles.home__section4__content__box__item__header}>
                <span className={styles.home__section4__content__box__item__header__number}>90%</span>
                <ArrowDownSvg color="#3737CC" />
              </div>
              <span className={styles.home__section4__content__box__item__title}>에셋 생성비용 절감</span>
              <span className={styles.home__section4__content__box__item__description}>모델러 인건비 기준</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.home__section5}>
        <div className={styles.home__section5__content}>
          <p className={styles.home__section5__content__title}>One-stop solution</p>
          <p className={styles.home__section5__content__description}>스캔부터 편집까지 VRIN 3D에서 한번에</p>
          <div className={styles.home__section5__content__boxes}>
            <div className={styles.home__section5__content__boxes__item}>
              <div className={styles.home__section5__content__boxes__item__inner}>
                <span className={styles.home__section5__content__boxes__item__inner__text}>
                  모바일 기반의
                  <br />
                  간편한
                  <br />
                  3D 스캐닝
                </span>
                <span className={styles.home__section5__content__boxes__item__inner__text__hover}>
                  스튜디오와 고가의 스캐너 없이도
                  <br />
                  누구나, 언제나 가능한 3D 스캐닝
                </span>
                <span className={styles.home__section5__content__boxes__item__inner__arrow}>
                  <ArrowTopRightSvg color="#F3EEFF" />
                </span>
              </div>
              <Image
                className={styles.home__section5__content__boxes__item__image__chair}
                src={Vrin3dImage}
                alt="VRIN 3D"
                width={623}
                height={960}
              />
              <Image
                className={styles.home__section5__content__boxes__item__image__phone}
                src={Vrin3dImagePhone}
                alt="VRIN PHONE"
                width={623}
                height={960}
              />
              <video
                className={styles.home__section5__content__boxes__item__video}
                loop={true}
                playsInline={true}
                autoPlay={true}
                src="/assets/videos/home_2_PC-f15f3e50.mp4"
                muted={true}
              ></video>
            </div>
            <div className={styles.home__section5__content__boxes__item}>
              <div className={styles.home__section5__content__boxes__item__inner}>
                <span className={styles.home__section5__content__boxes__item__inner__text}>
                  누구나 손쉬운 편집이
                  <br />
                  가능하도록
                  <br />
                  VRIN 3D
                  <br />
                  에디터
                </span>
                <span className={styles.home__section5__content__boxes__item__inner__text__hover}>
                  AI 재질 생성, 배경 편집 등
                  <br />
                  에셋을 빠르게 편집
                </span>
                <span className={styles.home__section5__content__boxes__item__inner__arrow}>
                  <ArrowTopRightSvg color="#F3EEFF" />
                </span>
              </div>
              <Image
                className={styles.home__section5__content__boxes__item__image__bag}
                src={Vrin3dImageBag}
                alt="VRIN BAG"
                width={506}
                height={508}
              />
              {activeImageSources.map((src, index) => (
                <Image
                  key={index}
                  className={styles.home__section5__content__boxes__item__image__bag__hover}
                  style={{ opacity: index === activeImageIndex ? 1 : 0 }}
                  src={src}
                  alt={`VRIN BAG${index + 1}`}
                  width={100}
                  height={876}
                  layout="responsive"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.home__demo}>
        <div className={styles.home__demo__content}>
          <p className={styles.home__demo__content__title}>아직도 망설여지세요?</p>
          <button
            className={styles.home__demo__content__button}
            onClick={() => router.push('/register')}
          >
            무료로 시작하기
          </button>
        </div>
      </div>
    </main>
  );
}
