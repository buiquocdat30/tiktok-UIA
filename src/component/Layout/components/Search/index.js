import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState, useRef } from 'react';

import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css';
import { wrapper as ProperWrapper } from '~/component/proper';
import AccountItem from '~/component/AccountItem';
import { SearchIcon } from '~/component/Icons';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);

  const inputRef = useRef();

  //gọi API trong này
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([2]);
    }, 0);
  }, []);

  const handleClear = () => {
    // set input về rỗng
    setSearchValue('');
    setSearchResult([]);
    // focus vào ô input vừa đưa về rỗng
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };
  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <ProperWrapper>
            <h4 className={cx('search-title')}>Account</h4>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
          </ProperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          type="text"
          ref={inputRef}
          value={searchValue}
          placeholder="Search account and videos"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {/* Khi có searchValue thì mới hiện button clear */}
        {!!searchValue && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {/* <button className={cx('loading')}>
          <FontAwesomeIcon icon={faSpinner} />
        </button> */}
        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
