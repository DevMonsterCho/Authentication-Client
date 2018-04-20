import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './GuestMenu.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class GuestMenu extends Component {
  render() {
    return (
      <div className={cx('guest-menu')}>
        <div className={cx('title')}>
          로그인
        </div>
        <div className={cx('sub')}>
          지금 로그인을 시작해 보세요
        </div>
        <div className={cx('button-group')}>
          <Link to={`/user/login`} className={cx('button', 'block')} onClick={this.handleLogout}>
            바로가기
          </Link>
        </div>
      </div>
    );
  }
}

export default GuestMenu;