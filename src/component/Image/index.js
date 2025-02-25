import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
  const [fallback, setfallback] = useState('');

  const handlError = () => {
    setfallback(customFallback);
  };
  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      {...props}
      src={fallback || src}
      alt={alt}
      onError={handlError}
    />
  );
});

export default Image;
