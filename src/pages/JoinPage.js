import React, { Component } from 'react';
import Join from 'components/member/Join';

class LoginPage extends Component {
  render() {
    return (
      <Join {...this.props}/>
    );
  }
};

export default LoginPage;