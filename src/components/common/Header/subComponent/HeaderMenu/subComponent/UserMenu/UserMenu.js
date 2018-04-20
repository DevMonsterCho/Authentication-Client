import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './UserMenu.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = (name) => {
  return (
    <button>{name}</button>
  )
};

class UserMenu extends Component {
  handleLogout = () => {
    this.props.handleLogout();
  }
  handleModify = () => {

  }

  render() {
    const { user } = this.props;
    return (
      <div className={cx('user-menu')}>
        <div className={cx('title')}>
          로그인 정보
        </div>
        <div className={cx('user-info')}>
          <div className={cx('info')}>
            <span className={cx('label')}>Email</span>
            <span className={cx('value')}>{`${user.email}`}</span>
          </div>
          <div className={cx('info')}>
            <span className={cx('label')}>Name</span>
            <span className={cx('value')}>{`${user.name}`}</span>
          </div>
        </div>
        <div className={cx('button-group')}>
          <Link to={`/user/modify`} className={cx('button', 'inline')} onClick={this.handleModify}>
            정보수정
          </Link>
          <button className={cx('button', 'inline')} onClick={this.handleLogout}>
            로그아웃
          </button>
        </div>
      </div>
    );
  }
}

export default UserMenu;