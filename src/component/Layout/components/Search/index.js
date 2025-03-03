import React, { useEffect, useState, useRef } from 'react';
import { useDebounce } from '~/hook';
import axios from 'axios';

import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css';
import { wrapper as ProperWrapper } from '~/component/proper';
import AccountItem from '~/component/AccountItem';
import { SearchIcon } from '~/component/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 800);

  const inputRef = useRef();

  //gọi API trong này
  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);

    //encodeURIComponent(searchValue) mã hóa ký tự sang định dạng ký tự hợp lệ trên URL
    axios
      .get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
        params: {
          q: debounced,
          type: 'less',
        },
      })
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced]);

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
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
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
          onChange={(e) => {
            //ko cho nhập khoảng trắng
            e.target.value = e.target.value.trimStart();
            setSearchValue(e.target.value);
          }}
          onFocus={() => setShowResult(true)}
        />
        {/* Khi có searchValue thì mới hiện button clear */}
        {!!searchValue && !loading && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && (
          <button className={cx('loading')}>
            <FontAwesomeIcon icon={faSpinner} />
          </button>
        )}
        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
