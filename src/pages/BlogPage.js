import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import * as baseActions from 'store/modules/base';
// import * as authApi from 'lib/api/auth';

import NotFoundPage from 'pages/NotFoundPage';
import Layout from 'components/common/Layout';
import BlogList from 'components/blog/BlogList';
import BlogWrite from 'components/blog/BlogWrite';
import BlogView from 'components/blog/BlogView';
import BlogModify from 'components/blog/BlogModify';

class HomePage extends Component {
  render() {
    return (
        <Switch>
        <Layout>
          <Route exact path="/blog" component={BlogList}/>
          <Route exact path="/blog/write" component={BlogWrite}/>
          <Route exact path="/blog/:id/write" component={BlogView}/>
          <Route exact path="/blog/:id/modify" component={BlogModify}/>
          </Layout>
          <Route component={NotFoundPage}/>
        </Switch>
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