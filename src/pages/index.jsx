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
import { useTranslation } from 'next-i18next';
import Meta from '@/components/Meta';
import styles from '@/styles/home.module.scss';

export const getStaticProps = async ({ locale }) => ({
  props: {
    // locale 값이 undefined일 경우 기본값으로 'ko' 사용
    ...(await serverSideTranslations(locale ?? 'ko', ['common'])),
  },
});

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation();
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
      <Meta />
      <Header />
      <div className={styles.home__section0}>
        <div className={styles.home__section0__content}>
          <div className={styles.home__section0__content__text}>
            <p
              className={styles.home__section0__content__text__title}
              dangerouslySetInnerHTML={{ __html: t('sentence.ai_3d_model_creation') }}
            />
            <p
              className={styles.home__section0__content__text__description}
              dangerouslySetInnerHTML={{ __html: t('sentence.ai_3d_model_description') }}
            />
            <button
              className={styles.home__section0__content__text__button}
              onClick={() => router.push('/register')}
            >
              {t('sentence.start_for_free')}
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
          <p
            className={styles.home__section1__content__title}
            dangerouslySetInnerHTML={{ __html: t('sentence.mobile_based_easy_3d_scanning') }}
          />
          <p
            className={styles.home__section1__content__description}
            dangerouslySetInnerHTML={{ __html: t('sentence.studio_free_3d_scanning') }}
          />
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
          <p
            className={styles.home__section2__content__title}
            dangerouslySetInnerHTML={{ __html: t('sentence.fast_realistic_ai_technology') }}
          />
          <p
            className={styles.home__section2__content__description}
            dangerouslySetInnerHTML={{ __html: t('sentence.create_3d_models') }}
          />
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
          <p
            className={styles.home__section3__content__title}
            dangerouslySetInnerHTML={{ __html: t('sentence.easy_editing_and_various_applications') }}
          />
          <p
            className={styles.home__section3__content__description}
            dangerouslySetInnerHTML={{ __html: t('sentence.start_with_vrin_3d') }}
          />
        </div>
      </div>
      <div className={styles.home__section4}>
        <div className={styles.home__section4__content}>
          <p
            className={styles.home__section4__content__title}
            dangerouslySetInnerHTML={{ __html: t('sentence.the_simplest_way_to_generate') }}
          />
          <p
            className={styles.home__section4__content__subTitle}
            dangerouslySetInnerHTML={{ __html: t('sentence.save_time_and_costs') }}
          />
          <p
            className={styles.home__section4__content__description}
            dangerouslySetInnerHTML={{ __html: t('sentence.efficient_content_creation') }}
          />
          <div className={styles.home__section4__content__box}>
            <div className={styles.home__section4__content__box__item}>
              <div className={styles.home__section4__content__box__item__header}>
                <span className={styles.home__section4__content__box__item__header__number}>80%</span>
                <ArrowDownSvg color="#3737CC" />
              </div>
              <span
                className={styles.home__section4__content__box__item__title}
                dangerouslySetInnerHTML={{ __html: t('sentence.cost_reduction_equipment') }}
              />
              <span
                className={styles.home__section4__content__box__item__description}
                dangerouslySetInnerHTML={{ __html: t('sentence.standard_3d_scanner') }}
              />
            </div>
            <div className={styles.home__section4__content__box__item}>
              <div className={styles.home__section4__content__box__item__header}>
                <span className={styles.home__section4__content__box__item__header__number}>4H</span>
                <ArrowDownSvg color="#3737CC" />
              </div>
              <span
                className={styles.home__section4__content__box__item__title}
                dangerouslySetInnerHTML={{ __html: t('sentence.time_reduction') }}
              />
              <span
                className={styles.home__section4__content__box__item__description}
                dangerouslySetInnerHTML={{ __html: t('sentence.modeler_working_time') }}
              />
            </div>
            <div className={styles.home__section4__content__box__item}>
              <div className={styles.home__section4__content__box__item__header}>
                <span className={styles.home__section4__content__box__item__header__number}>90%</span>
                <ArrowDownSvg color="#3737CC" />
              </div>
              <span
                className={styles.home__section4__content__box__item__title}
                dangerouslySetInnerHTML={{ __html: t('sentence.asset_creation_cost_reduction') }}
              />
              <span
                className={styles.home__section4__content__box__item__description}
                dangerouslySetInnerHTML={{ __html: t('sentence.modeler_labor_cost') }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.home__section5}>
        <div className={styles.home__section5__content}>
          <p
            className={styles.home__section5__content__title}
            dangerouslySetInnerHTML={{ __html: t('sentence.one_stop_solution') }}
          />
          <p
            className={styles.home__section5__content__description}
            dangerouslySetInnerHTML={{ __html: t('sentence.all_in_one_vrin_3d') }}
          />
          <div className={styles.home__section5__content__boxes}>
            <div className={styles.home__section5__content__boxes__item}>
              <div className={styles.home__section5__content__boxes__item__inner}>
                <span
                  className={styles.home__section5__content__boxes__item__inner__text}
                  dangerouslySetInnerHTML={{ __html: t('sentence.mobile_based_easy_3d_scanning2') }}
                />
                <span
                  className={styles.home__section5__content__boxes__item__inner__text__hover}
                  dangerouslySetInnerHTML={{ __html: t('sentence.studio_free_3d_scanning2') }}
                />
                <span className={styles.home__section5__content__boxes__item__inner__arrow}>
                  <ArrowTopRightSvg color="#F3EEFF" />
                </span>
              </div>
              <Image
                className={styles.home__section5__content__boxes__item__image__chair}
                src={Vrin3dImage}
                alt="VRIN 3D"
                width={623}
              />
              <Image
                className={styles.home__section5__content__boxes__item__image__phone}
                src={Vrin3dImagePhone}
                alt="VRIN PHONE"
                width={623}
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
                <span
                  className={styles.home__section5__content__boxes__item__inner__text}
                  dangerouslySetInnerHTML={{ __html: t('sentence.anyone_can_edit') }}
                />
                <span
                  className={styles.home__section5__content__boxes__item__inner__text__hover}
                  dangerouslySetInnerHTML={{ __html: t('sentence.fast_asset_editing') }}
                />
                <span className={styles.home__section5__content__boxes__item__inner__arrow}>
                  <ArrowTopRightSvg color="#F3EEFF" />
                </span>
              </div>
              <Image
                className={styles.home__section5__content__boxes__item__image__bag}
                src={Vrin3dImageBag}
                alt="VRIN BAG"
                width={506}
              />
              {activeImageSources.map((src, index) => (
                <Image
                  key={index}
                  className={styles.home__section5__content__boxes__item__image__bag__hover}
                  style={{ opacity: index === activeImageIndex ? 1 : 0 }}
                  src={src}
                  alt={`VRIN BAG${index + 1}`}
                  width={578}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.home__demo}>
        <div className={styles.home__demo__content}>
          <p
            className={styles.home__demo__content__title}
            dangerouslySetInnerHTML={{ __html: t('sentence.still_hesitating') }}
          />
          <button
            className={styles.home__demo__content__button}
            onClick={() => router.push('/register')}
          >
            {t('sentence.start_for_free')}
          </button>
        </div>
      </div>
    </main>
  );
}
