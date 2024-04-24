import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/header.module.scss';
import LogoSvg from '@/assets/svg/Logo';
import ArrowTopSvg from '@/assets/svg/ArrowTop';
import ModalSelect from '@/components/ModalSelect';
// import { useTranslation } from 'next-i18next';

export default function Header() {
  // const { t } = useTranslation('common');
  const [isOpenLanguageModal, setIsOpenLanguageModal] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('KOR');
  const languages = ['KOR', 'ENG', 'JPN'];

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
              {currentLanguage}
            </button>
            <span className={styles.header__inner__menu__language__arrow}>
              <ArrowTopSvg color="rgb(111, 117, 123)" />
            </span>

            {isOpenLanguageModal && (
              <ModalSelect
                isOpen={isOpenLanguageModal}
                setOpen={setIsOpenLanguageModal}
                className={styles.header__inner__menu__language__modal}
                options={languages.map((language) => ({ label: language, value: language }))}
                value={currentLanguage}
                // onChange={handleLanguageChange}
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
