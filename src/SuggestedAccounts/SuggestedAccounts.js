import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.Module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItems';

const cx = classNames.bind(styles);
function SuggestedAccounts({ label }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      <AccountItem></AccountItem>
      <AccountItem></AccountItem>
      <AccountItem></AccountItem>
      <AccountItem></AccountItem>
      <AccountItem></AccountItem>
      <AccountItem></AccountItem>
      <AccountItem></AccountItem>

      <p className={cx('more-btn')}>See All</p>
    </div>
  );
}

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
