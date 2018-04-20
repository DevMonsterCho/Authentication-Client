import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Logo, HeaderGnb, HeaderMenu } from './subComponent'

const cx = classNames.bind(styles);

const Header = (props) => (
  <header className={cx('header')}>
    <div className={cx('header-content')}>
      <Logo/>
      <HeaderGnb/>
      <HeaderMenu/>
    </div>
  </header>
);

export default Header;
