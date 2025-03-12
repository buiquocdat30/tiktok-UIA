import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless'; // different import path!
import MenuItem from './MenuItem';
import Header from './Header';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { wrapper as ProperWrapper } from '~/component/proper';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
  //dùng useState tạo biến lịch sử với khởi đầu là data:items
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      //convert về boolean= !!, nếu có thì trả về true
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handleBack = () => {
    //set history bằng phần tử trước đó 1 cấp, nghĩa là bỏ đi 1 phần tử cuối cùng bằng cách Lấy các phần tử từ chỉ mục 0 đến chỉ mục cuối cùng - 1 (gần cuối)
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const renderResult = (attrs) => (
    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
      <ProperWrapper className={cx('menu-popper')}>
        {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
        <div className={cx('menu-body')}> {renderItems()}</div>
      </ProperWrapper>
    </div>
  );

  //Reset to frist page
  const handleResetMenu = () => {
    //set lại về menu tầng đầu tiên
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <Tippy
      interactive
      hideOnClick={hideOnClick}
      delay={[0, 700]}
      offset={[12, 8]}
      placement="bottom-end"
      render={renderResult}
      onHide={handleResetMenu}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
