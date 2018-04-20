import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

import { UserMenu, GuestMenu } from './subComponent';

import styles from './HeaderMenu.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

class HeaderMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuStatus: false,
    }
  }

  handleStatus = () => {
    this.setState({
      menuStatus:  !this.state.menuStatus
    })
  }

  handleLogout = () => {
    const { BaseActions } = this.props;
    BaseActions.postAuthLogout().then(res => {
      return this.props.history.replace('/');
    })
  }

  render() {
    const { user } = this.props;
    return (
      <Fragment>
        <div className={cx('menu-button', {'toggle-on': this.state.menuStatus})} onClick={this.handleStatus}>
          <div>
            <span className={cx('bar1')}/>
            <span className={cx('bar2')}/>
            <span className={cx('bar3')}/>
          </div>
        </div>
        <div className={cx('menu-wrap', { 'toggle-on': this.state.menuStatus})}>
          <div className={cx('menu')}>
            <div className={cx('hello')}>
              {
                user.name === 'guest' ? (
                  <GuestMenu user={user}/>
                ) : (
                  <UserMenu user={user}
                            handleLogout={this.handleLogout}
                  />
                )
              }
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    user: state.base.get('user').toJS(),
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(withRouter(HeaderMenu));