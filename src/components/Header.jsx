import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/header.module.scss';
import LogoSvg from '@/assets/svg/Logo';
import ArrowTopSvg from '@/assets/svg/ArrowTop';
import ModalSelect from '@/components/ModalSelect';
import { useTranslation } from 'next-i18next';

export default function Header() {
  const { t, i18n } = useTranslation('common');
  const [isOpenLanguageModal, setIsOpenLanguageModal] = useState(false);
  const languages = [
    {
      label: 'KOR',
      value: 'ko',
    },
    {
      label: 'ENG',
      value: 'en',
    },
  ];

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    setIsOpenLanguageModal(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__inner__logo}>
          <Link href="/">
            <LogoSvg color="white" />
          </Link>
        </div>
        <ul className={styles.header__inner__menu}>
          <li className={styles.header__inner__menu__price}>
            <Link href="/pricing">가격정책</Link>
          </li>
          <li className={styles.header__inner__menu__language}>
            <button
              className={styles.header__inner__menu__language__button}
              onClick={() => setIsOpenLanguageModal(!isOpenLanguageModal)}
            >
              {languages.find((language) => language.value === i18n.language).label}
            </button>
            <span className={styles.header__inner__menu__language__arrow}>
              <ArrowTopSvg color="rgb(111, 117, 123)" />
            </span>
            {isOpenLanguageModal && (
              <ModalSelect
                isOpen={isOpenLanguageModal}
                setOpen={setIsOpenLanguageModal}
                className={styles.header__inner__menu__language__modal}
                options={languages}
                value={i18n.language}
                onChange={handleLanguageChange}
              />
            )}
          </li>
          <li className={styles.header__inner__menu__login}>
            <Link href="/login">로그인</Link>
          </li>
          <li className={styles.header__inner__menu__start}>
            <Link href="/register">무료로 시작하기</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
