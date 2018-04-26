import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import * as baseActions from 'store/modules/base';
import * as authApi from 'lib/api/auth';

import styles from './HeaderGnb.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

class HeaderGnb extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    authApi.postLogout()
           .then(res => {
             console.log(`authApi.postLogout()`);
             console.log(res);
           })
           .catch(e => console.error(e))
  }

  render() {
    console.log(this.props);
    const { user } = this.props;
    return (
      <nav className={cx('gnb')}>
        <ul className={cx('gnb-ul')}>
          <li className={cx('gnb-li')}><NavLink to={`/about`} activeClassName="active">About</NavLink></li>
          <li className={cx('gnb-li')}><NavLink to={`/blog/write`} activeClassName="active">Blog</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default connect(
  (state) => ({
    user: state.base.get('user').toJS(),
  }),
  (dispatch) => ({
    // BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(HeaderGnb);
