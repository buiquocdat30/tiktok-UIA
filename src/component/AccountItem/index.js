import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/f739eb282620eb8c465d95f0dc0c1be2.jpeg?lk3s=a5d48078&nonce=41534&refresh_token=3129db3646f8a9520ce65ad7878d9258&x-expires=1739361600&x-signature=LdyWmCQoIOKuDJ7D8GekS1Z5TFw%3D&shp=a5d48078&shcp=81f88b70"
        alt="hoa"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyễn Văn A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>nguyenvanA</span>
      </div>
    </div>
  );
}

export default AccountItem;
