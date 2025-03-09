import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/component/Button';
import images from '~/assets/images';
import Menu from '~/component/proper/Menu';
import { MessageIcon, UploadIcon, InboxIcon } from '~/component/Icons';
import Image from '~/component/Image';
import Search from '../Search';
import { useNavigate } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'Language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'Language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];
function Header() {
  const currentUser = true;

  //handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'Language':
        //
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View Profile',
      to: '/@hoaa',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coin',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Setting',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  //điều hướng giữa các trang trong ứng dụng
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate(config.routes.home);
  };
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')} onClick={handleLogoClick}>
          <img src={images.logo} alt="tiktok" />
        </div>
        {/* poper  */}
        <Search />
        <div className={cx('action')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Update</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://yt3.ggpht.com/o1EZk5TxdjnL1HhBOjUiWzU2y8bFPTsWO8Jib6ZF4ONsZ19kMxmJEUiS-vbQbjdU87c6vQ_Ksg=s48-c-k-c0x00ffffff-no-rj"
                alt="Nguyễn Văn A"
                fallback="https://www.gravatar.com/avatar/b9541072f30818f878c159d73f35e2cd.jpg?s=80&d=mp&r=g"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
