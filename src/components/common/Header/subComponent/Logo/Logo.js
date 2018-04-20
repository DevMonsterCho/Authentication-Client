import React from 'react';
import styles from './Logo.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Logo = () => (
  <div className={cx('home')}>
    Home
  </div>
);

export default Logo;