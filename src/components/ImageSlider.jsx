import { useState } from 'react';
import Image from 'next/image';
import useInterval from '@/hooks/useInterval';

const ImageSlider = ({ imageList, imageClassName, width, intervalTime = 1000 }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useInterval(() => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  }, intervalTime);

  return (
    <>
      {imageList.map((image, index) => (
        <Image
          key={index}
          className={imageClassName}
          src={image.src}
          alt={image.alt}
          width={width}
          style={{ opacity: index === activeImageIndex ? 1 : 0 }}
          loading="lazy"
        />
      ))}
    </>
  );
};

export default ImageSlider;
