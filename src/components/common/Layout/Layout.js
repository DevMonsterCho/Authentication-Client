import React, { Component } from 'react';
import styles from './Layout.scss';
import classNames from 'classnames/bind';
import Header from '../Header';

const cx = classNames.bind(styles);

class Layout extends Component {
  render() {
    return (
      <div className={cx('layout')}>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;