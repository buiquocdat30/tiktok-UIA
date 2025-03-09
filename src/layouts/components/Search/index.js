import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css';

import * as searchServices from '~/Services/searchService';
import { useDebounce } from '~/hook';
import { wrapper as ProperWrapper } from '~/component/proper';
import AccountItem from '~/component/AccountItem';
import { SearchIcon } from '~/component/Icons';

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

    const fetchApi = async () => {
      setLoading(true);
      const result = await searchServices.search(debounced);
      setSearchResult(result);

      setLoading(false);
    };

    fetchApi();

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
        <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
