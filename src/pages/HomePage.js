import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import * as baseActions from 'store/modules/base';
// import * as authApi from 'lib/api/auth';

import Layout from 'components/common/Layout';

class HomePage extends Component {
  render() {
    return (
      <Layout>
        Home
      </Layout>
    );
  }
};

export default connect(
  (state) => ({
    user: state.base.get('user').toJS(),
  }),
  (dispatch) => ({
    // BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(HomePage);