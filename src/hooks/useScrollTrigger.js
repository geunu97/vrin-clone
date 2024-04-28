import { useState, useEffect } from 'react';

/* 스크롤 위치에 따라 boolean 상태를 반환하는 훅 */
const useScrollTrigger = (threshold) => {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setTriggered(offset > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return triggered;
};

export default useScrollTrigger;
