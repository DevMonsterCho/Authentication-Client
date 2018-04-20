import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as baseActions from 'store/modules/base';
import MemberExtendComponent from 'components/member/MemberExtendComponent'
import styles from './Modify.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class Modify extends MemberExtendComponent.WrappedComponent {
  constructor(props) {
    super(props);

    this.state = {
      input: {
        name: '',
        email: '',
        beforePassword: '',
        afterPassword: ''
      }
    }
  }
  componentDidMount() {
    const { user } = this.props;
    console.log(this.props);
    if(user.name === 'guest' || user.name === 'error') {
      // this.props.history.replace('/');
    } else {
      this.setState({
        input: {
          ...this.state.input,
          name: user.name,
          email: user.email,
        }
      }, () => {
        console.log(this.state.input);
      })
    }
  }

  render() {
    const { user } = this.props;
    console.log(`user : `, this.props.user);

    return (
      <div className={cx(`login-wrap`)}>
        <div className={cx('login')}>
          <div className={cx('title')}>
            정보수정
          </div>
          {
            user.error && (<span className={cx('error')}>
                {user.error}
            </span>)
          }
          <form onSubmit={this.handleFormModify}>
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
            <label htmlFor={`beforePassword`}>before Password</label>
            <input id={`beforePassword`}
              type={`password`}
              ref={ref => this.inputBeforePassword = ref}
              name={`beforePassword`}
              placeholder={`before Password`}
              value={this.state.input.password}
              onChange={this.handleInputChange}
              className={cx('input', 'before password')}
            />

            <label htmlFor={`afterPassword`}>after Password</label>
            <input id={`afterPassword`}
              type={`password`}
              ref={ref => this.inputAfterPassword = ref}
              name={`afterPassword`}
              placeholder={`after Password`}
              value={this.state.input.password}
              onChange={this.handleInputChange}
              className={cx('input', 'afterPassword')}
            />
            <div className={cx('button-group')}>
              <button type={`submit`} onClick={this.handleFormModify}>완료</button>
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
)(Modify);