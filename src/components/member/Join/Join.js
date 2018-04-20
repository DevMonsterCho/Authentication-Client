import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as baseActions from 'store/modules/base';
import MemberExtendComponent from 'components/member/MemberExtendComponent'
import styles from './Join.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class Join extends MemberExtendComponent.WrappedComponent {
  constructor(props) {
    super(props);

    this.state = {
      input: {
        name: '',
        email: '',
        password: ''
      }
    }
  }

  render() {
    const { user } = this.props;
    console.log(`user : `, this.props.user);

    return (
      <div className={cx(`login-wrap`)}>
        <div className={cx('login')}>
          <div className={cx('title')}>
            회원가입
          </div>
          {
            user.error && (<span className={cx('error')}>
                {user.error}
            </span>)
          }
          <form onSubmit={this.handleFormJoin}>
            <label htmlFor={`name`}>name</label>
            <input id={`name`}
              type={`text`}
              ref={ref => this.inputName = ref}
              name={`name`}
              placeholder={`name`}
              value={this.state.input.name}
              onChange={this.handleInputChange}
              className={cx('input', 'name')}
            />
            <label htmlFor={`email`}>email</label>
            <input id={`email`}
              type={`text`}
              ref={ref => this.inputEmail = ref}
              name={`email`}
              placeholder={`Email`}
              value={this.state.input.email}
              onChange={this.handleInputChange}
              className={cx('input', 'email')}
            />
            <label htmlFor={`password`}>password</label>
            <input id={`password`}
              type={`password`}
              ref={ref => this.inputPassword = ref}
              name={`password`}
              placeholder={`Password`}
              value={this.state.input.password}
              onChange={this.handleInputChange}
              className={cx('input', 'password')}
            />
            <div className={cx('button-group')}>
              <button type={`submit`} onClick={this.handleFormJoin}>로그인</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    user: state.base.get('user').toJS(),
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
  })
)(Join);