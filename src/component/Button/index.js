import classNames from 'classnames/bind';
import { Link } from 'react-router';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

//chứa các prop con, và ...passProp là các prop thêm ngoài các cái kia
function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  disabled = false,
  small = false,
  large = false,
  className,
  leftIcon,
  rightIcon,
  onClick,
  children,
  ...passProp
}) {
  let Comp = 'button';
  //tạo nhóm prop, có click và các prop ngoài dự kiến
  const prop = {
    onClick,

    ...passProp,
  };
  //nếu có disabled remove event listener
  if (disabled) {
    Object.keys(prop).forEach((key) => {
      if (key.startsWith('on') && typeof prop[key] === 'function') {
        delete prop[key];
      }
    });
  }

  //nếu có prop to thì to =to và COmp = lInk, link nội bộ
  if (to) {
    prop.to = to;
    Comp = Link;
  }
  //nếu có href thì comp là 1 thẻ à vó href = href thêm vô
  else if (href) {
    prop.href = href;
    Comp = 'a';
  }
  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    text,
    rounded,
    disabled,
    small,
    large,
  });
  return (
    <Comp className={classes} {...prop}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
