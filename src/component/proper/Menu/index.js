import Tippy from '@tippyjs/react/headless'; // different import path!
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { wrapper as ProperWrapper } from '~/component/proper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => {
      return <MenuItem key={index} data={item} />;
    });
  };

  return (
    <Tippy
      visible
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <ProperWrapper className={cx('menu-popper')}>{renderItems()}</ProperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
