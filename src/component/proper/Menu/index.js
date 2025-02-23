import Tippy from '@tippyjs/react/headless'; // different import path!
import MenuItem from './MenuItem';
import Header from './Header';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { wrapper as ProperWrapper } from '~/component/proper';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn }) {
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

  return (
    <Tippy
      
      interactive
      delay={[0, 700]}
      offset=[12,8]
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <ProperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  //set history bằng phần tử trước đó 1 cấp, nghĩa là bỏ đi 1 phần tử cuối cùng bằng cách Lấy các phần tử từ chỉ mục 0 đến chỉ mục cuối cùng - 1 (gần cuối)
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </ProperWrapper>
        </div>
      )}
      onHide={() => {
        //set lại về menu tầng đầu tiên
        setHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
