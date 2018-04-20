import React, { Component } from 'react';
import Login from 'components/member/Login';

class LoginPage extends Component {
  render() {
    return (
      <Login {...this.props}/>
    );
  }
};

export default LoginPage;