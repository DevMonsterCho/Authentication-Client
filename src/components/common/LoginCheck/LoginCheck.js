import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as baseActions from 'store/modules/base';
import * as cookie from 'lib/cookie';

class LoginCheck extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    let sess = cookie.get('koa:sess.sig');
    console.log(sess);

    this.getCheck();
  }

  getCheck = () => {
    console.log(`getCheck`);
    const { BaseActions } = this.props;
    BaseActions.getAuthCheck();
  }

  render() {
    return (
      <div />
    )
  }

};



export default connect(
  (state) => ({
    user: state.user,
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(LoginCheck);