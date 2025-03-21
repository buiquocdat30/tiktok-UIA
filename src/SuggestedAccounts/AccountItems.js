import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { wrapper as ProperWrapper } from '~/component/proper';
import AccountPreview from './AccountPreview';

import styles from './SuggestedAccounts.Module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
  const renderReview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <ProperWrapper>
          <AccountPreview />
        </ProperWrapper>
      </div>
    );
  };
  return (
    <Tippy interactive delay={[800, 0]} render={renderReview} offset={[-20, 0]} placement="bottom">
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
    </Tippy>
  );
}

AccountItem.propTypes = {};
export default AccountItem;
