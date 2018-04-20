import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as baseActions from 'store/modules/base';

import crypto from 'crypto';

class MemberExtendComponent extends Component {
  constructor(props) {
    super(props);

  }

  cryptoPbkdf2Sync = (password) => {
      let key = crypto.pbkdf2Sync(password, 'salt', 777, 64, 'sha512');
      return key.toString('base64');
  }

  handleFormModify = async (e) => {
    e.preventDefault();

    let beforePassword = await this.cryptoPbkdf2Sync(this.inputBeforePassword.value);
    let afterPassword = await this.cryptoPbkdf2Sync(this.inputAfterPassword.value);

    const data = {
      name: this.inputName.value,
      email: this.inputEmail.value,
      beforePassword,
      afterPassword
    }
    console.log(data);
    this.props.BaseActions.postAuthModify(data).then(res => {
      if(res.error) return;
      return this.props.history.replace('/');
    });
  }
  handleFormJoin = async (e) => {
    e.preventDefault();
    let password = await this.cryptoPbkdf2Sync(this.inputPassword.value);
    const data = {
      name: this.inputName.value,
      email: this.inputEmail.value,
      password
    }
    console.log(data);
    this.props.BaseActions.postAuthJoin(data).then(res => {
      if(res.error) return;
      return this.props.history.replace('/');
    });
  }

  handleFormLogin = async (e) => {
    e.preventDefault();
    let password = await this.cryptoPbkdf2Sync(this.inputPassword.value);
    const data = {
      email: this.inputEmail.value,
      password
    }
    this.props.BaseActions.postAuthLogin(data).then(res => {
      if(res.error) return;
      return this.props.history.replace('/');
    });
  }

  handleInputChange = (e) => {
    const type = 'input';
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [type]: {
        ...this.state[type],
        [name]: value
      }
    })
  }

  render() {
    return (<div/>)
  }
}

export default connect(
  (state) => ({
    user: state.base.get('user').toJS(),
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
  })
)(MemberExtendComponent);