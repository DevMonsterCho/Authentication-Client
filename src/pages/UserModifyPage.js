import React, { Component } from 'react';
import Modify from 'components/member/Modify';

class LoginPage extends Component {
  render() {
    return (
      <Modify {...this.props}/>
    );
  }
};

export default LoginPage;