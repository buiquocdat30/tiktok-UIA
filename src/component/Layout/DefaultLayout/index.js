import Header from '~/component/Layout/components/Header/index';
import Sidebar from '~/component/Layout/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      {/* Header là tĩnh */}
      <Header />
      <div className={cx('container')}>
        {/* Sidebar cũng tĩnh */}
        <Sidebar />
        {/* chỉ có children là động do được truyền vào */}
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
