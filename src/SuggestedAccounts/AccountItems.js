import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.Module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('account-item')}>
      <img
        className={cx('avatar')}
        src="https://yt3.ggpht.com/o1EZk5TxdjnL1HhBOjUiWzU2y8bFPTsWO8Jib6ZF4ONsZ19kMxmJEUiS-vbQbjdU87c6vQ_Ksg=s48-c-k-c0x00ffffff-no-rj"
        alt=""
      />
      <div className={cx('item-info')}>
        <p className={cx('nickname')}>
          {' '}
          <strong>quocnguyenphu</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Quốc Nguyễn Phú</p>
      </div>
    </div>
  );
}

AccountItem.propTypes = {};
export default AccountItem;
