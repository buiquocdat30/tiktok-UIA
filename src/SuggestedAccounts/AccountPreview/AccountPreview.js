import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/component/Button';

const cx = classNames.bind(styles);

const AccountPreview = () => {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://yt3.ggpht.com/o1EZk5TxdjnL1HhBOjUiWzU2y8bFPTsWO8Jib6ZF4ONsZ19kMxmJEUiS-vbQbjdU87c6vQ_Ksg=s48-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <div>
          <Button className={cx('follow-btn')} primary small>
            Follow
          </Button>
        </div>
      </header>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          {' '}
          <strong>quocnguyenphu</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Quốc Nguyễn Phú</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Follower</span>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Like</span>
        </p>
      </div>
    </div>
  );
};

export default AccountPreview;
