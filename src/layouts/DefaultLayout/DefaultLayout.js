import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header/Header';
import Sidebar from '~/layouts/components/Sidebar/Sidebar';
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

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
