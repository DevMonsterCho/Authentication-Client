import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import * as baseActions from 'store/modules/base';
// import * as authApi from 'lib/api/auth';

import NotFoundPage from "pages/NotFoundPage";
import Layout from "components/common/Layout";
import KakaoLogin from "components/kakao/Login";

class KakaoLoginPage extends Component {
  render() {
    return (
      <Switch>
        <Layout>
          <div className={``} />
          <Route exact path="/kakao/login" component={KakaoLogin} />
        </Layout>
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default connect(
  state => ({
    user: state.base.get("user").toJS()
  }),
  dispatch => ({
    // BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(KakaoLoginPage);
